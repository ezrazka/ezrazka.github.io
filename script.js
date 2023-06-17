"use strict"

window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;

  document.querySelector('.parallax-background').style.transform = `translateY(${scrollPosition * 0.5}px)`;
  document.querySelector('.main-heading-container').style.transform = `translateY(${scrollPosition * -0.3}px)`;

  document.querySelector('.main-nav-container').classList.toggle('background', scrollPosition > 0);
});

const image = document.querySelector('.my-photo');
  
image.addEventListener('click', () => {
  image.classList.toggle('clicked');
});