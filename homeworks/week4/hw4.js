const request = require('request')

function TopGames() {
  request({
    url: 'https://api.twitch.tv/kraken/games/top',
    method: 'GET',
    headers: {
      'Client-ID': 'h03ykqwbe67bo8bvvl6wegc3ampete',
      'Accept': 'application/vnd.twitchtv.v5+json'   // eslint-disable-line
    }
  }, (error, response, body) => {
    const json = JSON.parse(body)
    const jsonTop = json.top
    if (error) {
      return console.log('失敗', error)
    }
    for (let i = 0; i < jsonTop.length; i++) {
      console.log(`${jsonTop[i].viewers} ${jsonTop[i].game.name}`)
    }
  })
}
TopGames()
