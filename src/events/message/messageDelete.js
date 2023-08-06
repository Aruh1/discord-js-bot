const db = require("../../database/mongoose.js");
const { deletedChannelId } = requrire("../../../config.js")
const { MessageEmbed } = require("discord.js");
const { getSettings } = require("@schemas/Guild");

/**
 * @param {import('@src/structures').BotClient} client
 * @param {import('discord.js').Message|import('discord.js').PartialMessage} message
 */
module.exports = async (client, message) => {
    if (message.partial || message.author.bot || !message.guild) return;

    const settings = await getSettings(message.guild);
    if (!settings.automod.anti_ghostping || !settings.modlog_channel) return;

    const { members, roles, everyone } = message.mentions;

    const deletedMessageEmbed = new MessageEmbed()
        .setColor(0xff0000)
        .setTitle("Message Delete")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .addField("Content", `> ${message.content}`)
        .addField("Channel", `<#${message.channel.id}>`)
        .addFields(
            { name: "Username", value: `<@${message.author.id}>`, inline: true },
            { name: "User ID", value: message.author.id, inline: true },
            { name: "Message ID", value: message.id, inline: true }
        )
        .setTimestamp()
        .setFooter(client.user.username);

    message.attachments.forEach(attachment => {
        deletedMessageEmbed.addField("Attachment", attachment.url);
    });

    const deletedChannelId = settings.modlog_channel; // Define deletedChannelId

    try {
        const channel = await client.channels.fetch(deletedChannelId);
        channel.send({
            content: `DELETE: \`${message.author.username}\` (${message.author.id})`,
            embeds: [deletedMessageEmbed]
        });
    } catch (error) {
        console.error("Error sending deleted message log:", error);
    }

    if (members.size > 0 || roles.size > 0 || everyone) {
        const logChannel = message.guild.channels.cache.get(settings.modlog_channel);
        if (logChannel) {
            const ghostPingEmbed = new MessageEmbed()
                .setAuthor("Ghost ping detected")
                .setDescription(
                    `**Message:**\n${message.content}\n\n` +
                    `**Author:** ${message.author.tag} \`${message.author.id}\`\n` +
                    `**Channel:** ${message.channel}`
                )
                .addField("Members", members.size.toString(), true)
                .addField("Roles", roles.size.toString(), true)
                .addField("Everyone?", everyone ? "Yes" : "No", true)
                .setFooter(`Sent at: ${message.createdAt}`);

            try {
                logChannel.send({ embeds: [ghostPingEmbed] });
            } catch (error) {
                console.error("Error sending ghost ping log:", error);
            }
        }
    }
};
