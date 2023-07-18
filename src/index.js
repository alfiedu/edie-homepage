const hamburgerButton = document.querySelector('.menu-toggle');
const header = document.querySelector('header');

hamburgerButton.onclick = () => {
  const lineHamburgerButton = document.querySelectorAll('span');
  const nav = document.querySelector('nav');
  const navMenu = document.querySelector('nav ul');
  const menus = document.querySelectorAll('nav ul li');
  
  nav.classList.toggle('active');
  navMenu.classList.toggle('active');
  lineHamburgerButton.forEach(line =>  {
    line.classList.toggle('active');
  })
  
  for (let i = 0; i < menus.length; i++) {
    menus[i].addEventListener('click', () => {
       menus.forEach(menu => {
         menu.classList.remove('active')
       })
       menus[i].classList.add('active')
    })
  }
  
  
}

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 50) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
 
})
