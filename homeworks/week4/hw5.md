## 請以自己的話解釋 API 是什麼
API 指 Application Programming Interface 中文為 應用程式界面
API 用飲料販賣機舉例
- 看著販賣機想要購買舒跑 （看 API 找想要的資料）
- 投遞零錢操控販賣機面板選擇舒跑的號碼（送出資料需求）
- 舒跑掉落成功購買 （接受到需求，送出對應的資料）

API 就如同步驟二的販賣機面板，提供一個方法讓購買者可以輸入需求取得對應的飲料（資料），API 是提供一個介面讓工程師可以送出需求接到資料。
![](https://miro.medium.com/max/2172/1*LWqzePQLsImLMRguE5pU8A.png)
圖片來源：[行銷人，為何你應該要知道API是什麼嗎？](https://medium.com/codeformarketing-%E8%A1%8C%E9%8A%B7%E5%B7%A5%E7%A8%8B%E5%AD%B8%E4%BA%BA/%E8%A1%8C%E9%8A%B7%E4%BA%BA-%E7%82%BA%E4%BD%95%E4%BD%A0%E6%87%89%E8%A9%B2%E8%A6%81%E7%9F%A5%E9%81%93api%E6%98%AF%E4%BB%80%E9%BA%BC-3a7b3d8d9638)


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
202 Accepted
- 此請求已經被伺服器接受但尚未處理。此狀態並非承諾一定會處理的，因為處理過程中可能出現例外。

303 See Other
- 跟 302 類似，通常是指请求的資源在别的地方，會在 header 中的 location 標資源的位置。

504 Gateway Timeout
- 連線逾時，在請求過期前未能即時收到響應。




## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
Base URL: 提供一個擁有全部資料的網址

|說明     | Method |   Path   |參數| 範例    |
|:--------------|:------:|:---------|---------|------------|
|所有餐廳|GET     |/restaurants|_limit:限制回傳數量| /restaurants?_limit=20|
|單一餐廳|GET     |/restaurants/:id|無|/restaurants/15|
|新增餐廳       |POST     |/restaurants|name: 餐廳名|/無|
|更改餐廳名       |PATCH    |/restaurants/:id|name: 餐廳名|/無|
|刪除餐廳       |DELETE   |/restaurants/:id|無|/無|