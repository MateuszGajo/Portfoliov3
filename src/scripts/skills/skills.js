import { globalState } from "../globalState";
import State from "./State";
import Animation from "./Animation";
import Scroll from "./Scroll";
import ScrollControll from "../scrollControl";
import { observers } from "./skillsIntialization";
window.addEventListener("DOMContentLoaded", () => {
  class Skills {
    constructor() {
      this.state = new State();
      this.technologiesObserver = [];
      this.descriptionObserver = [];
      this.delay = this.state.getDelay();
      this.animation = new Animation(this.delay);
      this.scroll = new Scroll(this.delay);
      this.scrollControl = new ScrollControll(".skills");
    }

    subscribe(fn, type) {
      if (type === "description") this.descriptionObserver.push(fn);
      if (type === "technologies") this.technologiesObserver.push(fn);
    }

    runAction(item) {
      this.animation.setAnimation(
        item.selector,
        item.action,
        item.className,
        item.delay,
        item.styles
      );
    }

    subscribeMultiple(func) {
      const array = func(this.delay);
      array.forEach((item) => {
        const fn = () => {
          this.runAction(item);
        };
        this.subscribe(fn, item.type);
      });
    }

    fire(type) {
      if (type === "description")
        this.descriptionObserver.forEach((fn) => {
          fn.call();
        });
      if (type === "technologies")
        this.technologiesObserver.forEach((fn) => {
          fn.call();
        });
    }

    listener() {
      const { windowHeight } = globalState.getState();
      this.animation.addListener();
      this.scroll.listener();
      document.addEventListener("scroll", (e) => {
        const isTechnologiesStart = this.state.getIsTechnologiesStart();
        const isDescriptionStart = this.state.getIsDescriptionStart();
        const skippedAnimation = this.state.getSkippedAnimationStatus();
        const autoScroll = this.state.getAutoScrollIndex();
        const technologiesStart = this.state.getTechnologiesStart();
        const descriptionStart = this.state.getDescriptionStart();
        const technologiesEl = this.state.getTechnologiesEl();
        const techonologiesLine = this.state.getTechnologiesLine();

        const { scrollBack, scrollPosition } = globalState.getState();
        if (
          Math.abs(window.pageYOffset - technologiesStart) < 10 &&
          !isTechnologiesStart &&
          scrollBack
        ) {
          this.fire("technologies");
          this.scroll.modifyScroll();
          this.state.setIsTechnologiesStart(true);
          // this.scrollControl.disableScroll();
        }
        if (
          Math.abs(window.pageYOffset - descriptionStart) < 10 &&
          !isDescriptionStart &&
          scrollBack
        ) {
          this.fire("description");
          this.state.setIsTechnologiesStart(true);
        }
        if (
          Math.abs(window.pageYOffset - technologiesStart) < 10 &&
          !autoScroll &&
          skippedAnimation &&
          scrollPosition === windowHeight
        ) {
          setTimeout(() => {
            techonologiesLine.classList.remove(
              "skills__technologies__line--tranistion"
            );
            const autoScroll = setInterval(() => {
              technologiesEl.scrollBy({
                top: 36,
                behavior: "smooth",
              });
            }, 50);

            this.state.setAutoScroll(autoScroll);
          }, 200);

          this.state.setAutoScroll(true);
          this.state.setStopAnimation(false);
          this.state.setAnimationEnd(false);
        }
      });
    }
  }
  const skills = new Skills();
  skills.subscribeMultiple(observers);
  skills.listener();
});
