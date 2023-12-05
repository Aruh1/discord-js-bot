require("module-alias/register");
const fetch = require("node-fetch");
const config = require("@root/config.js");
const Logger = require("@helpers/Logger.js");
const { execFile, execFileSync } = require("child_process");
const { createWriteStream, existsSync } = require("fs");

let lavalinkProcess;

async function checkJavaVersion() {
    return new Promise((resolve, reject) => {
        execFile("java", ["-version"], (_error, _stdout, stderr) => {
            if (stderr.includes("openjdk version")) {
                resolve();
            } else {
                execFileSync("sudo", ["apt", "install", "openjdk-17"]);
                main();
            }
        });
    });
}

async function startBot() {
    require("dotenv").config();

    if (config.shardManager.shardStatus == true) {
        const { ShardingManager } = require("discord.js");

        const manager = new ShardingManager("./bot.js", {
            totalShards: "auto",
            token: process.env.BOT_TOKEN,
            timeout: -1,
            respawn: true
        });

        manager.on("shardCreate", shard => Logger.log(`Launched shard ${shard.id}`));

        try {
            await manager.spawn({ amount: "auto", delay: 5500, timeout: 30000 });
        } catch (e) {
            console.log(e);
        }
    } else {
        require("./bot.js");
    }
}

async function startLavalink() {
    const { password, port } = config.MUSIC.LOCAL_LAVALINK;
    const env = { ...process.env, SERVER_PORT: `${port}`, LAVALINK_SERVER_PASSWORD: password };

    await new Promise(resolve =>
        execFile("fuser", ["-k", `${port}/tcp`]).on("close", code => (code === 1 ? resolve() : 0))
    );
    lavalinkProcess = execFile("java", ["-jar", "Lavalink.jar"], { env });

    lavalinkProcess.stdout.on("data", async chunk => {
        if (chunk.includes("Starting Launcher using Java")) {
            Logger.log(chunk.replace("Starting Launcher", "Starting Lavalink Launcher").match(/: (.+)/)[1]);
        }
        // Array.from(chunk.matchAll(/\d{4}-\d{2}-\d{2}\s*\d{2}:\d{2}:\d{2}\.\d{3}\s*\w*\s*\d*\s*-*\s*\[.+\]\s*.+?\s+:\s*([\w\W]+)/g)).forEach((mess) => {
        //     Logger.log(`Lavalink: ${mess[1].trim()}`);
        // });

        if (chunk.includes("Lavalink is ready to accept connections.")) {
            Logger.log(chunk.match(/: (.+)/)[1]);
            await startBot();
        }

        if (chunk.includes("Connection successfully established from lavaclient")) {
            Logger.log(chunk.replace("Connection", "Lavalink connection").match(/: (.+)/)[1]);
        }
    });
}

async function checkLavalinkRelease() {
    try {
        const response = await fetch("https://api.github.com/repos/lavalink-devs/Lavalink/releases/latest");
        const data = await response.json();
        const { assets } = data;

        if (assets.length > 0) {
            const downloadUrl = assets[0].browser_download_url;
            console.log("Latest release download URL:", downloadUrl);

            const response = await fetch(downloadUrl);
            const dest = createWriteStream("Lavalink.jar");

            response.body.pipe(dest);

            dest.on("finish", () => {
                main();
            });
        } else {
            console.log("No assets found for the latest release");
        }
    } catch (error) {
        console.error("Error fetching latest release:", error);
    }
}

async function main() {
    try {
        if (config.MUSIC.USE_LOCAL_LAVALINK) {
            await checkJavaVersion();
    
            if (existsSync("Lavalink.jar")) {
                await startLavalink();
            } else {
                await checkLavalinkRelease();
            }
        } else {
            startBot();
        }
    } catch (error) {
        console.error("Error main:", error);
    }
}

main();

process.on("SIGINT", () => {
    Logger.log("Terminating bot...");

    if (lavalinkProcess) {
        lavalinkProcess.kill();
        Logger.log("Killing lavalinkProcess...");
    }

    process.exit();
});
