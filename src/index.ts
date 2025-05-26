import { Client, WebhookClient } from 'discord.js-selfbot-v13';
import 'dotenv/config';

const client = new Client();
const token = process.env.TOKEN;
const source_server = process.env.SOURCE_SERVER_ID;
const webhook_url = process.env.WEBHOOK_URL;

const webhook = new WebhookClient({ url: webhook_url || "" });

const onCloseSignal = () => {
  console.info("sigint received, shutting down");
  setTimeout(() => process.exit(1), 10000).unref(); // Force shutdown after 10s
};

client.once('ready', async (c) => {
  if (c.user) {
    console.log(`${c.user.username} is ready!`);

    c.on('messageCreate', async (message) => {
      if (message.author.bot || !message.guild) return;
      if (message.guild.id !== source_server) return;
      let thread_id = "";

      // alya
      if (message.channelId === "1222541310603427900") {
        thread_id = "1376497961609068566";
      };
      // 	Amanda
      if (message.channelId === "1222576952339202159") {
        thread_id = "1376498064587620412";
      };
      // 	anin
      if (message.channelId === "1222541397115011072") {
        thread_id = "1376498244221272144";
      };
      // 	aralie
      if (message.channelId === "1232594754727055392") {
        thread_id = "1376507048845381672";
      };
      // 	atin
      if (message.channelId === "1222575280976171069") {
        thread_id = "1376504748018110545";
      };
      // 	auwia
      if (message.channelId === "1312759028568297612") {
        thread_id = "1376507251216355408";
      };
      // 	cathy
      if (message.channelId === "1222541258183016448") {
        thread_id = "1376499599514013736";
      };
      // 	chealse
      if (message.channelId === "1222541188108914689") {
        thread_id = "1376499755487592499";
      };
      // 	Christy
      if (message.channelId === "1222569953241071727") {
        thread_id = "1376498168329404497";
      };
      // 	cynthia
      if (message.channelId === "1222541079191224440") {
        thread_id = "1376500594969153546";
      };
      // 	daisy
      if (message.channelId === "1222541032558825586") {
        thread_id = "1376500725689094224";
      };
      // 	delynn
      if (message.channelId === "1232594899103387698") {
        thread_id = "1376507122782572634";
      };
      // 	dena
      if (message.channelId === "1222540977852645436") {
        thread_id = "1376500664821219338";
      };
      // 	ekin
      if (message.channelId === "1312759404109627493") {
        thread_id = "1376509452035035166";
      };
      // 	eli
      if (message.channelId === "1222570127829241906") {
        thread_id = "1376503512317562920";
      };
      // 	elin
      if (message.channelId === "1222540924421279784") {
        thread_id = "1376499698679939144";
      };
      // 	Ella
      if (message.channelId === "1222577312025804922") {
        thread_id = "1376502158937161728";
      };
      // 	erine
      if (message.channelId === "1232595295389351936") {
        thread_id = "1376508346554646539";
      };
      // 	feni
      if (message.channelId === "1222564076975292526") {
        thread_id = "1376501742035931166";
      };
      // 	fiony
      if (message.channelId === "1222573380369121330") {
        thread_id = "1376501842485313606";
      };
      // 	Freya
      if (message.channelId === "1222571197934473327") {
        thread_id = "1376501906536529930";
      };
      // 	fritzy
      if (message.channelId === "1232595376733683762") {
        thread_id = "1376501986840547389";
      };
      // 	gendis
      if (message.channelId === "1222540864111251486") {
        thread_id = "1376503150986526841";
      };
      // 	giia
      if (message.channelId === "1312759276598726676") {
        thread_id = "1376508428960268448";
      };
      // 	gita
      if (message.channelId === "1222565199773569115") {
        thread_id = "1376503259669463091";
      };
      // 	gracia
      if (message.channelId === "1222564357418782830") {
        thread_id = "1376506932583465042";
      };
      // 	gracie
      if (message.channelId === "1222540813725339729") {
        thread_id = "1376503338555932672";
      };
      // 	greesel
      if (message.channelId === "1222540770423083122") {
        thread_id = "1376503449746931793";
      };
      // 	indah
      if (message.channelId === "1222575239251234957") {
        thread_id = "1376504412524118096";
      };
      // 	Indira
      if (message.channelId === "1222577367323639871") {
        thread_id = "1376504495596503111";
      };
      // 	intan
      if (message.channelId === "1312759567729561652") {
        thread_id = "1376511209595080714";
      };
      // 	jemima
      if (message.channelId === "1312759484472492063") {
        thread_id = "1376509571094286436";
      };
      // 	Jessi
      if (message.channelId === "1222571404357144728") {
        thread_id = "1376504576051646574";
      };
      // 	kimmy
      if (message.channelId === "1232595710441160725") {
        thread_id = "1376515693826019458";
      };
      // 	lana
      if (message.channelId === "1232595157962981377") {
        thread_id = "1376499223394127922";
      };
      // 	levi
      if (message.channelId === "1232597019638501417") {
        thread_id = "1376509619706531851";
      };
      // 	lia
      if (message.channelId === "1222577424731078686") {
        thread_id = "1376498322650562630";
      };
      // 	lily
      if (message.channelId === "1232595439526871070") {
        thread_id = "1376508484509765732";
      };
      // 	lulu
      if (message.channelId === "1222573618979012760") {
        thread_id = "1376505672195375234";
      };
      // 	Lyn
      if (message.channelId === "1222577474081263678") {
        thread_id = "1376504694981001227";
      };
      // 	maira
      if (message.channelId === "1312759369464807555") {
        thread_id = "1376508560329936967";
      };
      // 	marsha
      if (message.channelId === "1222575307794681917") {
        thread_id = "1376505760569229343";
      };
      // 	michie
      if (message.channelId === "1222540343187210360") {
        thread_id = "1376505857537474670";
      };
      // 	mikaela
      if (message.channelId === "1312759528386859111") {
        thread_id = "1376509682121703495";
      };
      // 	muthe
      if (message.channelId === "1222571640672620554") {
        thread_id = "1376505933823348876";
      };
      // 	nachia
      if (message.channelId === "1232596888776081418") {
        thread_id = "1376511172362375239";
      };
      // 	nala
      if (message.channelId === "1232595895938318388") {
        thread_id = "1376515624339243008";
      };
      // 	nayla
      if (message.channelId === "1232596970707750966") {
        thread_id = "1376510712708468746";
      };
      // 	oline
      if (message.channelId === "1232596828961374338") {
        thread_id = "1376511337936715786";
      };
      // 	olla
      if (message.channelId === "1222571802723618908") {
        thread_id = "1376500806576115713";
      };
      // 	oniel
      if (message.channelId === "1222573667301593279") {
        thread_id = "1376500481500905584";
      };
      // 	raisha
      if (message.channelId === "1222577520130523228") {
        thread_id = "1376506000005402756";
      };
      // 	regie
      if (message.channelId === "1232596751706357812") {
        thread_id = "1376511486825988116";
      };
      // 	ribka
      if (message.channelId === "1232596690880692344") {
        thread_id = "1376515530957131806";
      };
      // 	rilly
      if (message.channelId === "1312759240963788861") {
        thread_id = "1376508191973703835";
      };
      // 	trisha
      if (message.channelId === "1232595507801620480") {
        thread_id = "1376509527007953007";
      };
      // 	virgi
      if (message.channelId === "1312758990152929390") {
        thread_id = "1376507207465697290";
      };

      const embeds = message.embeds.map(embed => ({
        title: embed.title || undefined,
        description: embed.description || undefined,
        url: embed.url || undefined,
        color: embed.color || undefined,
        timestamp: `${embed.timestamp}` || undefined,
        fields: embed.fields.map(field => ({
          name: field.name,
          value: field.value,
          inline: field.inline
        })),
        author: embed.author ? {
          name: embed.author.name,
          url: embed.author.url,
          icon_url: embed.author.iconURL
        } : undefined,
        footer: embed.footer ? {
          text: embed.footer.text,
          icon_url: embed.footer.iconURL
        } : undefined,
        image: embed.image ? { url: embed.image.url } : undefined,
        thumbnail: embed.thumbnail ? { url: embed.thumbnail.url } : undefined
      }));

      try {
        webhook.send({
          content: message.content || " ",
          files: [...message.attachments.values()],
          threadId: thread_id,
          embeds
        });
      } catch (err) {
        console.error(err);
      }
    });
  }
});

client.on('error', async () => {
  process.on("SIGINT", onCloseSignal);
  process.on("SIGTERM", onCloseSignal);
});

client.login(token);

