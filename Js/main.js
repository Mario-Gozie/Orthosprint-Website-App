import Controller from "./controller.js";

document.addEventListener("DOMContentLoaded", () => {
  new Controller(); // Initialize the controller

  // window.addEventListener("load", () => {
  //   if (window.location.hash) {
  //     // Scroll to the top of the page
  //     window.scrollTo(0, 0);

  //     // Optionally, remove the hash from the URL
  //     history.replaceState(null, null, " ");
  //   }
  // });
});
