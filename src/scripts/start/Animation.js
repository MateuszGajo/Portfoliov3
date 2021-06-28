import { globalState } from "../globalState";
export default class Animation {
  constructor(selector) {
    this.lastPos = 0;
    this.startSection = document.querySelector(selector);
    this.isIcons = false;
  }

  toggleClass(selector, type, className, time = 0) {
    const el = document.querySelector(selector);
    switch (type) {
      case "add": {
        setTimeout(() => {
          el.classList.add(className);
        }, time);
        break;
      }
      case "remove": {
        setTimeout(() => {
          el.classList.remove(className);
        }, time);
        break;
      }
    }
  }

  shuffleText(selector, time, delay) {
    setTimeout(() => {
      this.shuffleTextAnimation(selector, time);
    }, delay);
  }

  shuffleTextAnimation(selector, time) {
    const el = document.querySelector(selector);

    const initialLetter = el.textContent;
    const interval = setInterval(
      (function shuffle() {
        el.textContent = String.fromCharCode(
          33 + Math.round(Math.random() * 99)
        );
        return shuffle;
      })(),
      1
    );

    setTimeout(() => {
      clearInterval(interval);
      el.textContent = initialLetter;
      if (initialLetter === "o") {
        document
          .querySelector(".start__downbar__container--author")
          .classList.add("start__downbar__container--move-away");

        const children = document.querySelectorAll(".start__content__p");

        for (let i = 0; i < children.length; i++) {
          setTimeout(this.titleAnimation(children, i), 1000 + i * 200);
        }
      }
    }, time * 200);
  }

  titleAnimation(children, i) {
    children[i].classList.add("start__content_p--move-up");
    return this.moveLeft(children[i], i);
  }

  moveLeft(el, index) {
    setTimeout(() => {
      el.classList.add("start__content_p--mov-left");
    }, 100);

    if (index === 2)
      setTimeout(this.displayIconAfterAnimations.bind(this), 150);
  }

  displayIconAfterAnimations() {
    const sideIcons = document.querySelectorAll(".side-bar__icon");

    document.querySelector(".start__icon").classList.add("opacity-visible");
    if (!this.isIcons) {
      this.isIcons = true;

      for (let i = 0; i < sideIcons.length; i++) {
        this.displayIcon(sideIcons[i], i);
      }

      setTimeout(this.scrollNextSection, sideIcons.length * 250 + 1000);
    }
  }

  scrollNextSection() {
    const { windowHeight, scrollPosition } = globalState.getState();
    const newScrollPosition = scrollPosition + windowHeight;

    window.scroll({
      top: newScrollPosition,
      left: 0,
      behavior: "smooth",
    });

    globalState.changeState({
      ...globalState.getState(),
      scrollPosition: newScrollPosition,
    });
  }

  displayIcon(el, index) {
    setTimeout(() => {
      el.classList.add("side-bar__icon--intitial");
    }, index * 250);
  }

  wheel(e) {
    const sideIcons = document.querySelectorAll(".side-bar__icon");
    if (e.deltaY > 0 && !this.isIcons) {
      this.isIcons = true;
      for (let i = 0; i < sideIcons.length; i++) {
        this.displayIcon(sideIcons[i], i);
      }
    }
  }

  touchEnd() {
    const sideIcons = document.querySelectorAll(".side-bar__icon");
    if (lastPos - e.changedTouches[0].pageY > 10 && !this.isIcons) {
      this.isIcons = true;
      for (let i = 0; i < sideIcons.length; i++) {
        this.displayIcon(sideIcons[i], i);
      }
    }
  }

  touchStart(e) {
    this.lastPos = e.changedTouches[0].pageY;
  }

  addListeners() {
    this.startSection.addEventListener(
      "touchstart",
      this.touchStart.bind(this)
    );
    this.startSection.addEventListener("touchend", this.touchEnd.bind(this));
    this.startSection.addEventListener("wheel", this.wheel.bind(this));
  }
}
