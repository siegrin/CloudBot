const cooldown = 300000
let handler = async (m, { usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastadventure))
    if (user.health < 80) return m.reply(`
𝐌𝐞𝐦𝐞𝐫𝐥𝐮𝐤𝐚𝐧 𝐡𝐞𝐚𝐥𝐭𝐡❤️ 𝐝𝐢𝐚𝐭𝐚𝐬 𝟖𝟎
𝐒𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐛𝐞𝐥𝐢 𝐩𝐨𝐭𝐢𝐨𝐧 𝐮𝐧𝐭𝐮𝐤 𝐦𝐞𝐫𝐞𝐠𝐞𝐧𝐞𝐫𝐚𝐬𝐢 𝐡𝐞𝐚𝐥𝐭𝐡💓 𝐜𝐨𝐧𝐭𝐨𝐡: *${usedPrefix}buy potion 2*,
𝐝𝐚𝐧 𝐤𝐞𝐭𝐢𝐤 *${usedPrefix}heal 2* 𝐮𝐧𝐭𝐮𝐤 𝐦𝐞𝐧𝐠𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐩𝐨𝐭𝐢𝐨𝐧
`.trim())
    if (new Date - user.lastadventure <= cooldown) return m.reply(`
𝐊𝐚𝐦𝐮 𝐛𝐚𝐫𝐮 𝐬𝐚𝐣𝐚 𝐛𝐞𝐫𝐩𝐞𝐭𝐮𝐚𝐥𝐚𝐧𝐠, 𝐦𝐨𝐡𝐨𝐧 𝐭𝐮𝐧𝐠𝐠𝐮 *🕐${timers.toTimeString()}*
`.trim())
    const rewards = reward(user)
    let text = '╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙\n│ 𝐊𝐚𝐦𝐮 𝐬𝐮𝐝𝐚𝐡 𝐁𝐞𝐫𝐩𝐞𝐫𝐭𝐮𝐚𝐥𝐚𝐧𝐠 𝐝𝐚𝐧 𝐤𝐞𝐡𝐢𝐥𝐚𝐧𝐠𝐚𝐧'
    for (const lost in rewards.lost) if (user[lost]) {
        const total = rewards.lost[lost].getRandom()
        user[lost] -= total * 1
        if (total) text += `\n│ ${global.rpg.emoticon(lost)}: ${total}\n╰┬────────────┈ ⳹`
    }
    text += '\n┌┤◦➛ 𝐊𝐚𝐦𝐮 𝐦𝐞𝐧𝐝𝐚𝐩𝐚𝐭𝐤𝐚𝐧'
    for (const rewardItem in rewards.reward) if (rewardItem in user) {
        const total = rewards.reward[rewardItem].getRandom()
        user[rewardItem] += total * 1
        if (total) text += `\n││◦➛ ${global.rpg.emoticon(rewardItem)}: ${total}`                  
    }
    text += `\n│╰────────────┈ ⳹\n│ 𝐂𝐥𝐨𝐮𝐝𝐁𝐨𝐭-𝐌𝐃 \n╰━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`
    const poid = 'https://i.ibb.co/64mn29X/images-3.jpg'
    conn.sendHydrated(m.chat, '🄰🄳🅅🄴🄽🅃🅄🅁🄴', text.trim(), poid, 'https://github.com/itsmedell', '𝐆𝐢𝐭𝐡𝐮𝐛', null, null, [
      ['𝐃𝐨𝐧𝐚𝐭𝐞', '/donasi'],
      ['𝐈𝐧𝐯𝐞𝐧𝐭𝐨𝐫𝐲', '/inv'],
      ['𝐂𝐫𝐞𝐚𝐭𝐨𝐫', '/owner']
    ], m)
    user.lastadventure = new Date * 1
}
handler.help = ['adventure', 'petualang', 'berpetualang', 'mulung']
handler.tags = ['rpg']
handler.command = /^(adventure|(ber)?petualang(ang)?|mulung)$/i

handler.cooldown = cooldown
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            money: 2001,
            exp: 509,
            trash: 101,
            potion: 2,
            rock: 2,
            wood: 2,
            string: 2,
            common: 2 * (user.dog && (user.dog > 2 ? 2 : user.dog) * 1.2 || 1),
            uncommon: [0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.dog > 2 && user.dog < 6 && user.dog) || (user.dog > 5 && 5) || 2
                )).fill(0)
            ),
            mythic: [0, 0, 0, 0, 0, 1, 0, 0, 0].concat(
                new Array(8 - (
                    (user.dog > 5 && user.dog < 8 && user.dog) || (user.dog > 7 && 8) || 3
                )).fill(0)
            ),
            legendary: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0].concat(
                new Array(10 - (
                    (user.dog > 8 && user.dog) || 4
                )).fill(0)
            ),
            iron: [0, 0, 0, 1, 0, 0],
            gold: [0, 0, 0, 0, 0, 1, 0],
            diamond: [0, 0, 0, 0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.fox < 6 && user.fox) || (user.fox > 5 && 5) || 0
                )).fill(0)
            ),
        },
        lost: {
            health: 101 - user.cat * 4,
            armordurability: (15 - user.armor) * 7
        }
    }
    return rewards
}
