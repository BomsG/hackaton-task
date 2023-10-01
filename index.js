// window.onscroll = function () {
//   myFunction();
// };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const icon = document.getElementById("icon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

const hours = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function currentTime() {
  let hr = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();

  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  hours.innerHTML = hr;
  minutes.innerHTML = min;
  seconds.innerHTML = sec;

  setTimeout(() => {
    currentTime();
  }, 1000);
}

currentTime();

ScrollReveal({
  reset: true,
  distance: "70px",
  duration: 2500,
  delay: 200,
});

ScrollReveal().reveal(".ignit-txt h1", {
  delay: 900,
  origin: "right",
  duration: 9000,
});
ScrollReveal().reveal(".first", {
  delay: 900,
  origin: "right",
  duration: 9000,
});
ScrollReveal().reveal(".first-img", {
  delay: 500,
  origin: "left",
  duration: 300,
});
ScrollReveal().reveal(".hero-txt", { delay: 500, origin: "left" });
ScrollReveal().reveal(".hero-image", {
  origin: "right",
  distance: "120px",
  easing: "ease-in-out",
});
ScrollReveal().reveal(".idea-txt", {
  origin: "bottom",
  distance: "120px",
  duration: 4500,
  easing: "ease-in-out",
});
ScrollReveal().reveal(".idea-img", {
  origin: "top",
  distance: "120px",
  easing: "ease-in-out",
});
ScrollReveal().reveal(".timeline-first", {
  origin: "top",
  distance: "120px",
  easing: "ease-in-out",
});
ScrollReveal().reveal(".timeline-main", {
  origin: "bottom",
  distance: "120px",
  easing: "ease-in-out",
});
ScrollReveal().reveal(".timeline-first h2", {
  origin: "left",
  distance: "120px",
  easing: "ease-in-out",
});
ScrollReveal().reveal(".timeline-second", {
  origin: "right",
  distance: "120px",
  easing: "ease-in-out",
});
ScrollReveal().reveal(".timeline-second h2", {
  origin: "right",
  distance: "120px",
  easing: "ease-in-out",
});
ScrollReveal().reveal(".reward-txt", {
  origin: "top",
  distance: "120px",
  easing: "ease-in-out",
});
ScrollReveal().reveal(".reward-images", {
  origin: "right",
  distance: "120px",
  easing: "ease-in-out",
});
ScrollReveal().reveal(".sponsors h2", {
  origin: "top",
  distance: "120px",
  easing: "ease-in-out",
});
ScrollReveal().reveal(".sponsors p", {
  origin: "right",
  distance: "120px",
  easing: "ease-in-out",
});
ScrollReveal().reveal(".sponsors img", {
  origin: "left",
  distance: "120px",
  easing: "ease-in-out",
});
ScrollReveal().reveal(".terms-txt", {
  origin: "top",
  distance: "120px",
  easing: "ease-in-out",
});
ScrollReveal().reveal(".terms-img", {
  origin: "bottom",
  distance: "120px",
  easing: "ease-in-out",
});

const form = document.getElementById("form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const formLoad = new FormData(form);
//   const formLoaded = new URLSearchParms(formLoad);

//   fetch(`https://backend.getlinked.ai`, {
//     method: "POST",
//     body: "formLoad",
//   });
// });