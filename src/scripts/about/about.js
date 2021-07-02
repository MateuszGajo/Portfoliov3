import Animation from "./Animation";
import observers from "./aboutInitialization";
import { globalState } from "../globalState";
import State from "./state";
import Scroll from "./scroll";
window.addEventListener("DOMContentLoaded", () => {
  class About {
    constructor() {
      this.observers = [];
      this.animation = new Animation();
      this.state = new State();
      this.scroll = new Scroll();
    }

    subscribeMultiple(observers) {
      observers.forEach((item) => {
        const fn = () => {
          this.runAction(item);
        };
        this.subscribe(fn);
      });
    }
    subscribe(item) {
      this.observers.push(item);
    }

    runAction(item) {
      this.animation.setAnimation(
        item.selector,
        item.type,
        item.className,
        item.delay
      );
    }

    fire() {
      this.observers.forEach((fn) => {
        fn.call();
      });
    }

    onScroll() {
      const { scrollBack } = globalState.getState();
      const isSectionStart = this.state.getIsSectionStart();
      const aboutStartPosition = this.state.getAboutStartPosition();
      const isUserOnSection =
        Math.abs(window.pageYOffset - aboutStartPosition) < 10;

      if (isUserOnSection && scrollBack && !isSectionStart) {
        this.state.setIsSectionStart(true);
        this.fire();
        setTimeout(() => {
          const skippedAnimation = this.state.getSkippedAnimation();
          if (!skippedAnimation) {
            const interval = setInterval(() => {
              this.animation.scrollSection(0.4);
            }, 100);
            this.state.setInterval(interval);
          }
        }, 800);
      }
    }

    listener() {
      this.scroll.listener();
      document.addEventListener("scroll", this.onScroll.bind(this));
    }
  }

  const about = new About();
  about.subscribeMultiple(observers);
  about.listener();
});
