import { Client } from "discord.js-selfbot-v13";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  partials: ["CHANNEL"], // required for DMs
});

const GUILD_ID = process.env.GUILD_ID;

if (!GUILD_ID) {
  throw new Error("GUILD_ID is not defined in .env");
}

client.once("ready", () => {
  console.log(`Logged in as ${client.user?.tag}`);
});

client.on("messageCreate", async (message) => {
  try {
    // Only handle DMs, ignore bot messages
    if (message.guild || message.author.bot) return;

    if (message.content.toLowerCase() === "unban") {
      const guild = await client.guilds.fetch(GUILD_ID);
      const member = await guild.members.fetch(message.author.id).catch(() => null);

      if (!member) {
        await message.reply("You are not in the server.");
        return;
      }

      try {
        await member.timeout(null); // removes timeout
        await message.reply("Your timeout has been removed!");
      } catch (err) {
        console.error(err);
        await message.reply("Failed to remove your timeout. Please contact an admin.");
      }
    }
  } catch (err) {
    console.error("Error handling DM:", err);
  }
});

client.login(process.env.TOKEN);
