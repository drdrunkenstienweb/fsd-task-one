// Styles
import "./styles/index.css";
import "./styles/index.scss";

// Modules
import { createComp } from "./js/component";

// Script

let text = "Hello,FSDD";
const className = "head";
createComp("h1", className, document.body, text);
console.log("Helloo");

if (module.hot) {
  module.hot.accept("./index.js", function () {
    const comp = document.querySelector(`.${className}`);
    document.body.removeChild(comp);
    createComp("h1", className, document.body, text);
  });
}
