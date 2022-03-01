const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let result = await lib.discord.channels['@0.3.0'].messages.create({
  channel_id: `929908069385785376`,
  content: `bye <@${context.params.event.user.id}>`
});