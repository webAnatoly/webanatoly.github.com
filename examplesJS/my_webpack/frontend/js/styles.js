'use strict';


// import all styles
import normalize from "../css/normalize.css";
import globalCss from "../css/global.css";
import buttons from "../css/buttons.css";
import header from "../css/header.css";
import showcase from "../css/showcase.css";
import newsletter from "../css/newsletter.css";
import box from "../css/box.css";
import footer from "../css/footer.css";
import forms from "../css/forms.css";

let s = {};

s.normalize = normalize;
s.global = globalCss;
s.buttons = buttons;
s.header = header;
s.showcase = showcase;
s.newsletter = newsletter;
s.box = box;
s.footer = footer;
s.forms = forms;

// export all styles as a single object
export default s;