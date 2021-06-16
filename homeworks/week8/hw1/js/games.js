document.getElementById('btn').addEventListener('click', () => {
  const request = new XMLHttpRequest()
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const json = JSON.parse(request.responseText)
      document.getElementById('lottery').style.display = 'none'
      switch (json.prize) {
        case 'FIRST':
          document.getElementById('first-result').style.display = 'block'
          break
        case 'SECOND':
          document.getElementById('second-result').style.display = 'block'
          break
        case 'THIRD':
          document.getElementById('third-result').style.display = 'block'
          break
        case 'NONE':
          document.getElementById('none-result').style.display = 'block'
          break
      }
    } else {
      alert('系統出錯，請重新按“我要抽獎”')
    }
  }
  request.onerror = () => {
    alert('系統出錯，請重新按“我要抽獎”')
  }
  request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true)
  request.send()
})
