const Discord = require('discord.js');

module.exports = {
  name: 'warn',
  description: 'Warn a user for violating server rules',
  execute(message, args) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .send(`You have been warned in ${message.guild.name} for violating server rules.`)
          .catch((err) => {
            console.error(`Could not send warning DM to ${user.tag}. Error: ${err}`);
            message.channel.send(`Failed to warn ${user.tag}.`);
          });
        message.channel.send(`${user.tag} has been warned.`);
      } else {
        message.channel.send('That user is not in this server.');
      }
    } else {
      message.channel.send('You need to mention a user to warn.');
    }
  },
};