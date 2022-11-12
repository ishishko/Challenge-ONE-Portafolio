const nav = document.querySelector("nav");
const ul = document.querySelector(".header--ul");

function scroll() {
  console.log("estoy aca");
  const html = document.querySelector("html").clientWidth;
  if (html <= 412) {
    nav.classList.remove("header--nav__fixed");
    ul.classList.remove("header--ul__fixed");
  } else {
    // console.log("scroll");
    nav.classList.toggle("header--nav__fixed", window.scrollY > 120);
    ul.classList.toggle("header--ul__fixed", window.scrollY > 120);
  }
}

export default function navFixed() {
  window.addEventListener("scroll", scroll);
}
