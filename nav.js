// START NAV

window.addEventListener('scroll', (event) => {
  let main = window.scrollY;
  let header = window.scrollY;
  console.log(header)
});

window.addEventListener('scroll', (event) => {
  const main = document.getElementById('main');
  const navbar = document.getElementById('navbar');
  if (window.scrollY >= main.offsetTop) {
   navbar.style.position = 'fixed';
   navbar.querySelector(".image-logo").style.display = 'block';

  } else {
    navbar.style.position = 'relative';
    navbar.querySelector(".image-logo").style.display = 'none';
    
  }
});

// END NAV
