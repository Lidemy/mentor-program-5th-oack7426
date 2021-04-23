const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

rl.on('line', (line) => {
  lines.push(line)
})

function solve(lines) {
  const strReArr = []
  for (let i = lines[0].length; i >= 0; i--) {
    strReArr.push(lines[0][i])
  }
  const strRe = strReArr.join('')
  if (lines[0] === strRe) {
    console.log('True')
    return
  }
  console.log('False')
}

rl.on('close', () => {
  solve(lines)
})
