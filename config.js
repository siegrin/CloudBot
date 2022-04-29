import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6281224863098'],
  ['0'],
  ['6281224863098', 'Della', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'Created By'
global.author = 'Cloud Bot'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '𝐋𝐞𝐯𝐞𝐥',
      limit: '𝐋𝐢𝐦𝐢𝐭',
      health: '𝐇𝐞𝐚𝐥𝐭𝐡',
      exp: '𝐄𝐗𝐏',
      money: '𝐌𝐨𝐧𝐞𝐲',
      potion: '𝐏𝐨𝐭𝐢𝐨𝐧',
      diamond: '𝐃𝐢𝐚𝐦𝐨𝐧𝐝',
      common: '𝐂𝐨𝐦𝐦𝐨𝐧',
      uncommon: '𝐔𝐧𝐜𝐨𝐦𝐦𝐨𝐧',
      mythic: '𝐌𝐲𝐭𝐡𝐢𝐜',
      legendary: '𝐋𝐞𝐠𝐞𝐧𝐝𝐚𝐫𝐲',
      pet: '𝐏𝐞𝐭',
      trash: '𝐓𝐫𝐚𝐬𝐡',
      armor: '𝐀𝐫𝐦𝐨𝐫',
      sword: '𝐒𝐰𝐨𝐫𝐝',
      wood: '𝐖𝐨𝐨𝐝',
      rock: '𝐑𝐨𝐜𝐤',
      string: '𝐒𝐭𝐫𝐢𝐧𝐠',
      horse: '𝐇𝐨𝐫𝐬𝐞',
      cat: '𝐂𝐚𝐭',
      dog: '𝐃𝐨𝐠',
      fox: '𝐅𝐨𝐱',
      petFood: '𝐏𝐞𝐭 𝐅𝐨𝐨𝐝',
      iron: '𝐈𝐫𝐨𝐧',
      gold: '𝐆𝐨𝐥𝐝',
      emerald: '𝐄𝐦𝐞𝐫𝐚𝐥𝐝'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
