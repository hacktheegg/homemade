const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.2.0'].messages.create({
  "channel_id": `929908069385785376`,
  "content": `hello there <@${context.params.event.user.id}>`,
  "tts": false,
});