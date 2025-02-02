import { Client } from 'discord.js-selfbot-v13';
import { readFile, writeFile } from "node:fs/promises";
import { schedule } from "node-cron";
import 'dotenv/config'

const client = new Client();
const token = process.env.TOKEN;

const onCloseSignal = () => {
  console.info("sigint received, shutting down");
  setTimeout(() => process.exit(1), 10000).unref(); // Force shutdown after 10s
};

client.once('ready', async (c) => {
  if (c.user) {
    console.log(`${c.user.username} is ready!`);

    schedule("00 00 * * *", async function() {
      console.log("Interval ran");
      const days = Number(await readFile("days", "utf8").catch(() => "0"));
      const newActivity = `No games until I finished my own game (${days + 1}/30)`;

      c.user.setPresence({
        status: "online",
      });
      c.user.setActivity(newActivity, {
        type: "CUSTOM",
      });
      await writeFile("days", `${days + 1}`);
    });
  }
});

client.on('error', async () => {
  process.on("SIGINT", onCloseSignal);
  process.on("SIGTERM", onCloseSignal);
});

client.login(token);

