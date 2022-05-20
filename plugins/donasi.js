let handler =  m => m.reply(`
╭─「 Donasi 」
│ • ${global.donasi}
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
