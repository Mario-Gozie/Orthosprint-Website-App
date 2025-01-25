import view from "./view.js";
import { openNewsletterWindow, closeNewsletterWindow } from "./modalWindow.js";

const menuOpen = document.querySelector(".menu__button");
const menuClose = document.querySelector(".close__button");
const sidebar = document.querySelector(".sidebar");
const navbar = document.querySelector(".nav__bar");
// const navAndLogo = document.getElementById("nav");

// IMPLEMENTING REVEALING OF HOME PAGE

const home = document.querySelector(".home__wrapper");
const homeP = home.getElementsByTagName("p");
const homeH = home.getElementsByTagName("h1");
const homeA = home.getElementsByTagName("a");

window.addEventListener("load", function () {
  const loadArray = [...homeP, ...homeH, ...homeA];
  loadArray.forEach((la) => {
    la.style.opacity = 1;
    la.style.transform = "translateX(0)";
  });
});

// Opeining Menu
menuOpen.addEventListener("click", function (e) {
  e.preventDefault();
  sidebar.classList.add("sidebar__active");
});

// Closing Menu
menuClose.addEventListener("click", function (e) {
  e.preventDefault();
  sidebar.classList.remove("sidebar__active");
});

// IMPLEMENTING THE SCROLL STICKY
const navAndLogo = document.getElementById("nav");
const section1 = document.getElementById("about");
const initialCords = section1.getBoundingClientRect();
// console.log(initialCords);

window.addEventListener("scroll", function (e) {
  // console.log(window.scrollY);
  if (window.scrollY > initialCords.top) {
    navAndLogo.classList.add("nav-sticky");
  } else {
    navAndLogo.classList.remove("nav-sticky");
  }
});

// Activating Smooth Scrolling this is done with event bubbling

navbar.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e.target);
  if (e.target.classList.contains("nav__item")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behaviour: "smooth" });
  }
});

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

// implementing the click function for founder

const founderBtn = document.querySelectorAll(".founder__btn");

founderBtn.forEach((fb) => {
  fb.addEventListener("click", function (e) {
    e.preventDefault();
    const targetData = fb.dataset.tab;

    // Check if the button was previously active
    const wasActive = fb.classList.contains("founder__active");
    // console.log(wasActive);

    // Remove active classes from all buttons and descriptions
    founderBtn.forEach((fn) => fn.classList.remove("founder__active"));
    document
      .querySelectorAll(`.hidden`)
      .forEach((hi) => hi.classList.remove("active"));

    // If the button was previously active, remove both classes
    if (wasActive) {
      fb.classList.remove("founder__active");
      document
        .querySelector(`.description__${targetData}`)
        .classList.remove("active");
    } else {
      // If it was not active, add the active classes
      fb.classList.add("founder__active");
      document
        .querySelector(`.description__${targetData}`)
        .classList.add("active");
    }
  });
});

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

// const newsletterInput = document.querySelector(".newsletter__input");
// const newsletterForm = document.getElementById("newsletterForm");
// const modalWindow = document.getElementById("modal-container");
// const modalBtn = document.querySelector(".modal-button"); // Fixed selector

// const form = document.querySelector(".contact_form");

// const openPopup = function () {
//   modalWindow.classList.add("open-popup"); // Fixed class name
// };

// newsletterForm.addEventListener("submit", function (e) {
//   e.preventDefault(); // Checking if the input value is Empty.

//   if (newsletterInput.value.trim() === "") {
//     alert("You have not given us any email");
//   } else {
//     // newsletterInput.value = "";
//     openPopup();
//   }
// });

// // Close modal on button click
// modalBtn.addEventListener("click", function () {
//   modalWindow.classList.remove("open-popup");
// });

///// ACTIVATING MODAL WINDOW

const init = function () {
  console.log("hello");
  openNewsletterWindow();
  closeNewsletterWindow();
};

init();
