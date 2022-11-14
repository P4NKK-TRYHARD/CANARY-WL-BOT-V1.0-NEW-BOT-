const Discord = require('discord.js');

module.exports = {
  name: "suspendido",
  aliases: ["suspendido"],
  execute: async(client, message, args) => {

const mencionado = message.mentions.users.first();
if(!mencionado) return message.reply('``❌ Error`` No ha mencionando a ningún usuario.');
let id = mencionado.id;

const embedDatos = new Discord.MessageEmbed() 
        
   .setTitle("<:suspendido:1041831391131877476> __**¡Whitelist Suspendida!**__ <:suspendido:1041831391131877476>")
   .setColor(0xff0000)
   .setDescription(`¡Vaya! ${mencionado}
   Algo inesperado ha pasado, vuelve a hacer las pruebas en cuanto el examinador/a te indique.
   ¡Buena suerte!`)
   .setFooter("© CanaryTM ", client.user.avatarURL())

client.channels.cache.get("1041810520963039282").send({ embeds: [embedDatos] }) 
message.channel.send("Wl enviada correctamente")

message.delete(5000)
  }
}