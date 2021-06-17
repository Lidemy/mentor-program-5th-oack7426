// 請串接 Twitch API，顯示出目前最熱門的 5 個遊戲 (OK)
// 先把 5個遊戲 的ajax都寫好直接顯示在版面上，不要思考點擊後在呼叫的問題
// 點下去之後可以顯示正在直播這遊戲的前 20 個實況（要剛好 20 個）
// 可以切換不同的遊戲，顯示不同遊戲的熱門實況。

// 熱門的 5 個遊戲名稱
const fiveTopGames = []

// 熱門的 5 個遊戲名稱 header
const request = new XMLHttpRequest()
request.onload = () => {
  if (request.status >= 200 && request.status < 400) {
    const json = JSON.parse(request.responseText)
    for (let i = 0; i < 5; i++) {
      const $menu = document.getElementById('menu')
      const li = document.createElement('li')
      li.innerHTML = `<a href="">${json.top[i].game.name}</a>`
      $menu.appendChild(li)
      fiveTopGames.push(json.top[i].game.name)
    }
  } else {
    alert('系統出錯，請重新整理')
  }
}
request.onerror = () => {
  alert('系統出錯，請重新整理')
}
request.open('GET', 'https://api.twitch.tv/kraken/games/top?limit=5', false)
request.setRequestHeader('client-id', 'h03ykqwbe67bo8bvvl6wegc3ampete')
request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
request.send()

// 第一個熱門遊戲
const GameFirst = new XMLHttpRequest()
GameFirst.onload = () => {
  if (GameFirst.status >= 200 && GameFirst.status < 400) {
    const json = JSON.parse(GameFirst.responseText)
    console.log(json)
  } else {
    alert('系統出錯，請重新整理')
  }
}
GameFirst.onerror = () => {
  alert('系統出錯，請重新整理')
}
GameFirst.open('GET', `https://api.twitch.tv/kraken/streams/?game=${fiveTopGames[0]}&limit=20`, true)
GameFirst.setRequestHeader('client-id', 'h03ykqwbe67bo8bvvl6wegc3ampete')
GameFirst.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
GameFirst.send()
