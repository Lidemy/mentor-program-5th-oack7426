/* eslint-disable */
// 這一個作業要讓大家實作出基本的 todo list，功能包括：
// 可以新增 todo (OK)
// 可以刪除 todo (OK)
// 差動態元素綁定
// 可以標記 todo 為完成/未完成

const $submit = document.getElementById('submit');
const $input = document.getElementById('input')
const $deleteBtn = document.querySelectorAll('.delete-btn')
const $undone = document.getElementById('undone')
const $done = document.getElementById('done')
const $click = document.querySelectorAll('.click')
let undoneList = ''
let doneList = ''
// add
$submit.addEventListener('click', () => {
  if ($input.value == "") {
    alert('請輸入內容')
    return
  }
  undoneList = `
  <li>
    <label>
      <input class="click" type="checkbox">
      <p>${$input.value}</p>
    </label>
    <button class="delete-btn">Ｘ</button>
  </li>`

  $undone.insertAdjacentHTML('beforeend', undoneList)
})

// delete
for (let i = 0; i < $deleteBtn.length; i++) {
  $deleteBtn[i].addEventListener('click', (e) => {
    const $listContent = document.querySelector($deleteBtn[i].parentNode.nodeName)
    $listContent.remove()
  })
}
// 未完成已完成 (目前有bug)

// for (let i = 0; i < $click.length; i++) {
//   $click[i].addEventListener('click', () => {
//     const $listContent = document.querySelector($click[i].parentNode.parentNode.parentNode.nodeName)
//     if($click[i].checked){
//       doneList = $listContent.innerHTML
//       console.log(doneList)
//       // $done.insertAdjacentHTML('beforeend', doneList)
//       // $listContent.remove()
//     }
//     if(!$click[i].checked){
//       undoneList = $listContent.innerHTML
//       console.log(undoneList)
//       // $undone.insertAdjacentHTML('beforeend', undoneList)
//       // $listContent.remove()
//     }
//   })
// }
/* eslint-enable */
