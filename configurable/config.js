//===================[ OWNER ]=====================\\
global.owner = [
  "628895154319", //ganti nomor owner
  "6285174197856" //nomor owner kedua kalo ada
]

//===================[ FUNCTION LAIN NYA ]=====================\\
global.fotonya2 = "https://files.catbox.moe/bnmrr8.jpg"
global.namastore = "lyz"
global.linkfoto = 'https://files.catbox.moe/bnmrr8.jpg'
global.idsaluran = '-'
global.namaowner = 'Lyzvip'
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 20
}

//===================[ MESS ]=====================\\
global.mess = {
    success: '𝙳𝚘𝚗𝚎 𝙺𝚊𝚔 ',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    OnlyOwner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    OnlyGrup: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Wait Tunggu Sebentar*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    acces: '*_Your number bot not register in database_*',
    premium: '_*khusus Premium" Mau Prem? Chat Owne_*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
}


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})