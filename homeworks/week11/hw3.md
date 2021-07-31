## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫

### 加密
是可逆的會被人破解，可以透過解密得到原文。

### 雜湊
資料不論長短，經過雜湊演算法後會輸出固定的長度，相同的資料用相同的雜湊演算法會得到一樣的結果，但反過來卻不行。 (無法逆向解出原本資料)

最常用在保護密碼上。


## include、require、include_once、require_once 的差別
都屬於可以直接引用外部檔案的函式


#### include
語句包含並運行指定文件，運行失敗會產生一個警告
#### require
語句包含並運行指定文件，運行失敗會產生一個致命錯誤，程式就不會在往下執行。
#### include_once
和 include 類似，如果文件中已經被包含了，則不會再次包含。
#### require_once
和 require 類似，如果文件中已經被包含了，則不會再次包含。



## 請說明 SQL Injection 的攻擊原理以及防範方法

#### SQL Injection 攻擊原理
SQL Injection 透過修改 SQL 語句，試圖改變SQL語法上的邏輯，達成竊取資料/破壞資料的行為。

舉例查詢會員登入 SQL 語法如下：
```
SELECT * FROM members WHERE account='$name' AND password='$password'
```
如果只在帳號輸入欄位輸入「' or 1=1 /*」，SQL語法會變成：
```
SELECT * FROM members WHERE account=’’ OR 1=1 /*’ AND password=’’
```
其中WHERE後面的條件判斷， account='' or 1=1 ，因為1=1數學式恆等，該判斷式永遠會成立，而/*是註解符號，意味程式會忽略後面的文字，因此該SQL語法實際效果如下：
```
SELECT * FROM members WHERE account='' or 1=1
```

[參考來源](https://vbjc5275.medium.com/sql-injection%E5%8E%9F%E7%90%86%E5%8F%8A%E7%AF%84%E4%BE%8B-74d90d7e8962)

#### SQL Injection 防範方法
使用PDO (PHP Data Objects)
PDO是PHP連接資料庫的使用介面，採用預處理的方式，事先創建 SQL 語句模板並發送到資料庫，預留的值使用參數「?」 標記，資料庫將自動檢查數據格式，並轉換特殊字元，如此能確保參數不會汙染SQL執行語句，保持SQL的結構性。
```
$query = "SELECT * FROM USER where account=? and password=?";
 $stmt = $pdo->prepare($query);
 $stmt->bindParam(1, $account);
 $stmt->bindParam(2, $password);
 $stmt->execute();
```

[參考來源](https://vbjc5275.medium.com/sql-injection%E5%8E%9F%E7%90%86%E5%8F%8A%E7%AF%84%E4%BE%8B-74d90d7e8962)

## 請說明 XSS 的攻擊原理以及防範方法

####  XSS 攻擊原理
在網站中插入 JavaScript 語法攻擊只要使用 HTML 的 `<script>` 標籤，就可以在裡面撰寫一些 JavaScript 的程式。當使用者載入瀏覽網站時， JavaScript 就會被執行。

目前 XSS 攻擊的種類大致可以分成以下幾種類型：
1. Stored XSS (儲存型)
會被保存在伺服器資料庫中的 JavaScript 代碼
2. Reflected XSS (反射型)
不會被儲存在資料庫中，而是由網頁後端直接嵌入由前端使用者所傳送過來的內容造成的，就是以 `GET` 方法傳送資料給伺服器時，伺服器未檢查就將內容回應到網頁上所產生的漏洞
3. DOM-Based XSS (基於 DOM 的類型)
JavaScript 在執行過程中，沒有詳細檢查資料使得操作 DOM 的過程代入了惡意指令

####  XSS 防範方法
Stored、Reflected 的類型由後端進行防範，除了必要的 HTML 代碼，任何允許使用者輸入的內容都需要檢查，刪除所有「`<script>`」、「 `onerror=`」及其他任何可能執行代碼的字串。

若內容只是純字串呈現，基本上只要將以下左欄所有的字元替換成右欄文字就可以杜絕了。
|  原始字元 |  HTML 跳脫字元 | 
|---|---|
| <  |& lt;   | 
| >  | & gt;  | 
| "  |  & quot; | 
|'|& #x27;|
|/|& #x2F;|
|&|& amp;|

DOM-Based 由前端來防範，在插入字串時要使用 `innerText ` 而非 `innerHTML `，避免塞入後被解析成 DOM 物件。


[參考來源](https://forum.gamer.com.tw/Co.php?bsn=60292&sn=11267)

## 請說明 CSRF 的攻擊原理以及防範方法

####   CSRF 攻擊原理
CSRF都是跨站的請求攻擊，但CSRF不一定要透過XSS手法

攻擊者透過盜用使用者的身份，悄悄發送一個請求或是執行一些惡意行為
使用者點擊含有惡意程式的連結，或是直接連結了第三方網站，並瀏覽了帶有以下html程式碼的網頁


####   CSRF 防範方法
1.要求用戶輸入原本的密碼，才能修改密碼
2.阻止不明來源的請求 （同源政策）
3.雙重 cookie 驗證
4.CSRF Token
