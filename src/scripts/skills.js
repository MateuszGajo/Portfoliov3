import { globalState } from "./globalState";
window.addEventListener("DOMContentLoaded", () => {
  const skillsDescriptionEl = document.querySelector(".skills__description");
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

  const technologiesStart = skillsSection.offsetTop + technologiesEl.offsetTop;
  const descriptionStart =
    skillsSection.offsetTop + skillsDescriptionEl.offsetTop;

  const skillsItemsSorted = [].map
    .call(skillsItems, function (el) {
      return el;
    })
    .sort((a, b) => {
      return a.offsetTop - b.offsetTop;
    });

  const skillsModule = (() => {
    let state = {
      isTechnologiesStart: false,
      isDescriptionStart: false,
      i: 0,
      last: skillsItemsSorted.length,
      animation: {
        index: null,
        date: null,
      },
      autoScrollTimeout: null,
      autoScroll: null,
      isUserScroll: false,
      animationStarted: false,
      animationEnded: false,
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

  function disableScroll() {
    skillsSection.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    skillsSection.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    skillsSection.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    skillsSection.addEventListener(
      "keydown",
      preventDefaultForScrollKeys,
      false
    );
  }
  // disableScroll();

  function enableScroll() {
    skillsSection.removeEventListener("DOMMouseScroll", preventDefault, false);
    skillsSection.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    skillsSection.removeEventListener("touchmove", preventDefault, wheelOpt);
    skillsSection.removeEventListener(
      "keydown",
      preventDefaultForScrollKeys,
      false
    );
  }

  const startDescription = () => {
    setAnimation(skillsDescriptionTitleEl, "add", "opacity-visible", 200);
    if (windowWidth < 1023) {
      setAnimation(skillsDescriptionTitleEl, "style", "", 600, [
        {
          key: "bottom",
          value: `${windowHeight - SkillsDescriptionTextEl.offsetTop + 10}px`,
        },
        {
          key: "transform",
          value: `translateX(-50%) scale(1)`,
        },
      ]);
    } else {
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
    }

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
  };

  const startTechnologies = (delay) => {
    setAnimation(technologiesEl, "add", "opacity-visible", 200 + delay);

    setAnimation(
      skillsItemsSorted[0],
      "add",
      "skills__technologies__wrapper__container--active",
      400 + delay
    );
    setAnimation(
      techonologiesLine,
      "add",
      "skills__technologies__line--active",
      1200 + delay
    );
    setAnimation(technologiesLineOverlay, "style", "", 1300 + delay, [
      {
        key: "height",
        value:
          windowHeight / 2 -
          skillsItemsSorted[0].offsetHeight / 2 +
          windowHeight / 3 +
          "px",
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
      skillsModule.changeState({
        ...skillsModule.getState(),
        autoScroll,
        animationStarted: true,
      });
    }, 2600 + delay);

    setTimeout(() => {
      enableScroll();
      const { scrollPosition } = globalState.getState();
      if (scrollPosition === technologiesStart) {
        globalState.changeState({
          ...globalState.getState(),
          allowScroll: false,
        });
      }
    }, 2650 + delay);
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
    autoScroll,
  }) => {
    const { animationEnded } = skillsModule.getState();

    const lineScroll = windowHeight / 1.2 + e.target.scrollTop;
    const elementCenter =
      skillsItemsSorted[i].offsetTop + skillsItemsSorted[i].offsetHeight / 2;
    const itemPointHeight = itemPoint.offsetHeight;
    const triggerPoint = elementCenter - itemPointHeight / 2 - windowHeight / 3;
    const newScrollPosition =
      scrollCenter - skillsItemsSorted[i].offsetHeight / 2 + windowHeight / 3;
    const marginHeight = marginEl.offsetHeight;

    if (!animationEnded) {
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
          disableScroll();
          skillsModule.changeState({
            ...skillsModule.getState(),
            animationEnded: true,
          });
          setTimeout(() => {
            globalState.changeState({
              ...globalState.getState(),
              allowScroll: true,
            });
          }, 1500);
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
      autoScroll,
    });

    hidenLastElement({ i, scrollCenter });

    addInterval({ isUserScroll, scrollCenter, lastElementPosition });
  });

  document.addEventListener("scroll", (e) => {
    const {
      isTechnologiesStart,
      isDescriptionStart,
      animationStarted,
      animationEnded,
    } = skillsModule.getState();
    const { scrollBack } = globalState.getState();

    if (
      window.pageYOffset === technologiesStart &&
      !isTechnologiesStart &&
      scrollBack
    ) {
      let delay = 0;
      if (technologiesStart == descriptionStart) {
        delay = 2000;
      }
      startTechnologies(delay);
      skillsModule.changeState({
        ...skillsModule.getState(),
        isTechnologiesStart: true,
      });
    }

    if (
      window.pageYOffset === descriptionStart &&
      !isDescriptionStart &&
      scrollBack
    ) {
      startDescription();
      skillsModule.changeState({
        ...skillsModule.getState(),
        isDescriptionStart: true,
      });
    }

    if (
      window.pageYOffset === technologiesStart &&
      animationStarted &&
      !animationEnded
    ) {
      globalState.changeState({
        ...globalState.getState(),
        allowScroll: false,
      });
    }
  });
});
