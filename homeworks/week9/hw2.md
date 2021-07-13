## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
按照查詢速度： VARCHAR > TEXT
#### VARCHAR
可變長度的字串，在設定時需要給一個最大長度。

#### TEXT
純文字欄位，在設定時不需設定最大長度，資料可輸入的最大長度為 2^16-1 

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？

#### Cookie 是什麼？
Cookie 是 紀錄 HTTP 狀態。常見運用為購物車、會員登入等等。

Cookie 設定時會包含 Cookie 名稱、Cookie 的值 、Cookie 有效時間。Cookie 在有效時間內除非使用者強制清除，否則會一直存在使用者的瀏覽器裡。
![螢幕快照 2021-07-11 下午9.20.32](https://i.imgur.com/BZtwfLW.png)
#### 在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？

![螢幕快照 2021-07-11 下午9.13.59](https://i.imgur.com/SsT3wjL.png)

收到一個 HTTP 請求時，伺服器可以傳送一個 Set-Cookie 。Cookie 通常存於瀏覽器中，並隨著請求被放在Cookie HTTP 標頭內，傳給同個伺服器。可以註明 Cookie 的有效或終止時間，超過後 Cookie 將不再發送。此外，也可以限制 Cookie 不傳送到特定的網域或路徑。

![螢幕快照 2021-07-11 下午9.21.00](https://i.imgur.com/rhb4Ot3.png)

[資料來源](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Cookies)

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
密碼沒有去判斷密碼強度，過弱的密碼容易被盜取。 （例如帳號跟密碼一樣）


