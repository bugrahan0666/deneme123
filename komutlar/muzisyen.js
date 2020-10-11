  const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const müzisyen = message.guild.roles.find(r => r.id === "763382180222337075"); //buraya erkek rolünüzün id'sini koyun.
  const log = message.guild.channels.find(c => c.id === "763393328582098944"); //buraya kayıt log id koyun
  const dogrulandi = client.emojis.find(emoji => emoji.name === "arista_mavionay"); // örn (emoji => emoji.name === "siyah");
  if(!message.member.roles.array().filter(r => r.id === "763382161172594728") && !message.member.hasPermission('ADMINISTRATOR')[0]) { //buraya kayıt sorumlusu rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
    return message.channel.send("Bu Komutu Kullanmak için** <@&763382161172594728> Rolüne Sahip Olman Lazım");
 return message.channel.send ("Bir İsim Veya ID Girmelisin .");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girmelisin.")
    const c = message.guild.member(member)
    c.addRole(müzisyen)

    const embed = new Discord.RichEmbed()
    .setDescription(`**<@${c.user.id}>** adlı kişiye **<@&${müzisyen.id}>** rolü verildi. !`)
    .setColor("0x42fcd7")
    log.send(embed)
    message.react(dogrulandi)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["müzisyen"],
  permLevel: 0
};
exports.help = {
  name: "müzisyen",
  description: "",
  usage: ""
};
   