const { EmbedBuilder } = require('discord.js')const fs = require('fs');
const path = require('path');
const db = require("../mongodb");
// Function to load the prefix from the JSON file
function loadPrefix() {
    const filePath = path.join(__dirname, '..', 'data', 'prefix.json');
    try {
        const data = fs.readFileSync(filePath);
        return JSON.parse(data).prefix;
    } catch (error) {
        console.error('Error loading prefix:', error);
        return '!';
    }
}

// Function to save the prefix to the JSON file
function savePrefix(newPrefix) {
    const filePath = path.join(__dirname, '..', 'data', 'prefix.json');
    const data = {
        prefix: newPrefix
    };
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
        console.log('Prefix saved:', newPrefix);
    } catch (error) {
        console.error('lỗi lệnh:', error);
    }
}

module.exports = {
    name: 'thaydoiprefix',
    description: 'Change the prefix for the bot',
    execute(message, args) {
        if (!message.member.permissions.has('ADMINISTRATOR')) {
            return message.reply("❌ Bạn không có quyền sử dụng lệnh này.");
        }

        const newPrefix = args[0];
        if (!newPrefix) {
            return message.reply('Vui lòng cung lệnh muốn đổi ❌');
        }

        savePrefix(newPrefix);

        const embed = new EmbedBuilder()
            .setColor('#00FF00')
            .setTitle('lệnh đã thay đổi thành công ✅')
            .setDescription(`▶️ The prefix has been changed to: ${newPrefix}`)
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};


/*

   MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   FOR EMOJIS EITHER YOU CAN EDIT OR JOIN OUR DISCORD SERVER 
   SO WE ADD BOT TO OUR SERVER SO YOU GET ANIMATED EMOJIS.

   DISCORD SERVER : https://discord.gg/FUEHs7RCqz
   YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A

   FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/c4kaW2sSbm ]
*/
