const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const snipe = Schema(
    {
        content: String,
        channelId: String,
        userAvatarURL: String,
        userDisplayName: String
    },
    { timestamps: true }
);

module.exports = {
    snipe: model("snipe", snipe)
};
