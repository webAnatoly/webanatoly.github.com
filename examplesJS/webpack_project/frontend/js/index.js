'use strict';

import s from './styles.js';
import pic from './pictures.js';

let wrapper = document.getElementById('wrapper');

let htmlHome = `

  <header class="${s.header.header}">
    <div class="${s.header.container} globalContainer">
      <div class="${s.header.branding}">
        <h1><span class="${s.header.highlight}">Acme</span> Web Design</h1>
      </div>
      <nav>
        <ul>
          <li class="${s.header.current}"><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section class="${s.showcase.showcase}">
    <div class="${s.showcase.container} globalContainer">
      <h1>Afordable Professional Websites</h1>
      <p>Lorem2 ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, doloremque.</p>
    </div>
  </section>

  <section class="${s.newsletter.newsletter}">
    <div class="${s.newsletter.container} globalContainer">
      <h1>Subscribe To Our Newsletter</h1>
      <form action="">
        <input type="email" placeholder="Enter Email...">
        <button type="submit" class="${s.buttons.btn_1}">Subscribe</button>
      </form>
    </div>
  </section>

  <section id="${s.box.mainBox}">
    <div class="${s.box.container} globalContainer">
      <div class="${s.box.boxOne}">
        <img src="${pic.logo_html}">
        <h3>HTML5 Markup</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nulla sunt laboriosam, veritatis, velit tenetur.</p>
      </div>
      <div class="${s.box.boxOne}">
        <img src="${pic.logo_css}">
        <h3>CSS3 Styling</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nulla sunt laboriosam, veritatis, velit tenetur.</p>
      </div>
      <div class="${s.box.boxOne}">
        <img src="${pic.logo_brush}">
        <h3>Graphic Design</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nulla sunt laboriosam, veritatis, velit tenetur.</p>
      </div>
    </div>
  </section>

  <footer class="${s.footer.footer}">
    <p>Acme Web Design, Copyright &copy; 2017</p>
  </footer>

`;

wrapper.innerHTML = htmlHome;



