import { globalState } from "./globalState";
window.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about");
  const titleEl = document.querySelector(".about__title__text");

  const aboutStartPosition = aboutSection.offsetTop;

  const aboutModule = (() => {
    let state = {
      isSectionStart: false,
    };

    const pub = {};

    pub.changeState = (newState) => {
      state = newState;
    };

    pub.getState = () => state;

    return pub;
  })();

  const setAnimation = (el, type, className, time = 0, styles) => {
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
  };

  const startSection = () => {
    setAnimation(titleEl, "add", "opacity-visible", 370);
    setAnimation(titleEl, "add", "about__title__text--active", 600);
  };

  document.addEventListener("scroll", () => {
    const { scrollBack } = globalState.getState();
    const { isSectionStart } = aboutModule.getState();
    if (
      window.pageYOffset === aboutStartPosition &&
      scrollBack &&
      !isSectionStart
    ) {
      aboutModule.changeState({
        ...aboutModule.getState(),
        isSectionStart: true,
      });
      startSection();
    }
  });
});
