const onScroll = () => {
  const navbar = document.getElementById('navbar');
  const backToTopButton = document.getElementById('back-to-top');
  const main = document.querySelector('main');

  if (main.scrollTop > 75) {
    navbar.style.maxHeight = '60px';
    navbar.querySelector('.navbar-logo').style.maxHeight = '50px';
    backToTopButton.style.transform = 'translate(0)';
  } else {
    navbar.style.maxHeight = '75px';
    navbar.querySelector('.navbar-logo').style.maxHeight = '60px';
    backToTopButton.style.transform = 'translate(0, 200%)';
  }
};

const onClickBackToTop = () => (document.querySelector('main').scrollTop = 0);

const onDOMContentLoaded = () => {
  const main = document.querySelector('main');
  main.style.opacity = '1';
  onScroll();
  main.onscroll = onScroll;
  document.getElementById('back-to-top').addEventListener('click', onClickBackToTop);
};

addEventListener('DOMContentLoaded', onDOMContentLoaded);
