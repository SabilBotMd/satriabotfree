//═══════[© 2022 nexusNw Inc.]════════\\

//
//
//                      Kanna Botz Md
//
//                     Kanna Botz Md
//

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapis.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapis.xyz': 'B6084A1B49', //Change This API KEY 
}

//═══════[modification]════════\\
global.owner = ['6283866366437'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['6283866366437'] //another owner number
global.premium = ['6283866366437'] //premium number
global.pengguna = 'Kanna Chan' //username
global.botnma = 'Sagiri-Botz' //bot name
global.ownernma = 'Kanna Chan' //owner name
global.packname = 'Sagiri Botz' //sticker package name
global.author = 'By Kanna Botz' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '⭔' //design
global.mess = {
    success: 'Berhasil ✓',
    admin: 'Perintah Hanya Di Gunakan Untuk Admin',
    botAdmin: 'Jadikan Bot Admin Dulu',
    owner: 'Elu Bukan Owner Gua Gblok',
    group: 'Gunakan Perintah Ini Di Grup!',
    private: 'Gunakan Perintah Ini Di Chat Pribadi Ler',
    bot: 'This feature in only for the bot number',
    wait: 'process...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 28684 //free user limit
}
global.thumb = fs.readFileSync('./Media/astapic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
