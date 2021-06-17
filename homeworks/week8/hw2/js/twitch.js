// 請串接 Twitch API，顯示出目前最熱門的 5 個遊戲 (OK)
// 點下去之後可以顯示正在直播這遊戲的前 20 個實況（要剛好 20 個）
// 可以切換不同的遊戲，顯示不同遊戲的熱門實況。
// 先找出最熱門的 5 個遊戲去串接
// 請參考 Twitch API v5 的文件，寫一隻程式去呼叫 Twitch API，並拿到「最受歡迎的遊戲列表（Get Top Games）」，並依序印出目前觀看人數跟遊戲名稱。

// 熱門的 5 個遊戲類別
const request = new XMLHttpRequest()
request.onload = () => {
  if (request.status >= 200 && request.status < 400) {
    const json = JSON.parse(request.responseText)
    for (let i = 0; i < 5; i++) {
      const $menu = document.getElementById('menu')
      const li = document.createElement('li')
      li.innerHTML = `<a href="">${json.top[i].game.name}</a>`
      $menu.appendChild(li)
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
