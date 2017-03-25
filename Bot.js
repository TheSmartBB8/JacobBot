
const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
  console.log('I am ready!');
});


bot.on('message', message => {
  if (message.content === '$Avatar') {
    message.reply(message.author.avatarURL);
  }
});

bot.on('message', message => {
  if (message.content === '$JoinedAt') {
    message.reply(message.author.createdAt);
  }
});

bot.on('message', message => {
if(message.author.bot) return;
let command = message.content.split(" ")[0];

let args = message.content.split(" ").slice(1);

if (command === "add") {
let numArray = args.map(n=> parseInt(n));
let total = numArray.reduce( (p, c) => p+c);

message.channel.sendMessage(total);
}
});

bot.on("guildMemberAdd", (member) => {
  console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
  member.guild.defaultChannel.sendMessage(`"${member.user.username}" has joined this server`);
});



bot.on('message', message => {
  if (message.content === '$Bleach') {
    message.reply("https://yt3.ggpht.com/-jkjn0Hn4StQ/AAAAAAAAAAI/AAAAAAAAAAA/a1psn8qLZoE/s900-c-k-no-mo-rj-c0xffffff/photo.jpg :regional_indicator_h: :regional_indicator_e: :regional_indicator_r: :regional_indicator_e: ")
  }
});

bot.on('message', message => {
if (message.content === 'Info') {
  const embed = new Discord.RichEmbed()
    .setTitle('Info About JacobBot')
    .setAuthor('TheSmart-BB8#1339', 'http://imgur.com/FZndB2K.png')
    /*
     * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
     */
    .setColor(0x00AE86)
    .setDescription('JacobBot is a bot to help me learn JS etc this soon might become public Let me know on discord if you want the bot to have mute etc!')
    .setFooter('There will be more commands as i learn along ;)', 'http://i.imgur.com/wgp1O83.png')
    .setImage('http://i.imgur.com/wgp1O83.png')
    .setThumbnail('http://imgur.com/FZndB2K.png')
    /*
     * Takes a Date object, defaults to current date.
     */
    .setTimestamp()
    .setURL('https://discord.js.org/#/docs/main/indev/class/RichEmbed')
    .addField('If you want to help with the bot contact me on discord!',
      'This bot is coded in JS and will be allways like that unless i have to change the code')
    /*
     * Inline fields may not display as inline if the thumbnail and/or image is too big.
     */
    .addField('Made by TheSmart-BB8', 'Contact me on discord to help!', true)
    /*
     * Blank field, useful to create some space.
     */
    .addField('\u200b', '\u200b', true)
    .addField('Dev info', 'Im looking for devs that know discord.js just contact me on discord and we can talk it out ;) ', true);

    message.channel.sendEmbed(embed);
  }
});

bot.on('message', message => {
  var request = require('request');
  msg = message;
  if (message.content.substring(0,7) == '$Insult' || message.content.substring(0,7) == '$insult') {
    if (message.content.substring(0,2) == '$I') {
        var name = message.content.replace("$Insult ", "");
    }
    if (message.content.substring(0,2) == '$i') {
        var name = message.content.replace("$insult ", "");
    }
    request.get({ url: "https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=" + name},
                    function(error, response, body, message) {
                    if (!error && response.statusCode == 200) {
                        obj = JSON.parse(body);
                        console.log(name);
                        msg.channel.sendMessage(obj.message + " ");
                    }
 });
  }
});

bot.on('message', message => {
	if (message.content == '$servers') {
		msg = message;
		msg.channel.sendMessage(`__**${bot.user.username} is currently on the following servers:**__ \n\n${bot.guilds.map(g => `${g.name} - **${g.memberCount} Members**`).join(`\n`)}`, {split: true});
	}
});


bot.login("MjkxMjczMjI3NDU0MzgyMDgw.C6nFhQ.BPMtv1UYr7nLEstYDuTsNk64rbE");
