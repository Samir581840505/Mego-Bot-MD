import fetch from 'node-fetch'

var handler = async (m, { text,  usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🎌 *أدخل الطلب*\n\nمثال, .بارد هل تعرف محمد صلاح`, m, fake, )

try {

conn.sendPresenceUpdate('composing', m.chat)
var apii = await fetch(`https://aemt.me/bard?text=${text}`)
var res = await apii.json()
await m.reply(res.result)

} catch (error) {
console.error(error)
return conn.reply(m.chat, `*🚩 خطأ*`, m, fake, )
}

}
handler.command = ['بارد']
handler.help = ['بارد']
handler.tags = ['ai']

export default handler