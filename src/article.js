// START ARTICLE
const articles = document.querySelectorAll('.main__item');

for (const article of articles) {
  article.addEventListener('click', (e) => {
    window.open('./article/article.html');
  });
}

// END ARTICLE
