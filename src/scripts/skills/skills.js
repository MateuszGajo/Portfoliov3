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

    startTechnologiesSection() {
      this.fire("technologies");
      this.scroll.modifyScroll();
      this.state.setIsTechnologiesStart(true);
    }

    startDescriptionSection() {
      this.fire("description");
      this.state.setIsTechnologiesStart(true);
    }

    onScroll() {
      const { windowHeight, scrollBack, scrollPosition } =
        globalState.getState();

      const isTechnologiesStart = this.state.getIsTechnologiesStart();
      const isDescriptionStart = this.state.getIsDescriptionStart();
      const skippedAnimation = this.state.getSkippedAnimationStatus();
      const autoScroll = this.state.getAutoScrollIndex();
      const technologiesStart = this.state.getTechnologiesStart();
      const descriptionStart = this.state.getDescriptionStart();

      const isUserOnTechnologiesSection =
        Math.abs(window.pageYOffset - technologiesStart) < 10;
      const isUserOnDescriptionSection =
        Math.abs(window.pageYOffset - descriptionStart) < 10;

      if (isUserOnTechnologiesSection && !isTechnologiesStart && scrollBack) {
        this.startTechnologiesSection();
      }
      if (isUserOnDescriptionSection && !isDescriptionStart && scrollBack) {
        this.startDescriptionSection();
      }
      if (
        isUserOnTechnologiesSection &&
        !autoScroll &&
        skippedAnimation &&
        scrollPosition === windowHeight
      ) {
        this.animation.addAutoScrolling();
        this.state.setAutoScroll(true);
        this.state.setStopAnimation(false);
        this.state.setAnimationEnd(false);
      }
    }

    listener() {
      this.animation.addListener();
      this.scroll.listener();
      document.addEventListener("scroll", this.onScroll.bind(this));
    }
  }

  const skills = new Skills();
  skills.subscribeMultiple(observers);
  skills.listener();
});
