const request = require('request')

function getAPI(error, response, body) {
  const info = JSON.parse(body)
  for (let i = 0; i < 10; i++) {
    console.log(info[i].name)
  }
}

request('https://lidemy-book-store.herokuapp.com/books', getAPI)
