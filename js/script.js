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

// Sticky Navigation
const sectionHeroSelect = document.querySelector('.section-hero')

const watch = new IntersectionObserver(function (entries) {
  const ent = entries[0]
  console.log(ent)

  if(ent.isIntersecting === false){
    document.body.classList.add("sticky")
  }

  if(ent.isIntersecting === true){
    document.body.classList.remove("sticky")
  }
  
}, {
  //in the viewport
  root: null,
  threshold: 0,
  rootMargin: "-80px",
})
watch.observe(sectionHeroSelect)

