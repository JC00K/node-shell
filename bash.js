const pwd = require('./pwd')
const ls = require('./ls')
process.stdout.write('\nprompt > ')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim()
  switch (cmd) {
    case 'pwd':
      pwd()
      break
    case 'ls':
      ls()
      break
    default:
      process.stdout.write("I'm sorry, I didn't understand that :(")
  }
})
