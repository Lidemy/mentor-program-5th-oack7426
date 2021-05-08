const request = require('request')

const cmdName = process.argv[2]
const param = process.argv[3]
const bookName = process.argv[4]

function list() {
  request({
    url: 'https://lidemy-book-store.herokuapp.com/books',
    method: 'GET'
  }, (error, response, body) => {
    const json = JSON.parse(body)
    for (let i = 0; i < 20; i++) {
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
  }, (error, response, body) => {})
}

function deleteAPI() {
  request({
    url: `https://lidemy-book-store.herokuapp.com/books/'${param}`,
    method: 'DELETE'
  }, (error, response, body) => {})
}

function update() {
  request({
    url: `https://lidemy-book-store.herokuapp.com/books/'${param}`,
    method: 'PATCH',
    json: { name: bookName }
  }, (error, response, body) => {})
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
  case 'creat':
    create()
    break
  case 'update':
    update()
    break
}
