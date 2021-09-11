const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Online!`);
});

client.on('messageCreate', message => {
  if (message.content === 'test') {
    message.channel.send('test');
  }
});

client.login('<place token here>');