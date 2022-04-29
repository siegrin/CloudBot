const rewards = {
    common: {
        money: 101,
        exp: 201,
        trash: 11,
        potion: [0, 1, 0, 1, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    uncommon: {
        money: 201,
        exp: 401,
        trash: 31,
        potion: [0, 1, 0, 0, 0, 0, 0],
        diamond: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 0, 0, 0, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        mythic: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        wood: [0, 1, 0, 0, 0, 0],
        rock: [0, 1, 0, 0, 0, 0],
        string: [0, 1, 0, 0, 0, 0]
    },
    mythic: {
        money: 301,
        exp: 551,
        trash: 61,
        potion: [0, 1, 0, 0, 0, 0],
        emerald: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        diamond: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        gold: [0, 1, 0, 0, 0, 0, 0, 0, 0],
        iron: [0, 1, 0, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 0, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0, 0, 0],
        mythic: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        legendary: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        pet: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        wood: [0, 1, 0, 0, 0],
        rock: [0, 1, 0, 0, 0],
        string: [0, 1, 0, 0, 0]
    },
    legendary: {
        money: 401,
        exp: 601,
        trash: 101,
        potion: [0, 1, 0, 0, 0],
        emerald: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        diamond: [0, 1, 0, 0, 0, 0, 0, 0, 0],
        gold: [0, 1, 0, 0, 0, 0, 0, 0],
        iron: [0, 1, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0],
        mythic: [0, 1, 0, 0, 0, 0, 0, 0, 0],
        legendary: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        pet: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        wood: [0, 1, 0, 0],
        rock: [0, 1, 0, 0],
        string: [0, 1, 0, 0]
    },
    // pet: {
    //     petFood: [0, 1, 0, 0, 0],
    //     anjing: [],
    // }
}
let handler = async (m, { command, args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let listCrate = Object.fromEntries(Object.entries(rewards).filter(([v]) => v && v in user))
    let info = `
𝐔𝐬𝐞 𝐅𝐨𝐫𝐦𝐚𝐭 *${usedPrefix}${command} [crate] [count]*
𝐂𝐨𝐧𝐭𝐨𝐡 : *${usedPrefix}${command} common 10*

📍Crate list: 
${Object.keys(listCrate).map((v) => `
${rpg.emoticon(v)}
`.trim()).join('\n')}
`.trim()
    let type = (args[0] || '').toLowerCase()
    let count = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!(type in listCrate)) return m.reply(info)
    if (user[type] < count) return m.reply(`
𝐊𝐚𝐦𝐮 *${rpg.emoticon(type)} 𝐜𝐫𝐚𝐭𝐞* 𝐭𝐢𝐝𝐚𝐤 𝐜𝐮𝐤𝐮𝐩!, 𝐤𝐚𝐦𝐮 𝐡𝐚𝐧𝐲𝐚 𝐩𝐮𝐧𝐲𝐚 ${user[type]} *${rpg.emoticon(type)} 𝐜𝐫𝐚𝐭𝐞*
𝐓𝐢𝐩𝐞 *${usedPrefix}buy ${type} ${count - user[type]}* to buy
`.trim())
    // TODO: add pet crate
    // if (type !== 'pet')
    let crateReward = {}
    for (let i = 0; i < count; i++)
        for (let [reward, value] of Object.entries(listCrate[type]))
            if (reward in user) {
                const total = value.getRandom()
                if (total) {
                    user[reward] += total * 1
                    crateReward[reward] = (crateReward[reward] || 0) + (total * 1)
                }
            }
    user[type] -= count * 1
    m.reply(`
𝐀𝐧𝐝𝐚 𝐭𝐞𝐥𝐚𝐡 𝐦𝐞𝐦𝐛𝐮𝐤𝐚 *${count}* ${global.rpg.emoticon(type)} 𝐜𝐫𝐚𝐭𝐞 𝐝𝐚𝐧 𝐦𝐞𝐧𝐝𝐚𝐩𝐚𝐭𝐤𝐚𝐧:
${Object.keys(crateReward).filter(v => v && crateReward[v] && !/legendary|pet|mythic|diamond|emerald/i.test(v)).map(reward => `
*${global.rpg.emoticon(reward)}:* ${crateReward[reward]}
`.trim()).join('\n')}
`.trim())
    let diamond = crateReward.diamond, mythic = crateReward.mythic, pet = crateReward.pet, legendary = crateReward.legendary, emerald = crateReward.emerald
    if (mythic || diamond) m.reply(`
𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐤𝐚𝐦𝐮 𝐦𝐞𝐧𝐝𝐚𝐩𝐚𝐭𝐤𝐚𝐧 𝐢𝐭𝐞𝐦 𝐥𝐚𝐧𝐠𝐤𝐚, 𝐲𝐚𝐢𝐭𝐮 ${diamond ? `*${diamond}* ${rpg.emoticon('diamond')}` : ''}${diamond && mythic ? 'and ' : ''}${mythic ? `*${mythic}* ${rpg.emoticon('mythic')}` : ''}
`.trim())
    if (pet || legendary || emerald) m.reply(`
𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐤𝐚𝐦𝐮 𝐦𝐞𝐧𝐝𝐚𝐩𝐚𝐭𝐤𝐚𝐧 𝐢𝐭𝐞𝐦 𝐥𝐚𝐧𝐠𝐤𝐚, 𝐲𝐚𝐢𝐭𝐮 ${pet ? `*${pet}* ${rpg.emoticon('pet')}` : ''}${pet && legendary && emerald ? ', ' : (pet && legendary || legendary && emerald || emerald && pet) ? 'and ' : ''}${legendary ? `*${legendary}* ${rpg.emoticon('legendary')}` : ''}${pet && legendary && emerald ? 'and ' : ''}${emerald ? `*${emerald}* ${rpg.emoticon('emerald')}` : ''}
`.trim())
}
handler.help = ['open', 'gacha'].map(v => v + ' [crate] [count]')
handler.tags = ['rpg']
handler.command = /^(open|buka|gacha)$/i

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
