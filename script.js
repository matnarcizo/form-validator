const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

function showError(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  formControl.className = 'form-control error'
  small.innerText = message
}

function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

function checkRequired(inputArr) {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `campo obrigatório`)
    } else {
      showSuccess(input)
    }
  })
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `O campo deve ter pelo menos ${min} caracteres`)
  } else if (input.value.length > max) {
    showError(input, `O campo deve ter no máximo ${max} caracteres`)
  } else {
    showSuccess(input)
  }
}

function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
  if (re.test(String(input.value.trim()).toLowerCase())) {
    showSuccess(input)
  } else {
    showError(input, 'Email inválido')
  }
}

function checkPassword(password, confirmPassword) {
  if (password.value !== confirmPassword.value) {
    showError(confirmPassword, 'As senhas não ')
  } else {
    showSuccess(confirmPassword)
  }
}

form.addEventListener('submit', e => {
  e.preventDefault()

  checkRequired([username, email, password, confirmPassword])
  checkLength(username, 3, 15)
  checkLength(password, 6, 25)
  checkEmail(email)
  checkPassword(password, confirmPassword)
})
