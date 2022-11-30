const onScroll = () => {
  const navbar = document.getElementById('navbar');
  const backToTopButton = document.getElementById('back-to-top');
  const wrapper = document.getElementById('page-wrapper');

  if (wrapper.scrollTop > 75) {
    navbar.style.maxHeight = '60px';
    navbar.querySelector('.navbar-logo').style.maxHeight = '50px';
    backToTopButton.style.transform = 'translate(0)';
  } else {
    navbar.style.maxHeight = '75px';
    navbar.querySelector('.navbar-logo').style.maxHeight = '60px';
    backToTopButton.style.transform = 'translate(0, 200%)';
  }
};

const onClickBackToTop = () => (document.getElementById('page-wrapper').scrollTop = 0);

const onDOMContentLoaded = () => {
  const main = document.querySelector('main');
  const wrapper = document.getElementById('page-wrapper');
  main.style.opacity = '1';
  onScroll();
  wrapper.onscroll = onScroll;
  document.getElementById('back-to-top').addEventListener('click', onClickBackToTop);
};

addEventListener('DOMContentLoaded', onDOMContentLoaded);
