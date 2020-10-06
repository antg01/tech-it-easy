// DOM ELEMENTS
const articles = document.querySelectorAll('.main__item');

// Variables
var bodyRect = document.body.getBoundingClientRect();

// articles[0].style.transform = 'translateX(-100%)';

// SCROLL EVENT
window.addEventListener('scroll', (e) => {
  //   for (const article of articles) {
  //     let articleRect = article.getBoundingClientRect();
  //     let offset = articleRect.top - bodyRect.top;
  //     console.log(article, offset);
  //   }
  //   articles[0].style.transform = `translateX(${-800 + window.scrollY}px)`;
  //   console.log(window.scrollY, offset);

  if (window.scrollY >= 300) {
    articles[0].classList.add('enter-left');
  }

  if (window.scrollY >= 400) {
    articles[1].classList.add('enter-right');
    console.log(articles[1], 'enter');
  }
});
