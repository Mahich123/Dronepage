// javascript
const menuBtn = document.querySelector('.menu-btn')
      menu = document.querySelector('nav ul')
      Exit = document.querySelector('.exit-btn')
      
menuBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(0)'
} )

Exit.addEventListener('click', () => {
    menu.style.transform = 'translateX(100%)'
} )