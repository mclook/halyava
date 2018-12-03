const TelegramBot=require('node-telegram-bot-api')
const TOKEN='798561841:AAHCxxSkrco-deXJg5K2wuA1hr-o5PxhufI'

const bot=new TelegramBot(TOKEN,{polling:true})
const chatMax='452867599';
bot.onText(/message123/,msg=>{
    bot.sendMessage(msg.chat.id,'/message123@alcopawerbot');
})
bot.on('message',(msg)=>{
   const {chat:{id}}=msg;
   // const {message_id}=msg.message
   // const{message:{chat,message_id,text}}=msg;
   //bot.sendMessage(chatMax,id);

   // bot.sendMessage(chatMax,msg.from.first_name);
   // bot.sendMessage(chatMax,'pa');
    //message.message_id
   // const {message:{message_id}}=msg;
    bot.forwardMessage('452867599',msg.chat.id,msg.message_id);



})




