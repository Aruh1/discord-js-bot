const { EmbedBuilder } = require("discord.js");
const { getSettings } = require("@schemas/Guild");
const { deletedChannelId } = require("../../../config.js");

/**
 * @param {import('@src/structures').BotClient} client
 * @param {import('discord.js').Message|import('discord.js').PartialMessage} message
 */
module.exports = async (client, message) => {
    if (message.partial) return;

    const deleteEmbed = new EmbedBuilder()
        .setColor(0xff0000) // Red color for message deletion
        .setTitle("Message Deleted")
        .setAuthor({
            name: `${message.author.username}`,
            iconURL: message.author.displayAvatarURL()
        })
        .addFields(
            { name: "Content", value: `> ${message.content}` },
            { name: "Channel", value: `<#${message.channel.id}>` },
            { name: "Username", value: `<@${message.author.id}>`, inline: true },
            { name: "User ID", value: message.author.id, inline: true },
            { name: "Message ID", value: message.id, inline: true }
        )
        .setTimestamp()
        .setFooter({ text: client.user.username });

    message.attachments.forEach(attachment => {
        deleteEmbed.addFields({ name: "Attachment", value: attachment.url });
    });

    const channel = await client.channels.fetch(deletedChannelId);

    channel.send({
        content: `DELETED: \`${message.author.username}\` (${message.author.id})`,
        embeds: [deleteEmbed]
    });

    if (message.author.bot || !message.guild) return;
    const settings = await getSettings(message.guild);
    if (!settings.automod.anti_ghostping || !settings.modlog_channel) return;
    const { members, roles, everyone } = message.mentions;

    // Check message if it contains mentions
    if (members.size > 0 || roles.size > 0 || everyone) {
        const logChannel = message.guild.channels.cache.get(settings.modlog_channel);
        if (!logChannel) return;

        const embed = new EmbedBuilder()
            .setAuthor({ name: "Ghost ping detected" })
            .setDescription(
                `**Message:**\n${message.content}\n\n` +
                    `**Author:** ${message.author.tag} \`${message.author.id}\`\n` +
                    `**Channel:** ${message.channel.toString()}`
            )
            .addFields(
                {
                    name: "Members",
                    value: members.size.toString(),
                    inline: true
                },
                {
                    name: "Roles",
                    value: roles.size.toString(),
                    inline: true
                },
                {
                    name: "Everyone?",
                    value: everyone ? "Yes" : "No",
                    inline: true
                }
            )
            .setFooter({ text: `Sent at: ${message.createdAt}` });

        logChannel.safeSend({ embeds: [embed] });
    }
};
