import fs from 'fs'
let handler  = async (m, { conn, text }) => {
   m.reply('Tunggu Sebentar, Proses Getting File database.json')
   let db = fs.readFileSync('./database.json')
   conn.sendFile(m.chat, db, 'database.json', null, m)
}
handler.help = ['getdb','getdatabase'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(db|getdb)$/i
handler.owner = true

export default handler
