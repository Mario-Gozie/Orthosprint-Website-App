export default class WelcomeAnimations {
  constructor() {
    this.home = document.querySelector(".home__wrapper");
    this.homeP = home.getElementsByTagName("p");
    this.homeH = home.getElementsByTagName("h1");
    this.homeA = home.getElementsByTagName("a");

    this.welcomeArray = [...this.homeP, ...this.homeH, ...this.homeA];

    this.sections = document.querySelectorAll(".section"); // Select all sections
    console.log(this.sections);
    // Function Call
    this.homeDisplay(this.welcomeArray);
    this.ObserveIntersection(this.sections);
  }

  homeDisplay(array) {
    window.addEventListener("load", () => {
      array.forEach((la) => {
        la.style.opacity = 1;
        la.style.transform = "translateX(0)";
      });
    });
  }

  // Observation Function
  ObserveIntersection(sections) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );
    sections.forEach((section) => {
      observer.observe(section); // Observe each section
    });
  }
}
