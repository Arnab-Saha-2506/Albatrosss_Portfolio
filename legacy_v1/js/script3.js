const scriptURL = 'https://script.google.com/macros/s/AKfycbyyYYquWOw3NJhT3j_5vX78dNTK1jQDYALOTyU6JZ7c09Jmlko4E4g4BhCftJFwPrkmJQ/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thanks for contacting me..! I will contact you soon..."))
    .catch(error => console.error('Error!', error.message))
})