'use strict';

import s from './styles.js';
import pic from './pictures.js';

let wrapper = document.getElementById('wrapper');

let htmlServices = `

  <header class="${s.header.header}">
    <div class="${s.header.container} globalContainer">
      <div class="${s.header.branding}">
        <h1><span class="${s.header.highlight}">Acme</span> Web Design</h1>
      </div>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li class="${s.header.current}"><a href="services.html">Services</a></li>
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

  <section class="">
    <div class="${s.box.container} globalContainer">
      
      <article class="${s.box.article}">
        <h1>Services</h1>
          <ul class="${s.box.ulServices}">
            <li>
              <h3>Website Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui repellat expedita harum eius mollitia, nihil, cum vel atque repellendus temporibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, expedita. A, voluptatibus. </p>
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <h3>Website Maintenance</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet facere sequi unde distinctio itaque, explicabo ipsa omnis earum. Pariatur, eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, error! A, voluptatibus. </p>
              <p>Lorem ipsum dolor sit.</p>
            </li>
            <li>
              <h3>Website Hoisting</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, nisi, hic. Alias nulla, quidem cupiditate. Fugiat, dicta nemo quas ratione. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, ab! A, voluptatibus. </p>
              <p>Lorem ipsum dolor sit.</p>
            </li>
          </ul>
      </article>

      <aside class="${s.box.sidebar}">
        <div class="${s.box.darkFlex}">
          <h3>Get A Quote</h3>
          <form action="" class="${s.forms.form_2}">
            <div>
              <label>Name</label><br>
              <input type="text" placeholder="Name">
            </div>  
            <div>
              <label>Email</label><br>
              <input type="email" placeholder="Email Address">
            </div>
            <div>
              <label>Message</label><br>
              <textarea placeholder="Message"></textarea>
            </div>
            <button class="${s.buttons.btn_1}" type="submit">Send</button>
          </form>
        </div>
      </aside>
    </div>
  </section>

  <footer class="${s.footer.footer}">
    <p>Acme Web Design, Copyright &copy; 2017</p>
  </footer>
`;

wrapper.innerHTML = htmlServices;




