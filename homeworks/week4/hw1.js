const request = require('request')

function getAPI(error, response, body) {
  const json = JSON.parse(body)
  for (let i = 0; i < 10; i++) {
    console.log(json[i].id + json[i].name)
  }
}

request('https://lidemy-book-store.herokuapp.com/books', getAPI)
