const Discord = require('discord.js');

module.exports = {
  name: "aprobado",
  aliases: ["aprobado"],
  execute: async(client, message, args) => {

const mencionado = message.mentions.users.first();
if(!mencionado) return message.reply('``❌ Error`` No ha mencionando a ningún usuario.');
let id = mencionado.id;

const embedDatos = new Discord.MessageEmbed() 
        
   .setTitle("<a:aprobado:1041814002239537213> __**Whitelist Aprobada**__ <a:aprobado:1041814002239537213>")
   .setColor("#12F708")
   .setDescription(`¡Felicidades! ${mencionado}
   Has aprobado las pruebas, pasa a probar y jugar el servidor.
   ¡Te esperamos dentro!`)
   .setFooter("© CanaryTM ", client.user.avatarURL())

client.channels.cache.get("1041810520963039282").send({ embeds: [embedDatos] }) 
message.channel.send("Wl enviada correctamente")
      
      
message.delete(5000)
  }
}