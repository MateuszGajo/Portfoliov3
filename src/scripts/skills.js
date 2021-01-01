import { globalState } from "./globalState";
window.addEventListener("DOMContentLoaded", () => {
  const skillsDescriptionTitleEl = document.querySelector(
    ".skills__description__title"
  );
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const skillsSection = document.querySelector(".skills");
  const SkillsDescriptionTextEl = document.querySelector(
    ".skills__description__text"
  );
  const techonologiesLine = document.querySelector(
    ".skills__technologies__line"
  );
  const technologiesLineOverlay = document.querySelector(
    ".skills__technologies__line__overlay"
  );
  const technologiesEl = document.querySelector(".skills__technologies");
  const skillsItems = document.querySelectorAll(
    ".skills__technologies__wrapper__container"
  );
  const itemPoint = document.querySelector(
    ".skills__technologies__wrapper__container__point__circle--big"
  );
  const marginEl = document.querySelector(".skills__technologies__margin");

  const technologiesStart = technologiesEl.offsetTop;

  const skillsItemsSorted = [].map
    .call(skillsItems, function (el) {
      return el;
    })
    .sort((a, b) => {
      return a.offsetTop - b.offsetTop;
    });

  const skillsModule = (() => {
    let state = {
      isSectionStart: false,
      i: 0,
      last: skillsItemsSorted.length,
      animation: {
        index: null,
        date: null,
      },
      autoScrollTimeout: null,
      autoScroll: null,
      isUserScroll: false,
    };
    const pub = {};

    pub.changeState = (newState) => {
      state = newState;
    };
    pub.getState = () => {
      return state;
    };

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

  let autoScroll;

  const startSection = () => {
    setAnimation(skillsDescriptionTitleEl, "add", "opacity-visible", 200);

    setAnimation(skillsDescriptionTitleEl, "style", "", 600, [
      {
        key: "left",
        value: "20%",
      },
      {
        key: "bottom",
        value: `${windowHeight - SkillsDescriptionTextEl.offsetTop + 10}px`,
      },
      {
        key: "transform",
        value: `translateX(-50%) scale(1)`,
      },
    ]);

    setAnimation(
      SkillsDescriptionTextEl,
      "add",
      "skills__description__text--active",
      1800
    );
    setAnimation(
      SkillsDescriptionTextEl,
      "add",
      "skills__description__text--active",
      1800
    );
    setAnimation(
      skillsItemsSorted[0],
      "add",
      "skills__technologies__wrapper__container--active",
      2100
    );
    setAnimation(
      techonologiesLine,
      "add",
      "skills__technologies__line--active",
      3000
    );
    setAnimation(technologiesLineOverlay, "style", "", 3100, [
      {
        key: "height",
        value: windowHeight / 2 + "px",
      },
    ]);

    setTimeout(() => {
      techonologiesLine.classList.remove(
        "skills__technologies__line--tranistion"
      );
      const autoScroll = setInterval(() => {
        technologiesEl.scrollBy({
          top: 10,
          behavior: "smooth",
        });
      }, 80);
      skillsModule.changeState({ ...skillsModule.getState(), autoScroll });
    }, 4400);

    setTimeout(() => {
      enableScroll();
      globalState.changeState({
        ...globalState.getState(),
        allowScroll: false,
      });
    }, 4450);
  };

  technologiesEl.addEventListener("wheel", (e) => {
    techonologiesLine.classList.add("skills__technologies__line--tranistion");
    skillsModule.changeState({
      ...skillsModule.getState(),
      isUserScroll: true,
    });
  });

  const clearAsyncFun = ({
    animation,
    isUserScroll,
    autoScrollTimeout,
    autoScroll,
  }) => {
    if (
      animation.index &&
      new Date().getTime() - animation.date.getTime() < 300
    ) {
      clearTimeout(animation.index);
    }

    if (isUserScroll) {
      clearInterval(autoScroll);
      clearTimeout(autoScrollTimeout);
    }
  };

  const scrollSection = ({
    scrollCenter,
    lastElementPosition,
    i,
    last,
    autoScrollTimeout,
    e,
    isUserScroll,
  }) => {
    const lineScroll = windowHeight / 1.2 + e.target.scrollTop;
    const elementCenter =
      skillsItemsSorted[i].offsetTop + skillsItemsSorted[i].offsetHeight / 2;
    const itemPointHeight = itemPoint.offsetHeight;
    const triggerPoint = elementCenter - itemPointHeight / 2 - windowHeight / 3;
    const newScrollPosition =
      scrollCenter - skillsItemsSorted[i].offsetHeight / 2 + windowHeight / 3;
    const marginHeight = marginEl.offsetHeight;

    if (lineScroll > lastElementPosition) {
      if (newScrollPosition > lastElementPosition) {
        technologiesLineOverlay.style.height =
          lastElementPosition - marginHeight + "px";
        setAnimation(
          skillsItemsSorted[i],
          "add",
          "skills__technologies__wrapper__container--active",
          0
        );
        clearInterval(autoScroll);
        clearTimeout(autoScrollTimeout);
      } else technologiesLineOverlay.style.height = newScrollPosition + "px";
      techonologiesLine.style.height =
        lastElementPosition - marginHeight + "px";
    } else if (scrollCenter > triggerPoint) {
      technologiesLineOverlay.style.height = triggerPoint + windowHeight / 3;
      +"px";
      if (isUserScroll) {
        setAnimation(
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

      const index = setAnimation(technologiesLineOverlay, "style", "", 300, [
        {
          key: "height",
          value: newScrollPosition + "px",
        },
      ]);
      const date = new Date();
      skillsModule.changeState({
        ...skillsModule.getState(),
        animation: { index, date },
      });
      if (i < last - 1)
        skillsModule.changeState({ ...skillsModule.getState(), i: i + 1 });
    } else {
      technologiesLineOverlay.style.height = newScrollPosition + "px";
      techonologiesLine.style.height = lineScroll + "px";
    }
  };

  const hidenLastElement = ({ i, scrollCenter }) => {
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
  };

  const addInterval = ({ isUserScroll, scrollCenter, lastElementPosition }) => {
    if (isUserScroll && scrollCenter < lastElementPosition) {
      const autoScrollTimeout = setTimeout(() => {
        techonologiesLine.classList.remove(
          "skills__technologies__line--tranistion"
        );
        const autoScroll = setInterval(() => {
          technologiesEl.scrollBy({
            top: 10,
            behavior: "smooth",
          });
        }, 80);
        skillsModule.changeState({ ...skillsModule.getState(), autoScroll });
      }, 1200);
      skillsModule.changeState({
        ...skillsModule.getState(),
        autoScrollTimeout,
      });
    }
    skillsModule.changeState({
      ...skillsModule.getState(),
      isUserScroll: false,
    });
  };

  const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  let supportsPassive = false;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        },
      })
    );
  } catch (e) {}

  const wheelOpt = supportsPassive ? { passive: false } : false;
  const wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  (function disableScroll() {
    window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  })();

  function enableScroll() {
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener("touchmove", preventDefault, wheelOpt);
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  technologiesEl.addEventListener("scroll", (e) => {
    const {
      i,
      animation,
      isUserScroll,
      last,
      autoScrollTimeout,
      autoScroll,
    } = skillsModule.getState();

    const scrollCenter = windowHeight / 2 + e.target.scrollTop;
    const lastElementPosition = skillsItemsSorted[last - 1].offsetTop;

    clearAsyncFun({ animation, isUserScroll, autoScrollTimeout, autoScroll });

    scrollSection({
      scrollCenter,
      lastElementPosition,
      i,
      last,
      autoScrollTimeout,
      e,
      isUserScroll,
    });

    hidenLastElement({ i, scrollCenter });

    addInterval({ isUserScroll, scrollCenter, lastElementPosition });
  });

  document.addEventListener("scroll", (e) => {
    const { isSectionStart } = skillsModule.getState();
    if (window.pageYOffset === technologiesStart && !isSectionStart) {
      console.log("startujemy");
      startSection();
      skillsModule.changeState({
        ...skillsModule.getState(),
        isSectionStart: true,
      });
    }
  });
});
