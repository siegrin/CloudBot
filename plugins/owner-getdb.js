import fs from 'fs'
let handler = async (m, { conn, text }) => {
    m.reply('Tunggu Sebentar, Proses Getting File database.json')
    let databasenya = await fs.readFileSync('./database.json')
    return await conn.sendMessage(m.chat, { document: databasenya, mimetype: 'application/json', fileName: 'database.json' }, { quoted: m })
}
handler.help = ['getdb']
handler.tags = ['host']
handler.command = /^(getdb)$/i

handler.rowner = true

export default handler
