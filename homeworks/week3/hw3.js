const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

rl.on('line', (line) => {
  lines.push(line)
})

function solve(lines) {
  for (let i = 1; i <= lines[0]; i++) {
    const num = []
    for (let j = 0; j < lines[i]; j++) {
      if (lines[i] % j === 0) {
        if (j !== 0 && j !== 1 && j !== lines[i]) {
          num.push(i)
        }
      }
    }
    if (lines[i] === '1' || lines[i] === '-1') {
      console.log('Composite')
      continue
    }
    if (num.length === 0) {
      console.log('Prime')
    } else {
      console.log('Composite')
    }
  }
}

rl.on('close', () => {
  solve(lines)
})
