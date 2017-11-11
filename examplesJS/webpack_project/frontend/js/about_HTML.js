'use strict';

import s from './styles.js';
import pic from './pictures.js';

let wrapper = document.getElementById('wrapper');

let htmlAbout = `

  <header class="${s.header.header}">
    <div class="${s.header.container} globalContainer">
      <div class="${s.header.branding}">
        <h1><span class="${s.header.highlight}">Acme</span> Web Design</h1>
      </div>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li class="${s.header.current}"><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section class="${s.newsletter.newsletter}">
    <div class="${s.newsletter.container} globalContainer">
      <h1>Subscribe To Our Newsletter</h1>
      <form action="">
        <input type="email" placeholder="Enter Email...">
        <button type="submit" class="${s.buttons.btn_1}">Subscribe</button>
      </form>
    </div>
  </section>

  <section>
    <div class="${s.box.container} globalContainer">
      <article class="${s.box.article}">
        <h1 class="">About Us</h1>
        <p>Magni quae laudantium neque voluptas quam odio architecto praesentium voluptates sed iure maiores mollitia, nesciunt ut culpa, repudiandae commodi unde quasi quia, error, exercitationem libero perspiciatis asperiores provident nulla. Perferendis et, consequuntur similique accusamus distinctio cupiditate quia sunt! Sint voluptatum debitis voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam dolorum suscipit ducimus ratione harum nesciunt sequi quos, beatae quis neque tenetur illo doloribus qui, quibusdam corrupti itaque vero recusandae voluptatum dolore, facere commodi rerum praesentium dolor officiis. Sed, facilis, quis!</p>
        <p>Nemo, voltus, maiores velit repellat culpa voluptates possimus enim magni repudiandae assumenda optio facere! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A rerum ratione sapiente provident asperiores molestias, neque, error repellat deleniti amet itaque officia pariatur aliquid dolorem, aut quaerat sequi. Nam repudiandae quo eligendi iusto hic, ullam rerum quasi provident quis voluptate.</p>
      </article>
      <aside class="${s.box.sidebar}">
        <div class="${s.box.dark}">
          <h3>What We Do</h3>
          <p>Soluta, aperiam quidem animi accusamus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, quidem. Sit quaerat aperiam eveniet, ea perspiciatis natus!</p>
        </div>
      </aside>
    </div>
  </section>

  <footer class="${s.footer.footer}">
    <p>Acme Web Design, Copyright &copy; 2017</p>
  </footer>

`;

wrapper.innerHTML = htmlAbout;




