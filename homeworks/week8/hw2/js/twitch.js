// id
const idList = ['firstGames', 'secondGames', 'thirdGames', 'fourthGames', 'fifthGames']
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
      li.innerHTML = `<a href="javascript:;" data-id="${idList[i]}" class="menu-btn">${json.top[i].game.name}</a>`
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

// menu 綁 click 事件
const $menuBtn = document.querySelectorAll('.menu-btn')
for (let i = 0; i < $menuBtn.length; i++) {
  $menuBtn[i].addEventListener('click', (e) => {
    e.preventDefault()
    for (let j = 0; j < idList.length; j++) {
      document.getElementById(idList[j]).style.display = 'none'
    }
    document.getElementById($menuBtn[i].dataset.id).style.display = 'block'
  })
}

// 熱門遊戲 20 個直播
function ajax(id, gameName) {
  const Games = new XMLHttpRequest()
  Games.onload = () => {
    if (Games.status >= 200 && Games.status < 400) {
      const json = JSON.parse(Games.responseText)
      const $gamesId = document.getElementById(id)
      const title = document.createElement('h2')
      title.innerHTML = `<b>${gameName}</b> Top 20 popular live streams sorted by current viewers`
      $gamesId.prepend(title)
      for (let i = 0; i < json.streams.length; i++) {
        const $GamesBox = $gamesId.querySelector('.list-wrap')
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
        $GamesBox.appendChild(a)
      }
    } else {
      alert('系統出錯，請重新整理')
    }
    Games.onerror = () => {
      alert('系統出錯，請重新整理')
    }
  }
  Games.open('GET', `https://api.twitch.tv/kraken/streams/?game=${gameName}&limit=20`, false)
  Games.setRequestHeader('client-id', 'h03ykqwbe67bo8bvvl6wegc3ampete')
  Games.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
  Games.send()
}
for (let i = 0; i < 5; i++) {
  ajax(idList[i], fiveTopGames[i])
}
