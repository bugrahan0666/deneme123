const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  
  
  
// 12. SATIRDA 2. ROL VAR
  
//------------------------------------KANALLAR-----------------------------------\\ STG
const tag = "ꂑ"; // TAGINIZ (BAŞA GELECEK) 
  
const kayıtlı = message.guild.roles.find(r => r.id === "763382186241556481"); // KADIN ROLÜNÜN İDSİ
  
// extra rol verme aktif etmek için hemen altaki ikinci & ucuncu adlı kısımdaki // işartetini kaldırın ve "54 55 59 60".ci satırdaki // işarterleri yine kaldırın.   
const ikinci = message.guild.roles.find(r => r.id === "763382186845929473");    //stg.addRole(ikinci) , stg.addRole(ucuncu) var 
const ucuncu = message.guild.roles.find(r => r.id === "763382227656507413");    
  
const unregister = message.guild.roles.find(r => r.id === "763382189587955732"); // UNREGİSTER ROLÜNÜN İDSİ
  
//------------------------------------KANALLAR-----------------------------------\\ STG
  
  
  
  
  
  
//------------------------------------KANALLAR-----------------------------------\\ STG
  
  const log = message.guild.channels.find(c => c.id === "763382252180078642"); // KAYIT KANALININ İDSİ
  const genelchat = message.guild.channels.find(c => c.id === "763382287651438592"); // GENEL SOHBET KANALININ İDİSİ
  const yedekleme = message.guild.channels.find(c => c.id === "763382318391099392"); // KAYITLARI SİZE ÖZEL GÖSTERİR.
  const dogrulandi = client.emojis.find(emoji => emoji.name === "destiera_pembeonay"); // EMOJİ İSMİ (SADECE İSİM : <> FALAN DEĞİL SADECE İSİM ÖRN: evet)
  if(!message.member.roles.array().filter(r => r.id === "763382161172594728")[0]) { // KAYIT YAPAN ROLÜN İDSİ
    
//------------------------------------KANALLAR-----------------------------------\\    STG
    



    
//------------------------------------------------ROL-VERME-----------------------------------------------\\     STG
    
    return message.channel.send("<a:destiera_onemli:762795528730837023> **Kayıt Yapabilmek İçin `Kayıt Sorumlusu` Rolüne Sahip Değilsiniz.**");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("**Bir kullanıcı girin.**")
    const stg = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("**Bir isim girin.**")
      if(!yas) return message.channel.send("**Bir yaş girin.**")
    stg.setNickname(`${tag} ${nick} | ${yas}`)
    stg.addRole(kayıtlı)
    stg.addRole(ikinci)
    stg.addRole(ucuncu)
    stg.removeRole(unregister)
    stg.setNickname(`${tag} ${nick} | ${yas}`)
    stg.addRole(kayıtlı)
    stg.addRole(ikinci)
    stg.addRole(ucuncu)
    stg.removeRole(unregister)
   
//------------------------------------------------ROL-VERME-----------------------------------------------\\    STG
    
    
    
    
    
    
//------------------------------------------------MESAJ-----------------------------------------------\\     STG
    
    const embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setTitle(`Kayıt Tamamlandı !`)
    .setDescription(`<a:destiera_brave:762812719464185906> Kayıt eden yetkili: <@${message.author.id}>\n\n<a:destiera_chromastar:762995039923470366> Verilen Roller: <@&${kayıtlı.id}>\n\n<a:destiera_pembeonay:762810306975236106> Yeni İsmin: \`${tag} ${nick} | ${yas}\``)
    .setColor("0xff5efd")
    log.send(embed)
    message.react(dogrulandi)
    
        const agla = new Discord.RichEmbed()
        genelchat.send(`<@${stg.user.id}> Aramıza katıldı, Hoş geldin! <a:destiera_tac:759552442957824052>`)   .then(msg => msg.delete(30000))   

    
    const embed2 = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)     
    .setTitle(`Arista Kayıt Logları`) 
    .addField(`Kayıt eden yetkili`,  `<@${message.author.id}>`, true)
    .addField(`Kayıt edilen kullanıcı`,  `<@${stg.user.id}>`, true)
    .addField(`Yeni İsmi`,  `${tag} ${nick} | ${yas}`, true)
    .addField(`Verelin Roller`,  `<@&${kayıtlı.id}>`, true)
    .addField(`Kayıt Edilen Kanal`,  `${message.channel.name}`, true)
    .setTimestamp()
    .setFooter(`Kodein`)
    .setColor("0x277ecd")
    yedekleme.send(embed2)
    

//------------------------------------------------MESAJ-----------------------------------------------\\       STG

  
  
  
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k", "girl", "woman"],
  permLevel: 0
};
exports.help = {
  name: "kız",
  description: "",
  usage: ""
};
   