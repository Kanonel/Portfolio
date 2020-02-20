import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/information__slider";
import "./scripts/hamburger-menu";
import "./scripts/parallax-welcome";
import "./scripts/parallax-general";
import "./scripts/myworks-slider";
import sendForm from './scripts/sendForm.js';

sendForm({
    form: document.querySelector('.j-form')
});