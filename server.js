 const Discord = require('discord.js');
const fs = require('fs');
const moment = require('moment');
const client = new Discord.Client();
const client2 = new Discord.Client();
const hero = client;
const bot = client;
const pretty = require("pretty-ms");
const ms = require('ms');
const db = require('quick.db')
const prefix = '!'
const Canvas = require("canvas");
const emojis = '566320808121729088'
const devs = ["463050575081242624"]; //test
const embedColor = "#4a4a47";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";
const sID = "585019342299594767";
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://mainlo.glitch.me/`);
}, 280000);

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
   client.user.setActivity("!help | TicketSystem",{type: 'Playing'})
})

client.on('message', message => {
var author = message.author.username
var avatar = message.author.avatarURL
var hlp1 =(`**TicketCutterBot**
Prefix :** !**
Website : **http://www.ticketcutterbot.xyz/**
Support : **https://discord.gg/XRjQcKD**
Developed By : **ALbert#0001**`)
if(message.content == prefix + 'help'){
message.react('💬');
message.author.send(hlp1)
const embed = new Discord.RichEmbed()
.setTitle ('Commands Bot :')
.setDescription(`
**!help / !help ar** | To show all info about bot , ar : arabic

**!invite** | To bot give you it link invite , in ur dms 

**!new** (Supject) | To Open Ticket

**!rename** (new name) | To Rename name of Ticket

**!close** | To close ticket

**!add** (user) | To add user for ticket

**!remove** (user) | to remove user was add in ticket

**!setrole** (name role) | To Choose role to see tickets

**!blacklist** (user) | to add user can't make tickets !

Bot is Beta version , Commands will be more in future :)
`)
.setColor(embedColor)
message.author.send(embed)}})

client.on('message', message => {
var author = message.author.username
var avatar = message.author.avatarURL
var hlp1 =(`**بوت قاطع التذاكر**
البادئة : **#**
الموقع : **http://www.ticketcutterbot.xyz/**
الدعم الفني : **https://discord.gg/XRjQcKD**
تم التطوير بوساطة : **ALbert#0001**`)
if(message.content == prefix + 'help ar'){
message.react('💬');
message.author.send(hlp1)
const embed = new Discord.RichEmbed()
.setTitle ('Commands Bot :')
.setDescription(`
**!help / !help ar** | لرؤية جميع معلومات البوت 

**!invite** | لاضافة البوت لسيرفرك

**!new** (الموضوع) | لفتح تذكرة

**!rename** (الأسم الجديد) | لتغيير اسم التذكرة

**!close** | لحذف التذكرة

**!add** (العضو) | لأضافة عضو اخر للتذكرة 

**!remove** (العضو) | لحذف العضو الذي قمت بأضافته لرؤية التذكرة

**!setrole** (اسم الرتبة) | لتحديد رتبة مسؤولي التذاكر , يجب عليك التحديد للعمل !

**!blacklist** (العضو) |لاضافة شخص الى القائمة السوداء من التذاكر , بحيث لايتمكن من عمل تذكرة 

البوت الان بالنسخة التجريبية , ستزاد الأوامر اكثر بالمستقبل :)
`)
.setColor(embedColor)
message.author.send(embed)}})

const setc = require("./setc.json")
const setrole = require("./setrole.json")
const ticketnumber = require("./setrole.json")
let tchannels  = [];
let current    = 0;
client.on('ready', () =>{
console.log('im ready')
 });
 
client.on("message", async message => {
   
   
  if (!message.content.startsWith(prefix) || message.author.bot) return;
   
    if(message.content.toLowerCase().startsWith(prefix + `setcategory`)){
   
    if(!setc[message.guild.id]) setc[message.guild.id] = {
    category: "Tickets"
}
 
        const category = setc[message.guild.id].category
        let newcategory = message.content.split(' ').slice(1).join(' ');
        let thiscategory = message.guild.categories.find('name', newcategory);
                let fltrc = message.guild.channels.filter(m => m.name === newcategory).type !== 'category';
 if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: ""
}
    const role = setrole[message.guild.id].role
    const srole = setrole[message.guild.id].role
    let thisrole = message.member.roles.find("name", srole);
     const d11x1xx = new Discord.RichEmbed()
     .setDescription(`:x: You do not have permission for that command! If you believe this is a mistake please add the role called \`\`${srole}\`\` to yourself.`)  
     .setColor(embedFail);
    if(!thisrole) return message.channel.send(d11x1xx);
     const NOTX1 = new Discord.RichEmbed()
     .setDescription(`:x: Usage: \`\`${prefix}setcategory <name>\`\``)  
     .setColor(embedFail);
    if(!newcategory) return message.channel.send(NOTX1);
          const CANT = new Discord.RichEmbed()
     .setDescription(`:x: I can't find this category \`\`${newcategory}\`\``)  
    .setColor(embedFail);
        if(!thiscategory) return message.channel.send(CANT);
    const filtr = new Discord.RichEmbed()
    .setDescription(`:x: This not a category \`\`${newcategory}\`\``)  
    .setColor(embedFail);
        if(fltrc) return message.channel.send(filtr);
      setc[message.guild.id].category = newcategory
          const D1 = new Discord.RichEmbed()
    .setDescription(`:white_check_mark: The tickets category has been set to \`\`${newcategory}\`\``)  
    .setColor(embedSuccess);
    message.channel.send(D1);
       
    }
});
 
 
 
client.on("message", async message => {
         
 if (!message.content.startsWith(prefix) || message.author.bot) return;
   
    if(message.content.toLowerCase().startsWith(prefix + `setrole`)){
   
    if(!setrole[message.guild.id]) setrole[message.guild.id] = {
   role: "Support Teame"
}
 
        const role = setrole[message.guild.id].role
        let newrole = message.content.split(' ').slice(1).join(' ');
        let thisrole = message.guild.roles.find('name', newrole);
        let permission = message.guild.member(message.author).hasPermissions('ADMINISTRATOR');
         const d11x1x42x = (`:x: You do not have permission for that command! If you believe this is a mistake please add a high role has \`\`ADMINISTRATOR\`\` permission to yourself.`)
    
    if(!permission) return message.channel.send(d11x1x42x);
    const NOTX1 = (`:rolling_eyes: **Usage : #setrole name **`)
    if(!newrole) return message.channel.send(NOTX1) ;
    
          const CANT = (`:thinking: **I can't find this role** ${newrole}`)
        if(!thisrole) return message.channel.send(CANT) ;
      setrole[message.guild.id].role = newrole 
          const D1 = (`:white_check_mark: The tickets role has been set to \`\`${newrole}\`\``)
    message.channel.send(D1);
       
    }
}); 
 
client.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
if(message.content.toLowerCase().startsWith(prefix + `new`)) {
var black = message.member.roles.find(r=>r.name == 'Blacklist Tickets');
 if(black) return message.channel.send(`:pleading_face: **You have blacklist from tickets**`)
if(!black) 
  if(!setc[message.guild.id]) setc[message.guild.id] = {
    category: "Tickets"
}
 
    const category = setc[message.guild.id].category
    const scategory = setc[message.guild.id].category
const footer = message.author.username 
const footer2 = message.author.avatarURL
const rerole = (`:rolling_eyes: **Admins didn't choose the role of tickets**`)
   let thiscategory = message.guild.channels.find('name', scategory);
 if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "Support Teame"
}
    const role = setrole[message.guild.id].role
    const srole = setrole[message.guild.id].role
   let thisrole = message.guild.roles.find('name', srole);
   let subject = message.content.split(' ').slice(1).join(' ');
  var numbers = [1, 2, 3, 4];
   let ticketnumber = message.author.username
   current++;
    if(!subject[0]){
           
                        
      
              const already = (":x: You can only have \`\`1\`\` ticket in this server! you already have \`\`1\`\`")
         message.guild.createChannel(`ticket-${current}`, "text") .then(ticketx => {
        ticketx.setParent(thiscategory);
            let role = message.guild.roles.find("name", srole);
            let role2 = message.guild.roles.find("name", "@everyone");
            ticketx.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });  
            ticketx.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            ticketx.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
 
            });
   
   
        const d1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: Your ticket has been created <#${ticketx.id}>`)  
     .setColor(embedSuccess)
            message.channel.send(d1);
            const nonedear = new Discord.RichEmbed()
     .setDescription(`Welcome ${message.author}, Pls Wait Staff to come to help you ^_^`)
     .addField('Subject' , `No subject has been given`)
     .setColor(embedColor)
     .setFooter(`${client.user.username}` , client.user.avatarURL)
     .setTimestamp();
            ticketx.send({embed: nonedear });
        }).catch(console.error);
 
    }
   
 
 
 if(subject[0]){
           
      
        if (!thisrole) return message.channel.send(rerole);
              const already = new Discord.RichEmbed()
     .setDescription(":x: You can only have \`\`1\`\` ticket in this server! you already have \`\`1\`\`")  
     .setColor("22BF41");
        message.guild.createChannel(`ticket-${current}`, "text").then(ticketx => {
           ticketx.setParent(thiscategory);
            let role = message.guild.roles.find("name", srole);
            let role2 = message.guild.roles.find("name", "@everyone");
            ticketx.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });  
            ticketx.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            ticketx.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
 
            });
       
        const d1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: Your ticket has been created <#${ticketx.id}>`)  
     .setColor(embedSuccess)
            message.channel.send(d1);
            const nonedear = new Discord.RichEmbed()
     .setDescription(`Hi ${message.author}, Pls wait support team to come to help you ^_^`)
     .addField('Subject' , subject)
     .setColor(embedColor)
     .setFooter(` Requested by ${footer}`, `${footer2}`)
     .setTimestamp();
            ticketx.send({embed: nonedear });
        }).catch(console.error);
 

      }  
}
})

client.on("message", async message => {

if(message.content.toLowerCase().startsWith(prefix + `close`)) {   
 
     const d11x1xx = new Discord.RichEmbed()
     .setDescription(":x: You do not have permission for that command! If you believe this is a mistake please add the role called \`\`? Elite » Team\`\` to yourself.")  
     .setColor(embedFail);
   
         const d11x1xxNOT = (`:relieved: **This is not ticket.**`)
    if (!message.channel.name.startsWith("ticket-")) return message.channel.send(d11x1xxNOT);
 message.channel.delete()   

}})
client.on("message", async message => {
  if (message.content.toLowerCase().startsWith(prefix + `add`)) {
   
 
    let noperm = (`:smile: **You don't have permissions to use this command**`)
    var perm = message.guild.member(message.author).hasPermissions('MANAGE_ROLES');
    if(!perm) return message.channel.send(noperm)
    const embed4 = (`:relieved: **This is not ticket to add user**`)
    if (!message.channel.name.startsWith(`ticket-`)){ return message.channel.send(embed4);

   }
   const nothere = (`:grin: **Please Mention User** `)
   let addedmember = message.mentions.members.first();
   if (!addedmember) return message.channel.send(nothere)
 
   message.channel.overwritePermissions(addedmember, { SEND_MESSAGES : true, VIEW_CHANNEL : true});
   const embed5 = (`${addedmember} ** has been added to the ticket.**`)   
   message.channel.send( embed5 );
 
 }

 if (message.content.toLowerCase().startsWith(prefix + `remove`)) {
   
 
   let noperm = (`:rolling_eyes: **You don't have permissions to use this command**`)
   
   var perm = message.guild.member(message.author).hasPermissions('MANAGE_ROLES');
   if(!perm) return message.channel.send(noperm)
   if (!message.channel.name.startsWith(`ticket-`)) {
   const embed6 = (`:relieved: **This is not ticket to remove user**`)
    message.channel.send(embed6);
    return
    }
    const nothere = (`:grin: **Please Mention User**`)
    let removedmember = message.mentions.members.first();
    if (!removedmember) return message.channel.send(nothere)
 
    message.channel.overwritePermissions(removedmember, { SEND_MESSAGES : false, VIEW_CHANNEL : false});
    const embed7 = (`${removedmember} ** has been removed from the ticket.**`)
    message.channel.send(embed7);
  }})
 
client.on("message", async message => {
       if (message.content.toLowerCase().startsWith(prefix + `rename`)) {
       
       let noperm = (":rolling_eyes:**You Don't Have permissions to use this command**");
   
   var perm = message.guild.member(message.author).hasPermissions('MANAGE_ROLES');
   if(!perm) return message.channel.send(noperm)
       var args = message.content.split(' ');
       if(!args[1]) return message.channel.send('**:smile: Usage : !rename `newname`**')
   if (!message.channel.name.startsWith(`ticket-`)) {
   
   const embed8 = (":relieved: **This is not ticket**")
    message.channel.send(embed8);
    return
    }  
      else message.channel.setName(`ticket-${args[1]}`)
        var donere = (`:ballot_box_with_check: **Name of ticked changed to ${args[1]}**`)
      message.channel.send(donere)  
      }                    
 
 

})
client.on('message',  async message => {
if(message.content.startsWith(prefix + 'blacklist')){
 var perm = message.guild.member(message.author).hasPermissions('MANAGE_ROLES');
       let noperm = (`:rolling_eyes: **You don't have permissions to use this command**`)
   if(!perm) return message.channel.send(noperm)
  let addedmember = message.mentions.members.first();
if(!addedmember) return message.channel.send(`:thinking: **I Can't find user**`)
 let role = message.guild.roles.find('name', 'Blacklist Tickets');
if (!role) return message.guild.createRole({name:'Blacklist Tickets',
    color: 'white'})
addedmember.addRole(role);
  message.channel.send(`${addedmember} :partying_face: **Has been added to Blacklist tickets**`)}})

const adminprefix = "1";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
    if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else    
    if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done :>`)
  return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else    
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/mohamedgamal");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
  
 
  }); 
 client.on('ready', () =>{
console.log('im ready')
 });

client.on('message', message => {
if(message.content === prefix + 'invite'){
message.react('🔗')
message.author.send(`**Thanks For Choose me ^^**
**invite Link : ||https://discordapp.com/oauth2/authorize?client_id=704826848395264141&permissions=8&scope=bot||**`)
}})
 client.on('ready', () =>{
console.log('im ready')
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', 'Developer');
if (!rank) return ;
  message.channel.send(args.join("  "))
    message.delete();
  }})})
client.login("");///
