const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

rl.on('line', (line) => {
  lines.push(line)
})

function solve(lines) {
  const inputArry = lines[0].split(' ')
  for (let i = parseInt(inputArry[0]); i <= parseInt(inputArry[1]); i++) {
    const numArr = String(i).split('')
    let total = 0
    for (let j = 0; j < numArr.length; j++) {
      const toNum = parseInt(numArr[j])
      total += Math.pow(toNum, numArr.length)
    }
    if (i === total) {
      console.log(i)
    }
  }
}

rl.on('close', () => {
  solve(lines)
})
