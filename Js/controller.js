// import view from "./view.js";

import WebNewsModal from "./WebNewsModal.js";
import WelcomeAnimations from "./welcomAnimations.js";
import MobileSideBar from "./moblileSideBar.js";

import { updateNewsletterList, state } from "./model.js";

export default class Controller {
  constructor() {
    // WebNewsModal.addHandlerRender(newsletterModalOpen); // OpeningNewsletterModal
    WebNewsModal.closeNewsletterWindow(); // Closing Newsletter Modal
    new WelcomeAnimations();
    new MobileSideBar();
  }
}

// const menuOpen = document.querySelector(".menu__button");
// const menuClose = document.querySelector(".close__button");
// const sidebar = document.querySelector(".sidebar");
// const navbar = document.querySelector(".nav__bar");
// // const navAndLogo = document.getElementById("nav");

// // Opeining Menu
// menuOpen.addEventListener("click", function (e) {
//   e.preventDefault();
//   sidebar.classList.add("sidebar__active");
// });

// // Closing Menu
// menuClose.addEventListener("click", function (e) {
//   e.preventDefault();
//   sidebar.classList.remove("sidebar__active");
// });

// // IMPLEMENTING THE SCROLL STICKY
// const navAndLogo = document.getElementById("nav");
// const section1 = document.getElementById("about");
// const initialCords = section1.getBoundingClientRect();
// // console.log(initialCords);

// window.addEventListener("scroll", function (e) {
//   // console.log(window.scrollY);
//   if (window.scrollY > initialCords.top) {
//     navAndLogo.classList.add("nav-sticky");
//   } else {
//     navAndLogo.classList.remove("nav-sticky");
//   }
// });

// // Activating Smooth Scrolling this is done with event bubbling

// navbar.addEventListener("click", function (e) {
//   e.preventDefault();
//   // console.log(e.target);
//   if (e.target.classList.contains("nav__item")) {
//     const id = e.target.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behaviour: "smooth" });
//   }
// });

// MAKING ICONS MOVE

const AllServicesContainer = document.querySelectorAll(
  ".service__and__descripion--container"
);

AllServicesContainer.forEach((AS) =>
  AS.addEventListener("mouseenter", function () {
    const image = AS.querySelector(".service-svg");
    image.classList.add("moved");

    setInterval(() => image.classList.remove("moved"), 1000);
  })
);

// Code logic for slider, use data to get the sliders to show

// SLIDERS

const sliders = document.querySelectorAll(".testimonial__content");
const dots = document.querySelectorAll(".switch_dot");

let currentSlide = 0;
const maxLength = sliders.length;

const arrangeSliders = function () {
  sliders.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`; // Adjust based on currentSlide
  });
  updateDots(); // Update dots after arranging sliders
};

const updateDots = function () {
  dots.forEach((dt, index) => {
    // dt.classList.toggle("switch_dot-active", index === currentSlide); // Active dot management
    if (index === currentSlide) {
      dt.classList.add("switch_dot-active"); // Add class if it's the current slide
    } else {
      dt.classList.remove("switch_dot-active"); // Remove class if it's not the current slide
    }
  });
};

const autoSlide = function () {
  currentSlide = (currentSlide + 1) % maxLength; // Loop back to the first slide
  arrangeSliders(); // Rearrange slides based on new currentSlide
};

// Initial setup
arrangeSliders();
// gettingSlideData();

// Set interval for auto sliding
setInterval(autoSlide, 3000);

// Function to go to specific slide based on dot click
const goToSlide = function (index) {
  currentSlide = index; // Set currentSlide to the clicked dot index
  arrangeSliders(); // Arrange slides based on the new currentSlide
};

// Adding event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToSlide(index); // Navigate to the corresponding slide when a dot is clicked
  });
});

// NEWSLETTER SUBMISSION

const newsletterModalOpen = function (data) {
  updateNewsletterList(data);
  console.log(state.newsletter);
};
