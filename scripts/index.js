const onScroll = () => {
  const navbar = document.getElementById('navbar');
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 50) {
    navbar.style.maxHeight = '60px';
    navbar.querySelector('.navbar-logo').style.maxHeight = '50px';
  } else {
    navbar.style.maxHeight = '75px';
    navbar.querySelector('.navbar-logo').style.maxHeight = '60px';
  }
};

window.onscroll = onScroll;
