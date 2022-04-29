let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata, text, usedPrefix, command }) {
    let ps = groupMetadata.participants.map(v => v.id)
    if (!text) throw `Use example ${usedPrefix}${command} mukanya kayak babi`
    let a = ps.getRandom()
    m.reply(`𝐏𝐞𝐫𝐭𝐚𝐧𝐲𝐚𝐚𝐧: ${command} ${text}\n 𝐉𝐚𝐰𝐚𝐛𝐚𝐧: ${toM(a)}`, null, {
        mentions: [a]
    })
}
handler.help = ['siapa']
handler.tags = ['main', 'fun']
handler.customPrefix = /(\?$)/
handler.command = ['siapa']

handler.group = true

export default handler
