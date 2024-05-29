Filename: discord-moderation-bot/src/commands/mute.js

const Discord = require('discord.js');

module.exports = {
  name: 'mute',
  description: 'Mute a user in the server',
  execute(message, args) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message.reply('You do not have permission to mute users');
    }

    const target = message.mentions.users.first();
    if (!target) {
      return message.reply('Please mention a user to mute');
    }

    const mainRole = message.guild.roles.cache.find(role => role.name === 'member');
    const muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

    if (!mainRole || !muteRole) {
      return message.reply('Roles not found. Please create a "member" and a "muted" role');
    }

    const member = message.guild.members.cache.get(target.id);
    member.roles.add(muteRole.id);
    member.roles.remove(mainRole.id);

    message.channel.send(`<@${member.user.id}> has been muted`);
  }
};