## 什麼是 DOM？
DOM 全名為 Document Object Model 中文翻譯為 文件物件模型，看起來很抽象但其實就是把一份 HTML 文件內的各個標籤，包括文字、圖片等等都定義成物件，而這些物件最終會形成一個樹狀結構
![pic_htmltree](https://i.imgur.com/vag9LtK.gif)
[資料來源](https://ithelp.ithome.com.tw/articles/10202689)

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

> 先捕獲，再冒泡

捕獲：抓到指定元素
冒泡：抓到的元素往上一個個不漏的抓
（指定元素的父元素們都會觸發）
![螢幕快照 2020-08-08 下午11.49.34](https://i.imgur.com/81xQxxq.png)


## 什麼是 event delegation，為什麼我們需要它？
`event delegation` 事件代理
監聽事件是綁在父元素上，當父元素觸發時，再往下找到指定元素執行程式。
好處是減少監聽 DOM 的數量，不用把一樣的程式碼綁在一堆 DOM 上。


## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

兩者最大的差別在於事件是否向上傳遞 （冒泡行為）

`event.preventDefault()` 停止默認動作
觸發事件，但不觸發 DOM 的預設行為
[event.preventDefault()範例](https://codepen.io/oack7426/pen/LYNLWQp)


`event.stopPropagation()` 阻止事件冒泡
觸發事件，但阻止冒泡行為
[event.stopPropagation()範例](https://codepen.io/oack7426/pen/QWNgpmB)

