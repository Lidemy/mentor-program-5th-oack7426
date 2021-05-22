## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
`<canvas>` 定義圖形，標籤只是圖形容器，必須使用腳本來繪製圖案   
`<font>`	 定義字體，但 html5 已棄用   
`<progress>` 定義進度，進度條


## 請問什麼是盒模型（box modal）
所有的元素都被一個個的盒子包著，這個就是盒模型
完整的盒模型包含
- Content box 主要內容顯示 
可設定 `width` `height`
- Padding box 主內容外的空白區域 
可設定 `padding` 
- Border box 包裹住 Content box 、 Padding box 的邊線
可設定 `border`
- Margin box 最外面和其他元素的距離
可設定 `margin`

![完整盒模型](https://mdn.mozillademos.org/files/16558/box-model.png)


## 請問 display: inline, block 跟 inline-block 的差別是什麼？

- `display: inline` 行內元素 
元素均在同一行呈現，不論是圖片還是文字都是。不可設定寬高，寬高是由元素本身自行撐開。

##### `display: inline-block` 區塊元素
介於 `display: inline` 跟 `display: block` 之間
具備 `display: block` 完整盒模型功能，但不會預設撐到最寬佔滿整個容器，跟 `display: inline` 一樣預設寬度是由內容撐開的

##### `display: block` 塊狀元素
預設狀態是撐到最寬佔滿整個容器，具備完整的盒模型功能


## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

##### `position: static` 預設值
按照瀏覽器預設的位置排版。  

##### `position: relative` 相對定位 (父元素)
沒特別設定的話跟 `position: static` 效果是一樣，差在可以使用 `top`、`left`、`right`、`bottom`。


##### `position: absolute` 絕對定位 (子元素)
元素直接浮空，會影響其他元素位置  
定位點是往上找第一個 `position` 不是 `static` 的元素


##### `position: fixed` 浮動元素
元素直接浮空，會影響其他元素位置
很類似 `position: absolute`，但定位點是瀏覽器視窗。
由於定位點是瀏覽器視窗，所以滾動時依然會存在(永遠都在)

