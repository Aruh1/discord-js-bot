const { EmbedBuilder } = require("discord.js");
const { EMBED_COLORS } = require("@root/config");

/**
 * @param {import('discord.js').User} user
 */
module.exports = user => {
    const x64 = user.displayAvatarURL({ extension: "png", size: 64 });
    const x128 = user.displayAvatarURL({ extension: "png", size: 128 });
    const x256 = user.displayAvatarURL({ extension: "png", size: 256 });
    const x512 = user.displayAvatarURL({ extension: "png", size: 512 });
    const x1024 = user.displayAvatarURL({ extension: "png", size: 1024 });
    const x2048 = user.displayAvatarURL({ extension: "png", size: 2048 });

    const embed = new EmbedBuilder()
        .setTitle(`Avatar of ${user.username}`)
        .setColor(EMBED_COLORS.BOT_EMBED)
        .setImage(x2048)
        .setDescription(
            `Links: • [x64](${x64}) ` +
                `• [x128](${x128}) ` +
                `• [x256](${x256}) ` +
                `• [x512](${x512}) ` +
                `• [x1024](${x1024}) ` +
                `• [x2048](${x2048}) `
        );

    return {
        embeds: [embed]
    };
};
