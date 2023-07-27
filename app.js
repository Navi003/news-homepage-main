const hamEl = document.querySelector(".hamburger");
const closeEl = document.querySelector(".close-nav");
const mobileNav = document.querySelector(".mobile-nav");
hamEl.addEventListener("click", function () {
  console.log("hamburger clicked");
  mobileNav.classList.add("visible");
  document.body.classList.add("no-scroll");
  mobileNav.style.display = "block";
});

closeEl.addEventListener("click", function () {
  console.log("close clicked");
  mobileNav.classList.remove("visible");
  document.body.classList.remove("no-scroll");
});
