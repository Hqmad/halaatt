const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
var adminprefix = '+'
const developers = ["523167578131136528"]
client.on('message', message => {
    var argresult = message.content.split(`).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult), {type:'PLAYING'});
      message.channel.send(LastCodes   ${argresult})
  } else
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(LastCodes   ${argresult})
  } else
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(LastCodes   ${argresult})
  } else
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/One");
      message.channel.send(LastCodes)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(Changing The Name To ..${argresult} )
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(Changing The Avatar To :${argresult}** `);
}
});
