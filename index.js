const { Client, ButtonBuilder, TextInputBuilder, ModalBuilder, ActionRowBuilder, SelectMenuBuilder, EmbedBuilder, GatewayIntentBits, Partials } = require("discord.js");
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.MessageContent], shards: "auto", partials: [ Partials.Message, Partials.Channel, Partials.GuildMember, Partials.Reaction, Partials.GuildScheduledEvent, Partials.User, Partials.ThreadMember]});
const { readdirSync } = require("fs")
const moment = require("moment");
const config = require("./config.js");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');


module.exports = client;

require("./events/message.js")
require("./events/ready.js")

client.login(config.token).catch(e => {
console.log("Tokeninde Hatan Var Bota bağlanamadı | Airfax")
})