import { globalState } from "../globalState";
import State from "./State";
export default class Scroll {
  constructor(delay) {
    this.sectionState = new State();
    this.listener();
    this.delay = delay;
  }

  modifyScroll() {
    setTimeout(() => {
      const techonologiesLine = this.sectionState.getTechnologiesLine();
      techonologiesLine.classList.remove(
        "skills__technologies__line--tranistion"
      );

      const { scrollPosition } = globalState.getState();
      const technologiesStart = this.sectionState.getTechnologiesStart();
      const skippedAnimation = this.sectionState.getSkippedAnimationStatus();
      const technologiesEl = this.sectionState.getTechnologiesEl();
      if (
        Math.abs(scrollPosition - technologiesStart) < 10 &&
        !skippedAnimation
      ) {
        const autoScroll = setInterval(() => {
          technologiesEl.scrollBy({
            top: 36,
            behavior: "smooth",
          });
        }, 50);
        this.sectionState.setAutoScroll(autoScroll);
      }
      this.sectionState.setAnimationStarted(true);
    }, 2600 + this.delay);

    setTimeout(() => {
      const technologiesStart = this.sectionState.getTechnologiesStart();
      const { scrollPosition } = globalState.getState();
      const skippedAnimation = this.sectionState.getSkippedAnimationStatus();
      if (scrollPosition === technologiesStart && !skippedAnimation) {
        globalState.changeState({
          ...globalState.getState(),
          allowScroll: false,
        });
      }
    }, 2650 + this.delay);
  }

  wheelSkipSection() {
    const skippedAnimation = this.sectionState.getSkippedAnimationStatus();
    const animationStarted = this.sectionState.getAnimationStarted();
    const technologiesEl = this.sectionState.getTechnologiesEl();
    const technologiesLineOverlay =
      this.sectionState.getTechnologiesLineOverlay();
    const skillsItemsSorted = this.sectionState.skillItemsSort();
    const techonologiesLine = this.sectionState.getTechnologiesLine();
    const { windowHeight } = globalState.getState();
    if (!skippedAnimation && !animationStarted) {
      this.sectionState.setSkipAnimation(true);
    } else if (skippedAnimation) {
      const autoScroll = this.sectionState.getAutoScrollIndex();
      clearInterval(autoScroll);
      this.sectionState.setAutoScroll(null);
      setTimeout(() => {
        technologiesEl.scrollTo(0, 0);
        technologiesLineOverlay.style.height =
          windowHeight / 2 -
          skillsItemsSorted[0].offsetHeight / 2 +
          windowHeight / 3 +
          "px";
        techonologiesLine.style.height = windowHeight / 1.2 + "px";
        skillsItemsSorted.forEach((item) => {
          item.classList.remove(
            "skills__technologies__wrapper__container--active"
          );
          item.classList.remove(
            "skills__technologies__wrapper__container--deactive"
          );
        });
        skillsItemsSorted[0].classList.add(
          "skills__technologies__wrapper__container--active"
        );
        this.sectionState.setIndex(0);
        this.sectionState.setStopAnimation(true);
      }, 300);
    }
  }

  listener() {
    const skillsSection = this.sectionState.getSkillsSection();
    const technologiesEl = this.sectionState.getTechnologiesEl();
    const techonologiesLine = this.sectionState.getTechnologiesLine();
    skillsSection.addEventListener("wheel", this.wheelSkipSection.bind(this));
    technologiesEl.addEventListener(
      "touchmove",
      this.wheelSkipSection.bind(this)
    );

    technologiesEl.addEventListener("wheel", (e) => {
      techonologiesLine.classList.add("skills__technologies__line--tranistion");
      this.sectionState.setUserScroll(true);
    });
  }
}
