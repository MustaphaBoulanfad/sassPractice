const showNavbar = document.querySelector(".show-nav");
const navbar = document.querySelector("header nav");
const navbarLinks = navbar.querySelectorAll("li a");
const holderSlider = document.querySelector(".slider-container .holder");
const navigationSlider = document.querySelectorAll(".bullets li");
let sliderIndex = 0;
let direction = document.querySelector("html").getAttribute("dir");

showNavbar.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

navigationSlider.forEach((navigation) => {
  navigation.addEventListener("click", () => {
    navigationSlider.forEach((nav) => {
      nav.classList.remove("active");
    });
    navigation.classList.add("active");
    let index = navigation.getAttribute("data-index");

    holderSlider.style.transform =
      direction === "ltr"
        ? `translateX(-${33.33 * index}%)`
        : `translateX(${33.33 * index}%)`;
  });
});

let icons = document.querySelectorAll("a i");
if (direction === "rtl") {
  icons.forEach((icon) => {
    icon.classList.replace("fa-angle-double-right", "fa-angle-double-left");
  });
} else {
  icons.forEach((icon) => {
    icon.classList.replace("fa-angle-double-left", "fa-angle-double-right");
  });
}

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.getAttribute("id") === "fullWidth") {
      document.querySelectorAll(".container").forEach((container) => {
        container.classList.toggle("fullWidth");
      });
    } else if (link.getAttribute("id") === "changeLang") {
      direction === "ltr"
        ? (window.location.href = "../index-rtl.html")
        : (window.location.href = "../index.html");
    }
  });
});
