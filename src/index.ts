import { Client } from 'discord.js-selfbot-v13';
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

    const newActivity = ``;

    c.user.setPresence({
      status: "online",
    });
    c.user.setActivity(newActivity, {
      type: "LISTENING",
      url: 'https://open.spotify.com/track/0EdMqiKs9LKXhspeQhl4RZ'
    });
  }
});

client.on('error', async () => {
  process.on("SIGINT", onCloseSignal);
  process.on("SIGTERM", onCloseSignal);
});

client.login(token);

