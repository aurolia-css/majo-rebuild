const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
 name: "balance",
 aliases: ["bal"],
 description: "Display your or a mentioned user balance",
 category: "Economy",
 usage: "balance <user>",
 run: async (client, message, args) => {
  try {
   let user = message.mentions.members.first() || message.author;
   let bal = db.fetch(`money_${message.guild.id}_${user.id}`)
   if (bal === null) bal = 0;
   let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
   if (bank === null) bank = 0;
   const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`💸 ${user}'s Balance:`, message.guild.iconURL({ dynamic: true, format: 'png'}))
    .setDescription(`:money_with_wings: Pocket: \`${bal}\`\n:moneybag: Bank: \`${bank}\``)
    .setTimestamp()
    .setFooter("Requested by " + `${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
   message.channel.send(embed)
  } catch(err) {
   message.channel.send({embed: {
    color: 16734039,
    description: "Something went wrong... :cry:"
   }})
  }
 }
}