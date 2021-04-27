const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

rl.on('line', (line) => {
  lines.push(line)
})

function solve(lines) {
  for (let i = 1; i < lines.length; i++) {
    let arr = []
    arr = lines[i].split(' ')
    if (Number(arr[2]) === 1) {
      if (arr[0][0] === '-' && arr[1][0] !== '-') {
        console.log('B')
        continue
      }
      if (arr[0][0] !== '-' && arr[1][0] === '-') {
        console.log('A')
        continue
      }
      if (arr[0].length === arr[1].length) {
        if (arr[0] === arr[1]) {
          console.log('DRAW')
          continue
        }
        for (let j = 0; j < arr[0].length; j++) {
          if (arr[0][j] > arr[1][j]) {
            console.log('A')
            break
          }
          if (arr[0][j] < arr[1][j]) {
            console.log('B')
            break
          }
        }
      } else if (arr[0].length > arr[1].length) {
        console.log('A')
        continue
      } else {
        console.log('B')
        continue
      }
    }
    if (Number(arr[2]) === -1) {
      if (arr[0][0] === '-' && arr[1][0] !== '-') {
        console.log('A')
        continue
      }
      if (arr[0][0] !== '-' && arr[1][0] === '-') {
        console.log('B')
        continue
      }
      if (arr[0].length === arr[1].length) {
        if (arr[0] === arr[1]) {
          console.log('DRAW')
          continue
        }
        for (let k = 0; k < arr[0].length; k++) {
          if (arr[0][k] > arr[1][k]) {
            console.log('B')
            break
          }
          if (arr[0][k] < arr[1][k]) {
            console.log('A')
            break
          }
        }
      } else if (arr[0].length > arr[1].length) {
        console.log('B')
        continue
      } else {
        console.log('A')
        continue
      }
    }
  }
}

rl.on('close', () => {
  solve(lines)
})
