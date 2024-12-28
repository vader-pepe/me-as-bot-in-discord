import { Client } from 'discord.js-selfbot-v13';
import 'dotenv/config'

const client = new Client();
const token = process.env.TOKEN;

client.on('ready', async () => {
  if (client.user) {
    console.log(`${client.user.username} is ready!`);
  }
})

client.login(token);

