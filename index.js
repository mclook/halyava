const TelegramBot=require('node-telegram-bot-api')
const TOKEN='798561841:AAHCxxSkrco-deXJg5K2wuA1hr-o5PxhufI'

const bot=new TelegramBot(TOKEN,{polling:true})
const chatMax='452867599';
bot.onText(/message123/,msg=>{
    bot.sendMessage(msg.chat.id,'/message123@alcopawerbot')
})
bot.on('message',function(msg){
    bot.sendMessage(msg.chat.id,'/message123@alcopawerbot')
    bot.forwardMessage(chatMax,chat.id,message_Id)



})




