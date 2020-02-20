import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/information__slider";
import "./scripts/hamburger-menu";
import "./scripts/parallax";
import "./scripts/parallax-general";
import "./scripts/parallax-off-scroll";
import "./scripts/myworks-slider";
import sendForm from './scripts/sendForm.js';

sendForm({
    form: document.querySelector('.j-form')
});