 const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  const emoji = client.emojis.find(emoji => emoji.name === "arista_chromastar")
const emoji1 = client.emojis.find(emoji => emoji.name === "aresta_registerbook")
const emoji2 = client.emojis.find(emoji => emoji.name === ":arista_mavionay: ")//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert

 if (!message.member.roles.has('758466066698993664') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji}  Bilginize` , `${emoji1}  Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
let rochelle1 = message.mentions.users.first() || client.users.get(args.join(' ')) || message.guild.members.find(c=> c.id === args[0])
  if (!rochelle1) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji}  Bilgi` , `${emoji1}   Bir Kullanıcı Etiketlemeli ve ya ID Girmelisin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let user = message.mentions.users.first();
  let rochelle = message.guild.member(rochelle1)//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
let isim = args[1]
if(!isim) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji}  Bilgi` , `${emoji1} Geçerli bir İsim Yazmalısın!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
 let yas = args[2]
if(!yas) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji}  Bilgi` , `${emoji1} Geçerli bir Yaş Yazmalısın!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
 //TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
rochelle.setNickname(`ꂑ ${isim} | ${yas}`)


    message.react("698935589130731641");
  
  let embed = new Discord.RichEmbed() 
  .setColor("#E0FFFF")
  .setTitle('ꂑ Destiera', message.author.avatarURL)
  .setDescription(`**<a:arista_chromastar:762995039923470366> ${rochelle.user} Adlı Üyenin İsmi Başarıyla Kayıt Edildi** `)
.setFooter('Destiera ꂑ')//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  .setTimestamp()
  return message.channel.send(embed).then(m => m.delete(6000));

 
};
exports.conf = {
  enabled: true,//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  guildOnly: true,
  aliases: ["isim","n", "i"],
  kategori: "Yetkili Komutları",
  permLevel: 0
};
exports.help = {
  name: "nick",
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: "kayıt isim yaş"
};
