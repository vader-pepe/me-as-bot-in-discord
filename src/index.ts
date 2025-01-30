import { Client } from 'discord.js-selfbot-v13';
import { readFile, writeFile } from "node:fs/promises";
import 'dotenv/config'

const client = new Client();
const token = process.env.TOKEN;
const dayInMilliseconds = 1000 * 60 * 60 * 24;

const onCloseSignal = () => {
  console.info("sigint received, shutting down");
  setTimeout(() => process.exit(1), 10000).unref(); // Force shutdown after 10s
};

client.once('ready', async () => {
  if (client.user) {
    console.log(`${client.user.username} is ready!`);

    setInterval(async () => {
      let days = Number(await readFile("days", "utf8").catch(() => "0"));
      const newActivity = `No games until I finished my own game (${days - 1}/30)`;

      client.user.setActivity(newActivity);
      await writeFile("days", `${days - 1}`);
    }, dayInMilliseconds);
  }
});

client.on('error', async () => {
  process.on("SIGINT", onCloseSignal);
  process.on("SIGTERM", onCloseSignal);
});

client.login(token);

