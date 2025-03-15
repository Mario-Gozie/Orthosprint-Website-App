export default class TestimonialSlider {
  constructor() {
    this.sliders = document.querySelectorAll(".testimonial__content");
    this.dots = document.querySelectorAll(".switch_dot");
    this.currentSlide = 0;
    this.maxLength = this.sliders.length;

    this.init();
  }

  init() {
    this.arrangeSliders();
    this.setAutoSlide();
    this.addDotEventListeners();
  }

  arrangeSliders() {
    this.sliders.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - this.currentSlide)}%)`; // Adjust based on currentSlide
    });
    this.updateDots(); // Update dots after arranging sliders
  }

  updateDots() {
    this.dots.forEach((dot, index) => {
      if (index === this.currentSlide) {
        dot.classList.add("switch_dot-active"); // Add class if it's the current slide
      } else {
        dot.classList.remove("switch_dot-active"); // Remove class if it's not the current slide
      }
    });
  }

  autoSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.maxLength; // Loop back to the first slide
    this.arrangeSliders(); // Rearrange slides based on new currentSlide
  }

  setAutoSlide() {
    setInterval(() => this.autoSlide(), 3000); // Set interval for auto sliding
  }

  goToSlide(index) {
    this.currentSlide = index; // Set currentSlide to the clicked dot index
    this.arrangeSliders(); // Arrange slides based on the new currentSlide
  }

  addDotEventListeners() {
    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        this.goToSlide(index); // Navigate to the corresponding slide when a dot is clicked
      });
    });
  }
}
