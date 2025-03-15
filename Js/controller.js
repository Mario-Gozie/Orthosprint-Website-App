import WelcomeAnimations from "./welcomAnimations.js";
import MobileSideBar from "./moblileSideBar.js";
import NewsletterView from "./newsletter.js";
import ContactView from "./contactView.js";
import TestimonialSlider from "./testimonialSlider.js";
import { updateNewsletterList, state } from "./model.js";

export default class Controller {
  constructor() {
    new TestimonialSlider();
    new WelcomeAnimations();
    new MobileSideBar();
    new ContactView(this);
    new NewsletterView(this);
  }

  newsletterController(emailAddress) {
    // push the email address into the newsletter array.
    updateNewsletterList(emailAddress);
    console.log(state.newsletter);
  }
}
