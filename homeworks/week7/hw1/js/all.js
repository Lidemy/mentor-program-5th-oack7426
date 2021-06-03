// 暱稱是否為空
// 電子郵件是否為空
// 手機號碼是否為空
// 報名類型是否有勾選
// 怎麼知道這個活動的是否為空
// 如果沒有通過檢查，請在欄位的 input 下方顯示紅字提醒，有通過的話跳出一個 alert 展示使用者填寫的資料。 （ＯＫ）

const $input = document.querySelectorAll('.hasValue')
const $title = document.querySelectorAll('h3')
const $radio = document.querySelectorAll('input[type="radio"]')
const $error = document.querySelectorAll('.error')
const $from = document.querySelector('form')

function submitFn(e) {
  let fromInfo = ''
  let inspection = true
  const allTitle = []
  const allValue = []

  e.preventDefault()

  for (let i = 0; i < $title.length; i++) {
    allTitle.push($title[i].innerHTML)
  }
  for (let i = 0; i < $input.length; i++) {
    allValue.push($input[i].value)
  }
  allValue.splice(3, 0, '')
  for (let i = 0; i < $radio.length; i++) {
    if ($radio[i].checked) {
      const $next = $radio[i].nextElementSibling
      allValue[3] = $next.innerHTML
      break
    }
  }

  for (let i = 0; i < allValue.length; i++) {
    if (!$error[i]) {
      break
    }
    if (allValue[i].length === 0) {
      $error[i].style.display = 'block'
      inspection = false
    } else {
      $error[i].style.display = 'none'
    }
  }
  if (inspection) {
    for (let i = 0; i < $title.length; i++) {
      fromInfo += `${allTitle[i]} : ${allValue[i]} \n`
    }
    alert(fromInfo)
  }
}

$from.addEventListener('submit', submitFn)
