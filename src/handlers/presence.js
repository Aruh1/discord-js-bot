const { ActivityType } = require("discord.js");

/**
 * @param {import('@src/structures').BotClient} client
 */
function updatePresence(client) {
    let message = client.config.PRESENCE.MESSAGE;

    if (message.includes("{servers}")) {
        message = message.replaceAll("{servers}", client.guilds.cache.size);
    }

    if (message.includes("{members}")) {
        const members = client.guilds.cache.map(g => g.memberCount).reduce((partial_sum, a) => partial_sum + a, 0);
        message = message.replaceAll("{members}", members);
    }

    if (message.includes("{pingws}")) {
        message = message.replaceAll("{pingws}", client.ws.ping);
    }

    function convertMillisecondsToHoursMinutesSeconds(milliseconds) {
        const totalSeconds = Math.abs(Math.floor(milliseconds / 1000));
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return { days, hours, minutes, seconds };
    }

    if (message.includes("{hsrtime}")) {
        const currentTimeStamp = Date.now();
        const targetTimeStamp = new Date("2023-10-10T12:00:00+08:00").getTime();
        const timeDifference = currentTimeStamp - targetTimeStamp;
        const { days, hours, minutes, seconds } = convertMillisecondsToHoursMinutesSeconds(timeDifference);
        message = message.replaceAll("{hsrtime}", days);
    }

    const getType = type => {
        switch (type) {
            case "COMPETING":
                return ActivityType.Competing;

            case "LISTENING":
                return ActivityType.Listening;

            case "PLAYING":
                return ActivityType.Playing;

            case "WATCHING":
                return ActivityType.Watching;

            case "CUSTOM":
                return ActivityType.Custom;
        }
    };

    client.user.setPresence({
        status: client.config.PRESENCE.STATUS,
        activities: [
            {
                name: message,
                type: getType(client.config.PRESENCE.TYPE)
            }
        ]
    });
}

module.exports = function handlePresence(client) {
    updatePresence(client);
    setInterval(() => updatePresence(client), 10 * 1000);
};
