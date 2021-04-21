const Discord = require("discord.js");
const Random = require("srod-v2");
const config = require("../config");
const prefix = config.prefix;

module.exports = {
 name: "glass",
 aliases: [],
 description: "Returns a glass image",
 category: "Image",
 usage: "glass [user mention, user id, user name]",
 run: async (client, message, args) => {
  try {
   const amember = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.member;
   const embed = await Random.Glass({ Image: amember.user.displayAvatarURL({ format: "png" }), Color: "RANDOM" });
   return message.channel.send(embed);
  } catch (err) {
   message.channel.send({embed: {
    color: 16734039,
    description: "Something went wrong... :cry:"
   }})
  }
 }
}