const menu = document.querySelector('#hamburger');
const links = document.querySelector('nav div');
const closeIcon = document.querySelector('#close-icon');

//Toggle to menu hamburger
menu.addEventListener('click', function(){
links.classList.toggle('show-links');
});

//Close the side bar once the close icon gets clicked
closeIcon.addEventListener('click', function(){
    links.classList.remove('show-links');
});

let navLinks = document.querySelectorAll('nav ul li');
//event listener for each links
navLinks.forEach(link => {  
  link.addEventListener('click', () => {
    links.classList.remove('show-links');
  }); 
});

//Update the copyright year automatically
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();