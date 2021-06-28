import State from "./State";
import { globalState } from "../globalState";
import ScrollControl from "../scrollControl";
export default class Animation {
  constructor(delay) {
    this.state = new State();
    this.delay = delay;
    this.scrollControl = new ScrollControl(".skills");
  }

  setAnimation(selector, type, className, time = 0, styles) {
    let el;
    if (selector.className) {
      el = selector;
    } else el = document.querySelector(selector);

    switch (type) {
      case "add": {
        return setTimeout(() => {
          el.classList.add(className);
        }, time);
      }
      case "remove": {
        return setTimeout(() => {
          el.classList.remove(className);
        }, time);
      }
      case "style": {
        return setTimeout(() => {
          styles.forEach((item) => {
            const { key, value } = item;
            el.style[key] = value;
          });
        }, time);
      }
    }
  }

  scrollSection({ scrollCenter, lastElementPosition, e }) {
    const { windowHeight } = globalState.getState();

    const i = this.state.getIndex();
    const animationEnded = this.state.getAnimationEnded();
    const skillsItemsSorted = this.state.skillItemsSort();
    const itemPoint = this.state.getItemPoint();

    const itemPointHeight = itemPoint.offsetHeight;
    const lineScroll = windowHeight / 1.2 + e.target.scrollTop;
    const elementCenter =
      skillsItemsSorted[i].offsetTop + skillsItemsSorted[i].offsetHeight / 2;
    const triggerPoint = elementCenter - itemPointHeight / 2 - windowHeight / 3;
    const newScrollPosition =
      scrollCenter - skillsItemsSorted[i].offsetHeight / 2 + windowHeight / 3;

    if (!animationEnded) {
      if (lineScroll > lastElementPosition) {
        this.scrolling({ newScrollPosition, lastElementPosition });
      } else if (scrollCenter > triggerPoint) {
        this.activateItem({ newScrollPosition, triggerPoint });
      } else {
        this.drawLine({ newScrollPosition, lineScroll });
      }
    }
  }

  drawLine({ newScrollPosition, lineScroll }) {
    const technologiesLineOverlay = this.state.getTechnologiesLineOverlay();
    const techonologiesLine = this.state.getTechnologiesLine();

    technologiesLineOverlay.style.height = newScrollPosition + "px";
    techonologiesLine.style.height = lineScroll + "px";
  }

  endOfItems({ lastElementPosition, marginHeight }) {
    const skillsItemsSorted = this.state.skillItemsSort();
    const i = this.state.getIndex();
    const autoScroll = this.state.getAutoScrollIndex();
    const autoScrollTimeout = this.state.getAutoScrollTimeout();
    const technologiesLineOverlay = this.state.getTechnologiesLineOverlay();

    technologiesLineOverlay.style.height =
      lastElementPosition - marginHeight + "px";
    this.setAnimation(
      skillsItemsSorted[i],
      "add",
      "skills__technologies__wrapper__container--active",
      0
    );

    clearInterval(autoScroll);
    clearTimeout(autoScrollTimeout);

    this.scrollControl.disableScroll();
    this.state.setIndex(0);
    this.state.setAutoScroll(null);
    this.state.setStopAnimation(true);
    this.state.setAnimationEnd(true);

    setTimeout(this.scrollNextSection.bind(this), 1500);
  }

  scrollNextSection() {
    const { windowHeight, scrollPosition } = globalState.getState();
    const skippedAnimation = this.state.getSkippedAnimationStatus();

    if (!skippedAnimation) {
      const newScrollPosition = scrollPosition + windowHeight;

      window.scroll({
        top: newScrollPosition,
        left: 0,
        behavior: "smooth",
      });

      globalState.changeState({
        ...globalState.getState(),
        scrollPosition: newScrollPosition,
        allowScroll: true,
      });
      this.state.setSkipAnimation(true);

      setTimeout(this.resetItemPosition.bind(this), 250);
    }
  }

  resetItemPosition() {
    const { windowHeight } = globalState.getState();

    const technologiesLineOverlay = this.state.getTechnologiesLineOverlay();
    const techonologiesLine = this.state.getTechnologiesLine();
    const skillsItemsSorted = this.state.skillItemsSort();
    const technologiesEl = this.state.getTechnologiesEl();

    technologiesEl.scrollTo(0, 0);

    technologiesLineOverlay.style.height =
      windowHeight / 2 -
      skillsItemsSorted[0].offsetHeight / 2 +
      windowHeight / 3 +
      "px";
    techonologiesLine.style.height = windowHeight / 1.2 + "px";

    skillsItemsSorted.forEach((item) => {
      item.classList.remove("skills__technologies__wrapper__container--active");
      item.classList.remove(
        "skills__technologies__wrapper__container--deactive"
      );
    });
    skillsItemsSorted[0].classList.add(
      "skills__technologies__wrapper__container--active"
    );
  }

  scrolling({ newScrollPosition, lastElementPosition }) {
    const technologiesLineOverlay = this.state.getTechnologiesLineOverlay();
    const marginEl = this.state.getMarginEl();
    const marginHeight = marginEl.offsetHeight;
    const techonologiesLine = this.state.getTechnologiesLine();

    if (newScrollPosition > lastElementPosition) {
      this.endOfItems({ lastElementPosition, marginHeight });
    } else technologiesLineOverlay.style.height = newScrollPosition + "px";

    techonologiesLine.style.height = lastElementPosition - marginHeight + "px";
  }

  activateItem({ newScrollPosition, triggerPoint }) {
    const technologiesLineOverlay = this.state.getTechnologiesLineOverlay();
    const isUserScroll = this.state.getIsUserScroll();
    const skillsItemsSorted = this.state.skillItemsSort();
    const i = this.state.getIndex();
    const last = this.state.getLast();
    const { windowHeight } = globalState.getState();

    technologiesLineOverlay.style.height = triggerPoint + windowHeight / 3;
    +"px";

    if (isUserScroll) {
      this.setAnimation(
        skillsItemsSorted[i],
        "add",
        "skills__technologies__wrapper__container--active",
        1000
      );
      skillsItemsSorted[i].classList.add(
        "skills__technologies__wrapper__container--active"
      );
    } else {
      skillsItemsSorted[i].classList.add(
        "skills__technologies__wrapper__container--active"
      );
    }

    const index = this.setAnimation(technologiesLineOverlay, "style", "", 300, [
      {
        key: "height",
        value: newScrollPosition + "px",
      },
    ]);

    const date = new Date();
    const state = { index, date };
    this.state.setAnimation(state);

    if (i < last - 1) this.state.setIndex(i + 1);
  }

  addInterval({ scrollCenter, lastElementPosition }) {
    const isUserScroll = this.state.getIsUserScroll();
    if (isUserScroll && scrollCenter < lastElementPosition) {
      const autoScrollTimeout = setTimeout(
        this.addAutoScrolling.bind(this),
        1200
      );
      this.state.setAutoScrollTimeout(autoScrollTimeout);
    }
    this.state.setUserScroll(false);
  }

  addAutoScrolling() {
    const techonologiesLine = this.state.getTechnologiesLine();
    const technologiesEl = this.state.getTechnologiesEl();

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
  }

  hidenLastElement({ scrollCenter }) {
    const i = this.state.getIndex();
    const skillsItemsSorted = this.state.skillItemsSort();
    const { windowHeight } = globalState.getState();
    if (i > 0) {
      const previousElementCenter =
        skillsItemsSorted[i - 1].offsetTop +
        skillsItemsSorted[i - 1].offsetHeight / 2;

      if (scrollCenter > previousElementCenter + windowHeight / 2.75) {
        skillsItemsSorted[i - 1].classList.add(
          "skills__technologies__wrapper__container--deactive"
        );
      }
    }
  }

  clearAsyncFun() {
    const animation = this.state.getAnimation();
    const isUserScroll = this.state.getIsUserScroll();
    const autoScrollTimeout = this.state.getAutoScrollTimeout();
    const autoScroll = this.state.getAutoScrollIndex();

    const animationIndex = animation.index;
    const animationDate = animation.date ? animation.date.getTime() : 0;
    const timeDifferences = new Date().getTime() - animationDate;

    if (animationIndex && timeDifferences < 300) {
      clearTimeout(animationIndex);
    }

    if (isUserScroll) {
      clearInterval(autoScroll);
      clearTimeout(autoScrollTimeout);

      this.state.setAutoScroll(null);
    }
  }

  scroll(e) {
    const { windowHeight } = globalState.getState();
    const skillsItemsSorted = this.state.skillItemsSort();
    const last = this.state.getLast();
    const stoppedAnimation = this.state.getStoppedAnimation();
    const skippedAnimation = this.state.getSkippedAnimationStatus();

    if (!stoppedAnimation) {
      const scrollCenter = windowHeight / 2 + e.target.scrollTop;
      const lastElementPosition = skillsItemsSorted[last - 1].offsetTop;

      if (!skippedAnimation) this.clearAsyncFun();

      this.scrollSection({
        scrollCenter,
        lastElementPosition,
        e,
      });

      this.hidenLastElement({ scrollCenter });

      if (!skippedAnimation)
        this.addInterval({ scrollCenter, lastElementPosition });
    }
  }

  blockScroll() {
    const { scrollPosition } = globalState.getState();

    const technologiesStart = this.state.getTechnologiesStart();
    const skippedAnimation = this.state.getSkippedAnimationStatus();

    if (scrollPosition === technologiesStart && !skippedAnimation) {
      globalState.changeState({
        ...globalState.getState(),
        allowScroll: false,
      });
    }
  }

  addInitialAutoScrolling() {
    const techonologiesLine = this.state.getTechnologiesLine();
    const skippedAnimation = this.state.getSkippedAnimationStatus();
    const technologiesStart = this.state.getTechnologiesStart();

    techonologiesLine.classList.remove(
      "skills__technologies__line--tranistion"
    );
    const { scrollPosition } = globalState.getState();
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
      this.state.setAutoScroll(autoScroll);
    }
    this.state.setAnimationStarted(true);
  }

  addListener() {
    const technologiesEl = this.state.getTechnologiesEl();

    technologiesEl.addEventListener("scroll", this.scroll.bind(this));

    setTimeout(this.addInitialAutoScrolling.bind(this), 2600 + this.delay);
    setTimeout(this.blockScroll.bind(this), 2650 + this.delay);
  }
}
