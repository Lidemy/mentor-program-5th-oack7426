``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1.isValid([3, 5, 8, 13, 22, 35]) 呼叫 isValid 函式
2.設定變數初始值 i = 0
3.判斷 i < arr.length 是否成立（ i = 0 跟 arr.length= 6 ）,判斷結果為”是“，繼續執行
4.跑 if 判，判斷 arr[0] <= 0，arr[0] = 3 條件不成立，第一輪迴圈結束，跑 i++，i=1 繼續跑第下一輪for迴圈
5.判斷 i < arr.length 是否成立（ i = 1 跟 arr.length= 6 ）,判斷結果為”是“，繼續執行
6.跑 if 判，判斷 arr[1] <= 0，arr[1] = 5 條件不成立，第二輪迴圈結束，跑 i++，i=2 繼續跑第下一輪for迴圈
7.判斷 i < arr.length 是否成立（ i = 2 跟 arr.length = 6 ）,判斷結果為”是“，繼續執行
8.跑 if 判，判斷 arr[2] <= 0，arr[2] = 8 條件不成立，第三輪迴圈結束，跑 i++，i=3 繼續跑第下一輪for迴圈
9.判斷 i < arr.length 是否成立（ i = 3 跟 arr.length = 6 ）,判斷結果為”是“，繼續執行
10.跑 if 判，判斷 arr[3] <= 0，arr[3] = 13 條件不成立，第四輪迴圈結束，跑 i++，i=4 繼續跑第下一輪for迴圈
11.判斷 i < arr.length 是否成立（ i = 4 跟 arr.length = 6 ）,判斷結果為”是“，繼續執行
12.跑 if 判，判斷 arr[4] <= 0，arr[4] = 22 條件不成立，第五輪迴圈結束，跑 i++，i=5 繼續跑第下一輪for迴圈
13.判斷 i < arr.length 是否成立（ i = 5 跟 arr.length = 6 ）,判斷結果為”是“，繼續執行
14.跑 if 判，判斷 arr[5] <= 0，arr[5] = 35 條件不成立，第六輪迴圈結束，跑 i++，i=6 繼續跑第下一輪for迴圈
15.判斷 i < arr.length 是否成立（ i = 6 跟 arr.length = 6 ）,判斷結果為”否“，結束整個 for 迴圈，往下執行程式
16.跑下方的第二個 for 迴圈，設定變數初始值 i = 2 
17.判斷 i < arr.length （ i = 2 跟 arr.length = 6 ）是否成立,判斷結果為”是“，繼續執行
18.跑 if 判，判斷 (arr[2] !== arr[2-1] + arr[2-2]) 數字帶入判斷 8!== 5 + 3，條件不成立，第一輪迴圈結束，跑 i++ ，i = 3，繼續跑下一輪for迴圈
19.判斷 i < arr.length （ i = 3 跟 arr.length = 6 ）是否成立,判斷結果為”是“，繼續執行
20.跑 if 判，判斷 (arr[3] !== arr[3-1] + arr[3-2] ) 數字帶入判斷 13!== 8 + 5，條件不成立，第二輪迴圈結束，跑 i++ ，i = 4，繼續跑下一輪for迴圈
21.判斷 i < arr.length （ i = 4 跟 arr.length = 6 ）是否成立,判斷結果為”是“，繼續執行
22.跑 if 判，判斷 (arr[4] !== arr[4-1] + arr[4-2]) 數字帶入判斷 22!== 13 + 8,條件成立，第三輪迴圈結束，return 'invalid' 
23.結束此迴圈也結束此 function 程式