// welcomeMessage.js

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { token } = require('../../utils/discordAPI');

client.once('ready', () => {
  console.log('Bot is ready to welcome new members!');
});

client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
  if (!channel) return;

  channel.send(`Welcome to the server, ${member}! Please read the rules in the rules channel.`);
});

client.login(token);