import cargaTerminada from "./cargaPagina.js";
import navFixed from "./navFixed.js";

window.onload = () => {
  eventos();
};

function eventos() {
  const html = document.querySelector("html");
  console.log(html.clientWidth);
  cargaTerminada();
  navFixed();
}
