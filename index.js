const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
    console.log('📲 Scan this QR in WhatsApp > Linked Devices');
});

client.on('ready', () => {
    console.log('✅ Bot is ready, John 😏');
});

client.on('message', async message => {
    if (message.body === '!hello') {
        message.reply('Hey John 😎 I’m your WhatsApp bot!');
    }
});
