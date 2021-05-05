/* eslint-disable */

const request = require('request')

const cmdName = process.argv[2]
const param = process.argv[3]
const bookName = process.argv[4]

function list() {
  request({
    url: 'https://lidemy-book-store.herokuapp.com/books',
    method: 'GET'
  }, function(error, response, body){
    const json = JSON.parse(body)
    for (let i = 0; i < 20; i++) {
      console.log(json[i].id + json[i].name)
    }
  })
}

function read() {
  request({
    url: 'https://lidemy-book-store.herokuapp.com/books/' + param,
    method: 'GET'
  }, function(error, response, body){
    const json = JSON.parse(body)
    console.log(json.name)
  })
}

function create() {
  request({
    url: 'https://lidemy-book-store.herokuapp.com/books',
    method: 'POST',
    json: {name:param}
  }, function(error, response, body){
    //console.log(body);
  })
}

function deleteAPI() {
  request({
    url: 'https://lidemy-book-store.herokuapp.com/books/' + param,
    method: 'DELETE'
  }, function(error, response, body){
    //console.log(body);
  })
}

function update() {
  request({
    url: 'https://lidemy-book-store.herokuapp.com/books/' + param,
    method: 'PATCH',
    json: {name:bookName}
  }, function(error, response, body){
    //console.log(body);
  });
}

switch (cmdName) {
  case 'list':
    list()
    break;
  case 'read':
    read()
    break;
  case 'delete':
    deleteAPI()
    break;
  case 'creat':
    create()
    break;
  case 'update':
    update()
    break;
}
/* eslint-enable */
