// 你可以用 process.argv 這個陣列拿到相對應的參數，不妨先把它印出來觀察看看！
// node hw2.js list // 印出前二十本書的 id 與書名 (OK)
// node hw2.js read 1 // 輸出 id 為 1 的書籍 (OK)
// node hw2.js delete 1 // 刪除 id 為 1 的書籍
// node hw2.js create "I love coding" // 新增一本名為 I love coding 的書
// node hw2.js update 1 "new name" // 更新 id 為 1 的書名為 new name
const request = require('request')

const cmdName = process.argv[2]
const param = process.argv[3]

function getAPI(error, response, body) {
  const info = JSON.parse(body)
  const num = Number(param) - 1
  switch (cmdName) {
    case 'list':
      for (let i = 0; i < 20; i++) {
        console.log(info[i].id + info[i].name)
      }
      break
    case 'read':
      console.log(info[num].id + info[num].name)
      break
    case 'delete':
      break
  }
}

request('https://lidemy-book-store.herokuapp.com/books', getAPI)
