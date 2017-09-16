require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN;
const bot = new TelegramBot(token, {polling: true});
const fs = require('fs');

// bot.on('text', (message) => {
//   bot.sendMessage(message.chat.id, "Hello world");
// });

bot.onText(/\/drip/, (msg, match) => {
  // 'msg' is the received Message from Telegram 
  // 'match' is the result of executing the regexp above on the text content 
  // of the message 
 
  const chatId = msg.chat.id;
  const resp = 'that chocolate sauce :-)'; 
 
  const stream = fs.createReadStream('./sauce.ogg');

  bot.sendAudio(chatId, stream);

  // send back the matched "whatever" to the chat 
  // bot.sendMessage(chatId, resp);
});