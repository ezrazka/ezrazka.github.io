"use strict"

// function isElementInViewport(element) {
//   let rect = element.getBoundingClientRect();

//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;

  document.querySelector('.parallax-background').style.transform = `translateY(${scrollPosition * 0.5}px)`;
  document.querySelector('.main-heading-container').style.transform = `translateY(${scrollPosition * -0.3}px)`;

  document.querySelector('.main-nav-container').classList.toggle('background', scrollPosition > 0);

  // let sections = document.querySelectorAll('section');
  // let navItems = document.querySelectorAll('.main-nav ul li');

  // sections.forEach((section, index) => {
  //   navItems[index].classList.toggle('active', isElementInViewport(section));
  // });
});