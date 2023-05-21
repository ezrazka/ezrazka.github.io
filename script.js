window.addEventListener('scroll', function() {
  let scrollPosition = window.pageYOffset;

  document.querySelector('.parallax-background').style.transform = 'translateY(' + (scrollPosition * 0.5) + 'px)';
  document.querySelector('.main-heading-container').style.transform = 'translateY(' + (scrollPosition * -0.3) + 'px)';
});