const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

rl.on('line', (line) => {
  lines.push(line)
})

function solve(lines) {
  for (let i = 0; i < lines.length; i++) {
    let arr = []
    arr = lines[i].split(' ')
    const NumA = Number(arr[0])
    const NumB = Number(arr[1])
    const mathNum = Number(arr[2])
    if (arr.length === 3) {
      if (mathNum === 1) {
        if (NumA - NumB > 0) {
          console.log('A')
        } else if (NumA - NumB === 0) {
          console.log('DRAW')
        } else {
          console.log('B')
        }
      }
      if (mathNum === -1) {
        if (NumA - NumB > 0) {
          console.log('B')
        } else if (NumA - NumB === 0) {
          console.log('DRAW')
        } else {
          console.log('A')
        }
      }
    }
  }
}

rl.on('close', () => {
  solve(lines)
})
