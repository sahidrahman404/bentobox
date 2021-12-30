// Set Current Year
const yearSelect = document.querySelector(".year");
const currentYear = new Date().getFullYear();
  yearSelect.textContent = currentYear;

// Make Mobile Navigation Work

// const navList = document.querySelector(".nav__list");
// const navMobile = document.querySelector(".nav__mobile");
// const mobileIconMenu = document.querySelector(".nav__mobile ion-icon[name='menu-outline']") 
// const mobileIconClose = document.querySelector(".nav__mobile ion-icon[name='close-outline']") 

const navOpenSelect = document.querySelector(".nav__mobile");
// const navCloseSelect = document.querySelector(".nav__mobile ion-icon[name='close-outline']")
const headerSelect = document.querySelector(".header");

navOpenSelect.addEventListener("click", function(){
  headerSelect.classList.toggle("nav__open")
})
//
// navCloseSelect.addEventListener("click", function(){
//   headerSelect.classList.remove("nav__open")
// })
