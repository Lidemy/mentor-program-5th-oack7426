// 請串接 Twitch API，顯示出目前最熱門的 5 個遊戲 (OK)
// 把第一個遊戲塞到版面上，其他的如法泡製
// 先把 5個遊戲 的ajax都寫好直接顯示在版面上，不要思考點擊後在呼叫的問題
// 把 header 綁 data ， data 內容是 id 板塊名 （存在一個陣列裡），綁 click 事件，點擊後對應的 id 板塊會打開
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
  request.onerror = () => {
    alert('系統出錯，請重新整理')
  }
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
    const $firstGames = document.getElementById('firstGames')
    const title = document.createElement('h2')
    title.innerHTML = `<b>${fiveTopGames[0]}</b> Top 20 popular live streams sorted by current viewers`
    $firstGames.prepend(title)
    for (let i = 0; i < json.streams.length; i++) {
      const $firstGamesBox = document.querySelector('#firstGames .list-wrap')
      const a = document.createElement('a')
      a.classList.add('list-box')
      a.href = json.streams[i].channel.url
      a.target = '_blank'
      a.innerHTML = `<img src="${json.streams[i].preview.medium}" alt="${json.streams[i].channel.display_name}">
                    <div class="list-info-box">
                        <img src="${json.streams[i].channel.logo}" alt="${json.streams[i].channel.display_name}">
                        <div class="list-info-inbox">
                            <h3>${json.streams[i].channel.status}</h3>
                            <p>${json.streams[i].channel.display_name}</p>
                        </div>
                    </div>`
      $firstGamesBox.appendChild(a)
    }
  } else {
    alert('系統出錯，請重新整理')
  }
  GameFirst.onerror = () => {
    alert('系統出錯，請重新整理')
  }
}
GameFirst.open('GET', `https://api.twitch.tv/kraken/streams/?game=${fiveTopGames[0]}&limit=20`, false)
GameFirst.setRequestHeader('client-id', 'h03ykqwbe67bo8bvvl6wegc3ampete')
GameFirst.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
GameFirst.send()

// 第二個熱門遊戲
const GameSecond = new XMLHttpRequest()
GameSecond.onload = () => {
  if (GameSecond.status >= 200 && GameSecond.status < 400) {
    const json = JSON.parse(GameSecond.responseText)
    const $secondGames = document.getElementById('secondGames')
    const title = document.createElement('h2')
    title.innerHTML = `<b>${fiveTopGames[1]}</b> Top 20 popular live streams sorted by current viewers`
    $secondGames.prepend(title)
    for (let i = 0; i < json.streams.length; i++) {
      const $secondGamesBox = document.querySelector('#secondGames .list-wrap')
      const a = document.createElement('a')
      a.classList.add('list-box')
      a.href = json.streams[i].channel.url
      a.target = '_blank'
      a.innerHTML = `<img src="${json.streams[i].preview.medium}" alt="${json.streams[i].channel.display_name}">
                    <div class="list-info-box">
                        <img src="${json.streams[i].channel.logo}" alt="${json.streams[i].channel.display_name}">
                        <div class="list-info-inbox">
                            <h3>${json.streams[i].channel.status}</h3>
                            <p>${json.streams[i].channel.display_name}</p>
                        </div>
                    </div>`
      $secondGamesBox.appendChild(a)
    }
  } else {
    alert('系統出錯，請重新整理')
  }
  GameSecond.onerror = () => {
    alert('系統出錯，請重新整理')
  }
}
GameSecond.open('GET', `https://api.twitch.tv/kraken/streams/?game=${fiveTopGames[1]}&limit=20`, false)
GameSecond.setRequestHeader('client-id', 'h03ykqwbe67bo8bvvl6wegc3ampete')
GameSecond.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
GameSecond.send()
