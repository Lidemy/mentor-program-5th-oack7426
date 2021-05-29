const input = document.querySelectorAll('input[type="text"]')
const submitBtn = document.getElementById('submit')

function submitFn(e) {
  e.preventDefault()
  for (let i = 0; i < input.length; i++) {
    console.log(input[i].value)
    if (input[i].value.length === 0) {
      console.log(i)
    }
  }
}

submitBtn.addEventListener('click', submitFn)
