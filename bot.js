const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Gokalp 7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//---------------------------------STRIGA ÇOK TATLI BİRİSİ BEN OLSAM VİDEOLARINA LİKE ATAR KANALINA ABONE OLUR VİDEOSUNA YORUM YAPARDIM BU ARADA---------------------------------\\





//-----------------------GİRENE-ROL-VERME----------------------\\     STG

client.on("guildMemberAdd", member => {
  member.addRole('763382189587955732'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});

//-----------------------GİRENE-ROL-VERME----------------------\\     STG









//----------------------------------------------------HOŞ-GELDİN-MESAJI---------------------------------------------------\\     STG


client.on("guildMemberAdd", async member => {
  require("moment-duration-format");
  moment.locale("tr");
  let user = client.users.get(member.id);
  let tarih = moment(member.user.createdAt.getTime()).format("LLL");
  let gün = moment
    .duration(new Date().getTime() - member.user.createdAt.getTime())
    .format("D");
  let resim = new Discord.Attachment(
    "https://media.discordapp.net/attachments/754681422022705276/761148683219369984/tumblr_mao6g2V0ej1r5gw45o4_500.gif"
  );

  let kişi = member.guild.memberCount;
  let kayıtcırol = "763382161172594728"; //Yetkili rolünüz ID'sini girin.
  let kanal = client.channels.get("763382252180078642"); //Kanalınızın ID'sini girin.
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün1 = moment.duration(kurulus).format("D");
  var devtr;

  if (kurulus < 1296000000)
    devtr = "Hesabınız : Şüpheli <a:destiera_azalis:759552459630313532> ";
  if (kurulus > 1296000000)
    devtr = "Hesabınız : Güvenli <a:destiera_artis:759781952990609429>";
  let emoji2 = client.emojis.find(emoji => emoji.name === "yldz");

  kanal.send(
    `<a:arista_tac:759552442957824052> **Merhaba** <@${
      member.user.id
    }>  ** Sunucumuza hoşgeldin**\n\n<a:destiera_bluediamond:762812727869571112> **Seninle birlikte** ${kişi} **kişiyiz.**\n\n** <a:destiera_brave:762812719464185906>  Hesabın kurulduğu tarih;  __${tarih}__' **\n\n**<a:destiera_siyahonay:762799394860433418>  <@&763382161172594728> Rolündeki Yetkililer Seninle ilgilenecektir.**\n\n<a:destiera_infinity1:762977928472035338>  **ꂑ Tagımızı alarak bize destek olmak istermisin dosutum **  `,
    resim
  );
});
//----------------------------------------------------HOŞ-GELDİN-MESAJI---------------------------------------------------\\     STG










//-----------------------ŞÜPHELİ-HESAP----------------------\\     STG

client.on("guildMemberAdd", member => {
  var moment = require("moment")
  require("moment-duration-format")
  moment.locale("tr")
   var {Permissions} = require('discord.js');
   var x = moment(member.user.createdAt).add(7, 'days').fromNow()
   var user = member.user
   x = x.replace("birkaç saniye önce", " ")
   if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
   var rol = member.guild.roles.get("763382193850155008") // ŞÜPHELİ HESAP ROLÜNÜN İDSİNİ GİRİN
   var kayıtsız = member.guild.roles.get("763382189587955732") // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
   member.addRole(rol)
   member.removeRole(kayıtsız)
member.user.send('Selam Dostum Ne Yazık ki Sana Kötü Bir Haberim Var Hesabın 1 Hafta Gibi Kısa Bir Sürede Açıldığı İçin Fake Hesap Katagorisine Giriyorsun Lütfen Bir Yetkiliyle İletişime Geç Onlar Sana Yardımcı Olucaktır.')
setTimeout(() => {

        member.removeRole(kayıtsız.id);

}, 1000)


   }
        else {

        }
    });


//-----------------------ŞÜPHELİ-HESAP----------------------\\     STG











//-----------------------TAG-ROL----------------------\\     STG

client.on('userUpdate', async user => {
   let tag = "ꂑ"; // TAGINIZ
  let sunucuid = "749999639004184606"; //Buraya sunucunuzun IDsini yazın
  let rol = "763382178230042654"; //TAG ALINCA VERİLECEK ROL İDSİ
  let channel = client.guilds.get(sunucuid).channels.find(x => x.name == 'tag-log'); // TAG ALINCA HANGİ KANALA MESAJ ATILACAKSA YAZIN
  if (!tag) return;
  if (!rol) return;
  if (!channel) return;
  let member = client.guilds.get(sunucuid).members.get(user.id);
  if (!member) return;
  if (!member.roles.has(rol)) {
    if (member.user.username.includes(tag)) {
      member.addRole(rol)
      const tagalma = new Discord.RichEmbed()
      .setColor("GREEN")
      .setDescription(`<@${user.id}> adlı kişi, ${tag} tagını aldığından dolayı <@&${rol}> rolünü kazandı.`)
      .setTimestamp()
      channel.send(tagalma)
    }
  }else{
    if (!member.user.username.includes(tag)) {
      member.removeRole(rol)
      const tagsilme = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(`<@${user.id}> adlı kişi, ${tag} tagını sildiğinden dolayı <@&${rol}> rolünü kaybetti.`)
      .setTimestamp()
      channel.send(tagsilme)
    }
  }
});

//-----------------------TAG-ROL----------------------\\     STG








//-----------------------TAG-KONTROL----------------------\\     STG

client.on("guildMemberAdd", member => {
let tag = "ꂑ"; // TAGINIZ
let sunucuid = "749999639004184606"; // SUNUCUİDSİ
let rol = "763382178230042654"; // TAG ALINCA VERİLECEK ROL İDSİ
let channel = client.guilds.get(sunucuid).channels.find(x => x.name == 'tag-log'); // TAG ALINCA HANGİ KANALA MESAJ ATILACAKSA YAZIN
if(member.user.username.includes("ꂑ  ")){ // TEKRAR TAGINIZI GİRİN
member.addRole("763382178230042654") // TEKRAR TAG ROLÜNÜN İDSİN GİRİN
  const tagalma = new Discord.RichEmbed()
      .setColor("GREEN")
      .setDescription(`<@${member.id}> adlı kişi **Taglı Sunucumuza Katıldı !**, ${tag} tagını aldığından dolayı <@&${rol}> rolünü kazandı.`)
      .setTimestamp()
      channel.send(tagalma)
}
})

//-----------------------TAG-KONTROL----------------------\\     STG











//// OTO-ROL ////
client.on("guildMemberAdd", async member => {
  member.addRole("763382189587955732");
  const rochelle = member.guild.channels.find(
    channel => channel.id === "763393575450574858"
  );
  const rochelle1 = new Discord.RichEmbed()
    .setColor("RED")
    .addField(
      ` Hoş Geldin Dostum`,
      ` ${member} Adlı Üye Sunucumuza Katıldı, <@&763382189587955732> Rolünü Verdim ! `
    );
  rochelle.send(rochelle1);
}); 

//// SES-GİREN-ÇIKAN-LOG ////
client.on("voiceStateUpdate", async (thrones, sanal) => {
  let voiceLog = thrones.guild.channels.find(c => c.name === "voice-log");
  if (thrones.voiceChannel === sanal.voiceChannel) return;
  //if()
  if (thrones.voiceChannel && !sanal.voiceChannel)
    return voiceLog
      .send({
        embed: {
          description:
            "<@" +
            thrones.id +
            "> adlı kullanıcı **" +
            thrones.voiceChannel +
            "** kanalından çıkış yapdı.",
          color: Math.floor(Math.random() * (0xffffff + 1)),
          timestamp: new Date()
        }
      })
      .catch(console.error);

  if (!thrones.voiceChannel && sanal.voiceChannel)
    return voiceLog
      .send({
        embed: {
          description:
            "<@" +
            sanal.id +
            "> adlı kullanıcı **" +
            sanal.voiceChannel +
            "** kanalına giriş yapdı.",
          color: Math.floor(Math.random() * (0xffffff + 1)),
          timestamp: new Date()
        }
      })
      .catch(console.error);

  if (thrones.voiceChannel !== sanal.voiceChannel)
    return voiceLog
      .send({
        embed: {
          description:
            "<@" +
            thrones.id +
            "> adlı kullanıcı **" +
            thrones.voiceChannel +
            "** kanalından **" +
            sanal.voiceChannel +
            "** kanalına giriş yapdı.",
          color: Math.floor(Math.random() * (0xffffff + 1)),
          timestamp: new Date()
        }
      })
      .catch(console.error);
}); 

//////////// SA - AS - MERHABA - TAG- LİNK KOMUTLARI OTO CEVAP
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "sa") {
    msg.reply("**Aleyküm Selam Hoşgeldin!** <a:arista_kalp:759787893425700904>  "); 
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "merhaba") {
    msg.reply("**Merhaba Nasılsın!** <a:arista_kalp:759787893425700904>  ");
  }
});
//Zcode
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "Sea") {
    msg.reply("**Aleyküm Selam Hoşgeldin!** <a:arista_kalp:759787893425700904>  ");//TlhaMert Youtube Kanalı : https://youtube.com/c/TlhaMert
  }
});
//Zcode
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "linkk") {
    msg.reply(" https://discord.gg/pp7udJN  ");
  } 
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "Sa") {
    msg.reply("**Aleyküm Selam Hoşgeldin!** <a:arista_kalp:759787893425700904>  ");
  }
});


client.on("message", async msg => {
  if (msg.content.toLowerCase() === "Bb") {
    msg.reply("**Görüşürüz Yeniden Gel Olurmu ?** <a:arista_kalp:759787893425700904>  "); 
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "bb") {
    msg.reply("**Görüşürüz Yeniden Gel Olurmu ? ** <a:arista_kalp:759787893425700904>  ");
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "bB") {
    msg.reply("**Görüşürüz Yeniden Gel Olurmu ?** <a:arista_kalp:759787893425700904>  "); 
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "Baybay") {
    msg.reply("**Görüşürüz Yeniden Gel Olurmu ?** <a:arista_kalp:759787893425700904>  ");
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "İyi Geceler") {
    msg.reply("**İyi Geceler Sanada** <a:arista_kalp:759787893425700904>  ");
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "iyi geceler") {
    msg.reply("**İyi Geceler Sanada** <a:arista_kalp:759787893425700904>  ");
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "İYİ GECELER") {
    msg.reply("**İyi Geceler Sanada** <a:arista_kalp:759787893425700904>  ");
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "Günaydın") {
    msg.reply("**Sanda Günadyın Bebiş ** <a:arista_kalp:759787893425700904>  ");
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "günaydın") {
    msg.reply("**Sanda Günadyın Bebiş ** <a:arista_kalp:759787893425700904>  ");
  }
});


//////// OTO-NİCK-DEGİŞTİRME //////
client.on("guildMemberAdd", member => {
  let rakamlar = Array(9)
    .fill(0)
    .map((_, index) => index + 1);

  let nickkontrol = member.user.username.split("ꂑ İsim | Yaş");

  if (!tumHarfler("a", "z").some(harf => nickkontrol.includes(harf))) {
    member.setNickname(`ꂑ  İsim | Yaş `); //Botun değiştirmesini istediğiniz ismi girin.
  } else {
    return; //DevTR
  }

  function tumHarfler(charA, charZ) {
    let a = [],
      i = charA.charCodeAt(0),
      j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
      a.push(String.fromCharCode(i));
    }
    return a;
  }
});

//SesSokma
client.on("ready", () => {   // KALDIRINCA AKTİF OLUR
 client.channels.get("763382255929524224").join();   // KALDIRINCA AKTİF OLUR
}) 