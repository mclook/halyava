const TelegramBot=require('node-telegram-bot-api')
const TOKEN='798561841:AAHCxxSkrco-deXJg5K2wuA1hr-o5PxhufI'

const bot=new TelegramBot(TOKEN,{polling:true})

bot.onText(/message123/,msg=>{
    bot.sendMessage(msg.chat.id,'/message123')
})
require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
})

