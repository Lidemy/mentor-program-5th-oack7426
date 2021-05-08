const request = require('request')

const name = process.argv[2]

function search() {
  request({
    url: `https://restcountries.eu/rest/v2/name/${name}`,
    method: 'GET'
  }, (error, response, body) => {
    const json = JSON.parse(body)
    if (json.status === 404) {
      return console.error('找不到國家資訊')
    }
    for (let i = 0; i < json.length; i++) {
      console.log(`
        ============
        國家：${json[i].name}
        首都：${json[i].capital}
        貨幣：${json[i].currencies[0].code}
        國碼：${json[i].callingCodes}`)
    }
  })
}
search()
