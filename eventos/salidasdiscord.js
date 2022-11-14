const Discord = require('discord.js');

module.exports = {
	name: 'guildMemberRemove',
async execute(member, client) {
        
const embedDatos = new Discord.MessageEmbed() 
   .setTitle(`¡Adiós! 👋`)
    .setColor(0xff0000)
    .setDescription(`\n\nEl usuario **${member.user.tag}** se marcho del discord`)
    .setImage(`https://cdn-longterm.mee6.xyz/plugins/welcome/images/936959254747820043/de83cc5650070e0b411e1e60033af2b5a3a3f2997fc85cb6654f7e647d93b817.png`)
    .setThumbnail("https://media.discordapp.net/attachments/917476861976649799/985621001100464158/reventaosrp.png?width=656&height=656")
        client.channels.cache.get("986648267217600544").send({ embeds: [embedDatos] }) 

        }
 
}