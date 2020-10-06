// START NAV

window.addEventListener('scroll', (event) => {
  let main = window.scrollY;
});

window.addEventListener('scroll', (event) => {
  const main = document.getElementById('main');
  const navbar = document.getElementById('navbar');
  if (window.scrollY >= main.offsetTop) {
    navbar.style.position = 'fixed';
  } else {
    navbar.style.position = 'relative';
  }
});

// END NAV
