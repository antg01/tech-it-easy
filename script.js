// 1 - Recupérer la position du bottom du header
//const header = document.getElementById("header")
//let bottomHeaderPosition = header.offsetTop
//console.log(bottomHeaderPosition)

// 2 - Get scroll event on page
// --> console.log(" i am scrolling "") add listener on body or window ?

//window.addEventListener('scroll', (event) => {
//console.log("iam scrolling")
//});

// 3 - Get window position while scrolling

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
