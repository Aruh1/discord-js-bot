const { EmbedBuilder } = require("discord.js");
const speedTest = require("speedtest-net");

function createWaitingEmbed() {
    return new EmbedBuilder()
        .setTitle("Speedtest")
        .setColor(0xffff00)
        .setDescription("The Speedtest is running, please wait a bit.")
        .setThumbnail(
            "https://store-images.s-microsoft.com/image/apps.52586.13510798887693184.740d7baf-50aa-4e26-adec-ae739ac12068.c9ef9495-f245-4367-872b-c5cc7b48841d"
        )
        .setImage("https://b.cdnst.net/images/share-logo.png")
        .setFooter({ text: "This takes approximately 30 seconds." });
}

module.exports = {
    name: "speedtest",
    description: "Speed hosting bot",
    category: "ADMIN",
    command: {
        enabled: true
    },
    slashCommand: {
        enabled: true,
        ephemeral: false,
        options: []
    },
    async messageRun(message, args, data) {
        const waitingEmbed = createWaitingEmbed();
        const replyMessage = await message.safeReply({
            embeds: [waitingEmbed]
        });

        runSpeedTestAndRespond(replyMessage);
    },

    async interactionRun(interaction, data) {
        const waitingEmbed = createWaitingEmbed();
        await interaction.editReply({
            embeds: [waitingEmbed]
        });

        runSpeedTestAndRespond(interaction);
    }
};

async function runSpeedTestAndRespond(target, data) {
    try {
        const speed = await speedTest({ acceptLicense: true });
        const finishEmbed = new EmbedBuilder()
            .setTitle(`${target.user.client.user.username} Speedtest`)
            .setColor(0xffff00)
            .setDescription(
                `The Speedtest is done, here is the result:\nLocal: ${speed.isp}\nServer: ${speed.server.name} | ${speed.server.location} | ID: ${speed.server.id}\nHost: ${speed.server.host}\nPacket-Loss: ${speed.packetLoss}\nBot Ping: ${target.user.client.ws.ping} ms`
            )
            .setFooter({ text: "The Speedtest used is speedtest.net." })
            .setThumbnail(
                "https://store-images.s-microsoft.com/image/apps.52586.13510798887693184.740d7baf-50aa-4e26-adec-ae739ac12068.c9ef9495-f245-4367-872b-c5cc7b48841d"
            )
            .addFields({ name: "Result", value: `[View Result](${speed.result.url})` })
            .setImage(`${speed.result.url}.png`);

        await target.editReply({
            embeds: [finishEmbed]
        });
    } catch (error) {
        console.error("Speedtest error:", error);
        const errorEmbed = new EmbedBuilder()
            .setTitle("Speedtest")
            .setColor(0xff0000)
            .setDescription("An error occurred while running the Speedtest. Please try again later.")
            .setFooter({ text: "Error occurred during the Speedtest." });

        await target.editReply({
            embeds: [errorEmbed]
        });
    }
}
