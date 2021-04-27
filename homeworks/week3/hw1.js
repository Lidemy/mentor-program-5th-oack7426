const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

rl.on('line', (line) => {
  lines.push(line)
})

function solve(lines) {
  let star = ''
  for (let i = 0; i < lines[0]; i++) {
    star += '*'
    console.log(star)
  }
}

rl.on('close', () => {
  solve(lines)
})
