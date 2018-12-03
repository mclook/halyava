const TelegramBot=require('node-telegram-bot-api')
const TOKEN='798561841:AAHCxxSkrco-deXJg5K2wuA1hr-o5PxhufI'

const bot=new TelegramBot(TOKEN,{polling:true})
const chatMax='452867599';
bot.onText(/message123/,msg=>{
    bot.sendMessage(msg.chat.id,'/message123@alcopawerbot');
})
bot.on('message',msg=>{
   const {chat:{id}}=msg;

   // const{message:{chat,message_id,text}}=msg;
   bot.sendMessage(chatMax,id);
    var mId=msg.message.message_id;
    bot.sendMessage(chatMax,mId);
    bot.sendMessage(chatMax,'pa');
    //message.message_id
   // const {message:{message_id}}=msg;
    bot.forwardMessage(chatMax,id,msg.message.message_id);



})




