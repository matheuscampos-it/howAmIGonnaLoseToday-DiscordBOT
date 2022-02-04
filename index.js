const mySecret = process.env['TOKEN']
const Discord = require("discord.js")
const { Client, Intents } = require('discord.js');
const keepAlive = require("./server")
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

let lolNames = [
  "Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "Azir","Blitzcrank", "Brand", "Braum", "Caitlyn", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr.Mundo", "Draven", "Elise","Evelynn", "Ezreal", "Fiddlesticks","Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim","Heimerdinger", "Irelia", "Janna", "Jarvan IV", "Jax", "Jayce", "Jinx", "Lee Sin", "Viego", "Gwen", "Akshan", "Vex", "Zyra", "Vi", "Ekko", "Akshan", "Aphelios", "Aurelion Sol", "Bard", "Camille", "Illaoi", "Ivern", "Janna", "Jhin", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "Leblanc", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nocturne", "Nunu and Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'koz", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Yasuo", "Xin Zhao", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe"
]

let roleNames = [
  "Top Laner", "Mid Laner", "Carry", "Jungler", "Support"
]

let csNames = [
  "Mirage", "Dust 2", "Vertigo", "Cache", "Ancient", "Overpass", "Inferno", "Nuke", "Train"
]

let csSites = [
  "B site as CT", "A site as CT", "Mid as CT"
]

let csRoleNames = [
  "Entry Fragger", "Awper", "Lurker", "Support"
]

let fortniteNames = [
  "Tilted Towers", "Coney Crossroads", "The Joneses", "The Daily Bugle", "Sleepy Sound", "Logjam Lumberyard", "Covert Cavern", "Greasy Groove", "Camp Cuddle", "Rocky Reels", "Condo Canyon", "Chonker's Speedway", "Shifty Shafts"
]

const randomLol = Math.floor(Math.random() * lolNames.length);


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "How? LoL" ){
  const lolName = lolNames[Math.floor(Math.random() * lolNames.length)]
  const roleName = roleNames[Math.floor(Math.random() * roleNames.length)]
  msg.reply(lolName + " as a " + roleName)
  }

  if (msg.content === "How? CS" ){
  const csName = csNames[Math.floor(Math.random() * csNames.length)]
  const csRoleName = csRoleNames[Math.floor(Math.random() * csRoleNames.length)]
  const csSite = csSites[Math.floor(Math.random() * csSites.length)]
  msg.reply(csName + " as " + csRoleName + ", " + csSite)
  }

  if (msg.content === "How? Fortnite" ){
  const fortniteName = fortniteNames[Math.floor(Math.random() * fortniteNames.length)]
  msg.reply("Dropping at: " + fortniteName)
  }
  })

  keepAlive()
  client.login(process.env.TOKEN)