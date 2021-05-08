const request = require('request')

const cmdName = process.argv[2]
const param = process.argv[3]
const bookName = process.argv[4]

function list() {
  request({
    url: 'https://lidemy-book-store.herokuapp.com/books?_limit=20',
    method: 'GET'
  }, (error, response, body) => {
    const json = JSON.parse(body)
    for (let i = 0; i < json.length; i++) {
      console.log(json[i].id + json[i].name)
    }
  })
}

function read() {
  request({
    url: `https://lidemy-book-store.herokuapp.com/books/${param}`,
    method: 'GET'
  }, (error, response, body) => {
    const json = JSON.parse(body)
    console.log(json.name)
  })
}

function create() {
  request({
    url: 'https://lidemy-book-store.herokuapp.com/books',
    method: 'POST',
    json: { name: param }
  })
}

function deleteAPI() {
  request({
    url: `https://lidemy-book-store.herokuapp.com/books/${param}`,
    method: 'DELETE'
  })
}

function update() {
  request({
    url: `https://lidemy-book-store.herokuapp.com/books/${param}`,
    method: 'PATCH',
    json: { name: bookName }
  })
}

switch (cmdName) {
  case 'list':
    list()
    break
  case 'read':
    read()
    break
  case 'delete':
    deleteAPI()
    break
  case 'create':
    create()
    break
  case 'update':
    update()
    break
}
