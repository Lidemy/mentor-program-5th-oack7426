// add
function add() {
  const $list = document.getElementById('list')
  const $input = document.getElementById('input')
  const newList = document.createElement('li')
  if ($input.value === '') {
    alert('請輸入內容')
    return
  }
  const undoneList = `
      <label>
        <input class="click" type="checkbox">
        <p>${$input.value}</p>
        <i class="done-icon">已完成</i>
      </label>
      <button class="delete-btn">Ｘ</button>`

  newList.innerHTML = undoneList
  $list.appendChild(newList)
}

// delete
function deleteEl(el) {
  const elParent = el.parentNode
  elParent.remove()
}
function deleteList() {
  const $deleteBtn = document.querySelectorAll('.delete-btn')
  for (let i = 0; i < $deleteBtn.length; i++) {
    $deleteBtn[i].addEventListener('click', (e) => {
      deleteEl(e.target)
    })
  }
} deleteList()

// toggle
function toogleCheck() {
  const $check = document.querySelectorAll('#list input')
  for (let i = 0; i < $check.length; i++) {
    $check[i].addEventListener('click', (e) => {
      if (e.currentTarget.checked) {
        $check[i].nextElementSibling.nextElementSibling.classList.toggle('show', true)
      } else {
        $check[i].nextElementSibling.nextElementSibling.classList.toggle('show', false)
      }
    })
  }
} toogleCheck()

const $submit = document.getElementById('submit')
$submit.addEventListener('click', () => {
  add()
  deleteList()
  toogleCheck()
})
