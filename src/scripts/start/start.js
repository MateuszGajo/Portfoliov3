import observers from "./startIntialization";
import Animation from "./Animation";

window.addEventListener("DOMContentLoaded", () => {
  class Subject {
    constructor() {
      this.observers = [];
      this.animation = new Animation(".start");
      this.animation.addListeners();
    }

    subscribeMultiple(array) {
      array.forEach((item) => {
        const fn = () => {
          this.runAction(item);
        };
        this.subscribe(fn);
      });
    }

    runAction(item) {
      switch (item.action) {
        case "setAnimation":
          return this.animation.toggleClass(
            item.selector,
            item.type,
            item.className,
            item.delay
          );
        case "shuffleText":
          return this.animation.shuffleText(
            item.selector,
            item.time,
            item.delay
          );
        case "scrollListener":
      }
    }

    subscribe(fn) {
      this.observers.push(fn);
    }

    fire() {
      this.observers.forEach((fn) => {
        fn.call();
      });
    }
  }

  const subject = new Subject();

  subject.subscribeMultiple(observers);
  subject.fire();
});
