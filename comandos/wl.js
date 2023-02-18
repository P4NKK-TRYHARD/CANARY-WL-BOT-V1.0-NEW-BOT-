const Discord = require('discord.js');



module.exports = {
  name: "aprobado",
  aliases: ["aprobado"],
  execute: async(client, message, args) => {

  
  if(!message.member.roles.cache.has('1075808799878823976')) { return message.channel.send("``Error ❌`` ¡Usted no tiene los permisos suficientes!"); }
const mencionado = message.mentions.users.first();
if(!mencionado) return message.reply('``❌ Error`` No ha mencionando a ningún usuario.');
let role = message.guild.roles.cache.get("1075808829612245144");
let member = message.mentions.members.first();
let id = mencionado.id;



const embedDatos = new Discord.MessageEmbed() 
        
   .setTitle("✅ __**Whitelist Aprobada**__ ✅")
   .setColor("#12F708")
   .setDescription(`¡Felicidades! ${mencionado}
   Has aprobado las pruebas, pasa a probar y jugar el servidor.
   ¡Te esperamos dentro!`)
   .setFooter(`© WonderRP corregida por `+ message.author.username , client.user.avatarURL())

client.channels.cache.get("1075808886965145722").send({ embeds: [embedDatos] })
member.roles.add(role).catch(console.error);
const user = message.author;
return message.channel.send(`<@${user.id}> Wl enviada correctamente`);



message.delete(5000)
  }
}
