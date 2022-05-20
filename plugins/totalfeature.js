let handler = async (m, { conn }) => {
let totalfeatures = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.fakeReply(m.chat, `*total features: ${totalfeatures}*`, '0@s.whatsapp.net', '🅵🅴🅰🆃🆄🆁🅴')
}

handler.help = ['totalfeature']
handler.tags = ['info']
handler.command = ['totalfeature']

export default handler
