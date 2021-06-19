## 什麼是 Ajax？
Ajax 實現非同步請求 (Asynchronous Request)
在非同步請求 (Asynchronous request) 還沒被開發之前，如果我們要瀏覽一則留言，就必須向 Server 重新 request 一個完整的頁面。等待頁面切換的這段時間畫面往往會卡住不動，直到接收 response，才會重新渲染 (render) 畫面。

而 Ajax 技術的出現，讓瀏覽器可以向 Server 請求資料而不需費時等待。當瀏覽器接收到 response 之後，新的內容就會即時地添入原本網頁。這也是為什麼當我們瀏覽 Facebook、Twitter 內容時，不會看見整個網頁一直重新整理。

##### 資料來源
[什麼是 Ajax？ 搞懂非同步請求 (Asynchronous request)概念](https://tw.alphacamp.co/blog/ajax-asynchronous-request)

## 用 Ajax 與我們用表單送出資料的差別在哪？
用表單 `form` 的方式是直接發送到 `action` 的網址，直接導過去 (跟 js 無關)
![螢幕快照 2021-06-16 下午9.50.46](https://i.imgur.com/ADXg5Mp.png)
```html
 <form method="GET" action="https://google.com">
    <input name="username" />
    <input type="submit">
 </form>
```
結果直接顯示在網址 `username=XXX`
![螢幕快照 2021-06-16 下午9.45.51](https://i.imgur.com/8ZFipg7.png)

而 ajax 的方式多了透過 js 去溝通回傳的步驟
![螢幕快照 2021-06-16 下午9.53.10](https://i.imgur.com/whxWgDO.png)


## JSONP 是什麼？
JSONP 是 JSON 的一種使用模式，可以讓一個網頁從其他的網域 (cross-domain) 請求資料，繞過 AJAX 因為有瀏覽器安全性限制無法跨網域使用的問題 (same-origin policy)。

JSONP 和 JSON 其實也沒有什麼直接的關係，只是搭配 JSON 是純文字格式方便傳輸且支援豐富的資料交換格式，另外 JavaScript 原生就可以直接操作 JSON，讓 JSONP 這個使用模式更方便好用。

JSONP 是解決跨網域限制的方法之一，它的概念其實很簡單，就是利用 `<script>` 標籤可以跨網域請求的特性。

##### 資料來源
[JSONP (JSON with Padding)](https://www.fooish.com/json/jsonp.html)


## 要如何存取跨網域的 API？
基於安全性考量，程式碼所發出的跨來源 HTTP 請求會受到限制。例如，XMLHttpRequest 及 Fetch 都遵守"同源政策"（same-origin policy）。這代表網路應用程式所使用的 API 除非使用 CORS 標頭，否則只能請求與應用程式相同網域的 HTTP 資源。

可使用 `XMLHttpRequest` 或 `Fetch API` 進行跨站請求

##### 資料來源
[跨來源資源共用（CORS）](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS)

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為用 node 不會有中間層的限制，但用瀏覽器會受到瀏覽器的限制

###### node 發 request
![螢幕快照 2021-06-16 下午9.41.01](https://i.imgur.com/OkO9A46.png)

###### 瀏覽器發 request
![螢幕快照 2021-06-16 下午9.41.13](https://i.imgur.com/jXYi0pi.png)

