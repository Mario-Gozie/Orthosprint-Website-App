import view from "./view.js";

const menuOpen = document.querySelector(".menu__button");
const menuClose = document.querySelector(".close__button");
const sidebar = document.querySelector(".sidebar");
const navbar = document.querySelector(".nav__bar");

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

// Activating Smooth Scrolling this is done with event bubbling

navbar.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e.target);
  if (e.target.classList.contains("nav__item")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behaviour: "smooth" });
  }
});

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

// NEWSLETTER SUBMISSION

const newsletterInput = document.querySelector(".newsletter__input");
const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Checking if the input value is Empty.

  if (newsletterInput.value.trim() === "") {
    newsletterInput.value = "";
    alert("You have not given us any email");
  } else {
    newsletterInput.value = "";
    alert("We will now keep you updated with our latest offers");
  }
});

// MAKING ICONS MOVE

const svg = document.querySelectorAll(".service-svg");

const hoverBigScreen = function () {
  if (window.innerWidth >= 600) {
    svg.forEach((sv) =>
      sv.addEventListener("mouseenter", function (e) {
        setTimeout(() => sv.classList.add("moved"), 1000);
      })
    );

    svg.forEach((sv) =>
      sv.addEventListener("mouseleave", function (e) {
        setTimeout(() => sv.classList.remove("moved"), 1000);
      })
    );
  }
};

hoverBigScreen();

// Code logic for slider, use data to get the sliders to show

// SLIDERS

const sliders = document.querySelectorAll(".testimonial__content");

let currentSlide = 0;
const maxLength = sliders.length;

// console.log(currentSlide, maxLength);

const arrangeSliders = function () {
  sliders.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * i}%)`;
  });
};

arrangeSliders();

console.log(sliders);

/// WORKING ON THE SLIDER

const autoSlide = function () {
  if (currentSlide < maxLength) {
    sliders.forEach((sl, i) => {
      sl.style.transform = `translateX(${100 * (i - currentSlide)}%)`;

      console.log(currentSlide);
      console.log(sl);
    });
  }

  currentSlide++;

  if (currentSlide >= maxLength) {
    currentSlide = 0;
  }
};

const sliding = setInterval(autoSlide, 3000);

sliding();
// const sliders = document.querySelectorAll(".testimonial__content");
// let currentIndex = 0;

// function showNextSlide() {
//   // Move all slides off-screen
//   sliders.forEach((slide) => {
//     slide.style.transform = "translateX(100%)"; // Move off-screen
//   });

//   // Show the current slide
//   sliders[currentIndex].style.transform = "translateX(0)"; // Bring current slide into view

//   // Update the index for the next slide
//   currentIndex = (currentIndex + 1) % sliders.length; // Loop back to the first slide
// }

// // Initially show the first slide
// showNextSlide();

// // Change slides every 2 seconds
// setInterval(showNextSlide, 2000);
