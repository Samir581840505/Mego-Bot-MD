import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['201024480189', '🌩️ ẉa.me//𝐵𝛩𝑺𝑺‖.peị!‽ 👑', true], ['201024480189'], ['201024480189'], ['201024480189'], ['201024480189'], ['201024480189'], ['201024480189'], ['201024480189'], ['201024480189'], ['201024480189'], ['201024480189']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +201024480189
global.confirmCode = ''

global.animxscans = ['201024480189']
global.suittag = ['201024480189']
global.mods = [201024480189]
global.prems = [201024480189]

global.packname = '『 +201024480189 』'
global.author = '『 تــــربــــو بــ☠️ـوت 』'
global.wm = '『تــــربــــؤؤ بــ🐍ـؤؤت 』'
global.vs = 'V2 • 1.0.5':
global.wm2 = '『 تــــربــــو بــ💎ـوت 』'
global.azami = '『تــــربــــؤؤ بــ💀ـؤؤ 』'
global.cb = '『 تــــربــــو بــ👾ـوت 』'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.KMA = '╰━━━〔 *🛡️ 1.7.9* 〕━━━━━⬣'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© TURBO_BOT'
global.devnum = '+201024480189'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
