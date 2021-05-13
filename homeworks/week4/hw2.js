const request = require('request')

const API = 'https://lidemy-book-store.herokuapp.com/books'
const cmdName = process.argv[2]
const param = process.argv[3]
const bookName = process.argv[4]

function list() {
  request({
    url: `${API}?_limit=20`,
    method: 'GET'
  }, (error, response, body) => {
    const json = JSON.parse(body)
    if (error) {
      return console.log('失敗:', error)
    }
    for (let i = 0; i < json.length; i++) {
      console.log(json[i].id + json[i].name)
    }
  })
}

function read() {
  request({
    url: `${API}/${param}`,
    method: 'GET'
  }, (error, response, body) => {
    const json = JSON.parse(body)
    if (error) {
      return console.log('失敗:', error)
    }
    console.log(json.name)
  })
}

function create() {
  request({
    url: `${API}`,
    method: 'POST',
    form: { name: param }
  }, (error, response) => {
    if (error) {
      return console.log('失敗:', error)
    }
  })
}

function deleteAPI() {
  request({
    url: `${API}/${param}`,
    method: 'DELETE'
  }, (error, response) => {
    if (error) {
      return console.log('失敗:', error)
    }
  })
}

function update() {
  request({
    url: `${API}/${param}`,
    method: 'PATCH',
    form: { name: bookName }
  }, (error, response) => {
    if (error) {
      return console.log('失敗:', error)
    }
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
