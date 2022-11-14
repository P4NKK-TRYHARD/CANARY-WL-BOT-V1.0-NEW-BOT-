const Discord = require('discord.js');

module.exports = {
	name: 'guildMemberAdd',
async execute(member, client) {
        
const embedDatos = new Discord.MessageEmbed() 
   .setTitle(`¡Hey! 👋`)
    .setColor(0xff0000)
    .setDescription(`\n\n¡Hey **${member.user.tag}**! 👋\nBienvenid@ a **ReventaosRP**, donde podrás empezar una nueva vida en un mundo nuevo. 🌍\n\nRecuerda pasarte por los canales <#986648269880983632> y  <#986648270820487218> para saber las normas. 📚\n\nEn <#986648271843893289> anunciaremos todo lo que sea de importancia en el servidor. 📣\n\nY con todo esto y mucho más... \n¡Disfruta!`)
    .setImage(`https://cdn-longterm.mee6.xyz/plugins/welcome/images/936959254747820043/de83cc5650070e0b411e1e60033af2b5a3a3f2997fc85cb6654f7e647d93b817.png`)
    .setThumbnail("https://media.discordapp.net/attachments/917476861976649799/985621001100464158/reventaosrp.png?width=656&height=656")
        client.channels.cache.get("986648266672328764").send({ embeds: [embedDatos] }) 

        }
 
}