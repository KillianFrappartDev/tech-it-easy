// START SCROLL

let current = 2;

class Article {
  imageUrl;
  template;

  constructor(url) {
    this.imageUrl = `../assets/article-${url}.jpg`;
    this.template = `  
    <div>
        <div class="main__wrapper">
            <div>
            <img class="hero-image" src="${this.imageUrl}" alt="article test">
        </div>
        <div>
        <article>
          <h1 class="main__item-title">Title</h1>
          <div class="main__item-tags">
          <h3 class="main__item-tag">#Tag</h3>
          <h3 class="main__item-tag">#Tag</h3>
          <h3 class="main__item-tag">#Tag</h3>
        </div>
         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nemo molestias natus deleniti fugit quaerat ipsa ducimus at cumque tempore beatae et, quos exercitationem cupiditate necessitatibus, quasi commodi debitis. Voluptatum!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore voluptatem laborum necessitatibus, voluptate perferendis dolorum nam officiis sunt doloribus nihil eos accusantium nemo, ut, repellendus repudiandae! Ullam suscipit laudantium nostrum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tenetur labore, autem temporibus dolorem non harum velit fugit accusamus ullam, similique blanditiis numquam doloremque modi necessitatibus dicta! Ipsa, assumenda placeat.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi beatae similique nisi, vero tenetur rerum, quibusdam qui sequi nihil culpa magnam tempora eaque at aperiam officia. Quidem unde dicta incidunt.
        </p>
        </article>
        </div>
        <div>
        <ul class="social">
          <li class="social__buttons">
            <a href="#">
              <img class="navbar-image" src="../assets/Facebook_icon-icons.com_66805.png" alt="Facebook" srcset=""/>
            </a>
          </li>
          <li class="social__buttons">
            <a href="#">
              <img class="navbar-image" src="../assets/5294-twitter-i_102511 (1).png" alt="Twitter" srcset=""/>
            </a>
          </li>
          <li class="social__buttons">
            <a href="#">
              <img class="navbar-image" src="../assets/3721672-instagram_108066 (1).png" alt="Instagram" srcset=""/>
            </a>
          </li>
        </ul>
      </div>
        <div class="form">
          <form>
              <div class="form__container">
                <h2 class="h2__color">Subscribe to our Newsletter</h2>
              </div>
                <div class="form__container" style="background-color:white">
                    <input type="text" placeholder="Name" name="name" required>
                    <input type="text" placeholder="Email address" name="mail" required>
                    <label>
                    <input type="checkbox" checked="checked" name="subscribe"> Daily Newsletter
                    </label>
                </div>
                <div class="form__container">
                    <input type="submit" value="Subscribe">
                </div>
                </form>
            </div>
        </div>
    </div>`;
  }

  render() {
    let newElem = document.createElement('div');
    newElem.innerHTML = this.template;
    document.body.appendChild(newElem);
  }
}

window.addEventListener('scroll', (e) => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    console.log('bottom');
    const newArticle = new Article(current);
    newArticle.render();
    if (current < 9) {
      current++;
    } else {
      current = 1;
    }
  }
});

// END SCROLL
