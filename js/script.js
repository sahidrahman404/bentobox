// Set Current Year
const yearSelect = document.querySelector('.year')
const currentYear = new Date().getFullYear()
yearSelect.textContent = currentYear

// Make Mobile Navigation Work

const navOpenSelect = document.querySelector('.nav__mobile')
const headerSelect = document.querySelector('.header')

navOpenSelect.addEventListener('click', function () {
  headerSelect.classList.toggle('nav__open')
})
