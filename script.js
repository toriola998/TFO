const menuBtn = document.querySelector('#hamburger');
const links = document.querySelector('nav div');
const closeIcon = document.querySelector('#close-icon');

//TOGGLE HAMBURGER-MENU BTN
menuBtn.addEventListener('click', () => {
    if (links.classList.contains('show-links')) {
        links.classList.remove('show-links');
        menuBtn.setAttribute("aria-expanded", false)
    } else {
        links.classList.add('show-links');
        menuBtn.setAttribute("aria-expanded", true)
    }
})

//CLOSE NAV-BAR ONCE CLOSE BUTTON IS CLICKED
closeIcon.addEventListener('click', () => {
    links.classList.remove('show-links');
    menuBtn.setAttribute("aria-expanded", false)
});

let navLists = document.querySelectorAll('nav ul li');
//CLOSE THE NAV-BAR WHENEVER EACH NAV-LINK IS CLICKED
navLists.forEach(link => {  
  link.addEventListener('click', () => {
    links.classList.remove('show-links');
    menuBtn.setAttribute("aria-expanded", false) 
  }); 
});

//UPDATE COPYRIGHT YEAR AUTOMATICALLY
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();


//GSAP ANIMATIONS
gsap.to('.shape1', { rotation: 360, duration: 5, repeat: -1, ease: 'linear', })
gsap.to('.shape2', { x: 100, rotation: 360, duration: 10, repeat: -1, ease: 'bounce-in' })
gsap.to('.shape3', { y: 100, rotation: 360, duration: 7, repeat: -1, ease: 'bounce-in' })
gsap.to('.shape4', { x: 40, rotation: 360, duration: 20, repeat: -1, ease: 'bounce-in' })
gsap.to('.shape5', { x: 40, rotation: 360, duration: 20, repeat: -1, ease: 'bounce-in' })