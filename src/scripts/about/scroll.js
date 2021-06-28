import State from "./state";
export default class Scroll {
  constructor() {
    this.state = new State();
  }
  wheelSkipSection() {
    const blockAnimation = this.state.getBlockAnimation();
    const aboutContainer = this.state.getAboutContainer();
    const titleEl = this.state.getTitleEl();
    if (!blockAnimation) {
      setTimeout(() => {
        const interval = this.state.getInterval();
        clearInterval(interval);

        aboutContainer.classList.add("about__container--active");
        titleEl.style.opacity = 0;
      }, 250);
      this.state.setSkippedAnimation(true);
    }
  }
  listener() {
    const aboutSection = this.state.getAboutSection();
    aboutSection.addEventListener("wheel", this.wheelSkipSection.bind(this));
    aboutSection.addEventListener(
      "touchmove",
      this.wheelSkipSection.bind(this)
    );
  }
}
