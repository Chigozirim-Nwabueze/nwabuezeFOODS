const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".li");
const links = document.querySelectorAll(".li li");

hamburger.addEventListener("click", () => {
  console.log("something was clicked");
  navlinks.classList.toggle("li");
});

window.addEventListener("DOMContentLoaded", (e) => {
  console.log("page is fully loaded");
});
