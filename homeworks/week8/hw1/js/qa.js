const $el = document.querySelectorAll('.qa-box')
const $toogleBox = document.querySelectorAll('.qa-box .qa-inbox')

for (let i = 0; i < $el.length; i++) {
  $el[i].addEventListener('click', () => {
    $toogleBox[i].classList.toggle('toggle')
  })
}
