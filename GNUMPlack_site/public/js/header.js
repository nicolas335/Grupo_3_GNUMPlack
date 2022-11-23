//const { localsName } = require("ejs");
let menuToggle = document.querySelector(".menu-toggle");
let menu = document.getElementById("menu");

menuToggle.addEventListener("click", (e) => {
   return menu.classList.toggle("hidden");
});