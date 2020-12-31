const skillsDescriptionTitleEl = document.querySelector(
  ".skills__description__title"
);
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const skillsSection = document.querySelector(".skills");
const SkillsDescriptionTextEl = document.querySelector(
  ".skills__description__text"
);
const techonologiesLine = document.querySelector(".skills__technologies__line");
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

const skillsStartPosition = skillsSection.getBoundingClientRect().y;
const endOfSkillsSection = skillsStartPosition + windowHeight;

const skillsDescriptionPosition = skillsDescriptionTitleEl.getBoundingClientRect()
  .y;

const skillsItemsSorted = [].map
  .call(skillsItems, function (el) {
    return el;
  })
  .sort((a, b) => {
    return a.offsetTop - b.offsetTop;
  });

skillsDescriptionTitleEl.style.color = "red";
const descriptionTitleWidth = skillsDescriptionTitleEl.offsetWidth;
const descriptionTitleHeight = skillsDescriptionTitleEl.offsetHeight;
const descriptionTitleFromLeft = skillsDescriptionTitleEl.offsetLeft;
console.log(descriptionTitleFromLeft);
if (windowWidth < 450) {
  const multipler = 1.5;
  const x = `calc(50vw - ${
    (descriptionTitleWidth * multipler) / 2
  }px - ${descriptionTitleFromLeft}px)`;

  const y = `
    ${
      endOfSkillsSection -
      skillsDescriptionPosition -
      descriptionTitleHeight * multipler
    }px`;

  skillsDescriptionTitleEl.style.transform = `translate(${x}, ${y}) scale(${multipler})`;
} else if (windowWidth < 550) {
  const multipler = 2;
  const x = `calc(50vw - ${
    (descriptionTitleWidth * multipler) / 2
  }px - ${descriptionTitleFromLeft}px)`;

  const y = `
    ${
      endOfSkillsSection -
      skillsDescriptionPosition -
      descriptionTitleHeight * multipler
    }px`;

  skillsDescriptionTitleEl.style.transform = `translate(${x}, ${y}) scale(${multipler})`;
} else {
  const multipler = 3;
  const x = `calc(50vw - ${
    (descriptionTitleWidth * multipler) / 2
  }px - ${descriptionTitleFromLeft}px)`;

  const y = `
    ${
      endOfSkillsSection -
      skillsDescriptionPosition -
      descriptionTitleHeight * multipler
    }px`;

  skillsDescriptionTitleEl.style.transform = `translate(${x}, ${y}) scale(${multipler})`;
}

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
        el.style[styles.key] = styles.value;
      }, time);
    }
  }
};

let autoScroll;

const startSection = () => {
  // setAnimation(skillsDescriptionTitleEl, "add", "opacity-visible", 200);
  // setAnimation(skillsDescriptionTitleEl, "style", "", 600, {
  //   key: "transform",
  //   value: "translate(0,0) scale(1)",
  // });
  // setAnimation(
  //   SkillsDescriptionTextEl,
  //   "add",
  //   "skills__description__text--active",
  //   1800
  // );
  // setAnimation(
  //   SkillsDescriptionTextEl,
  //   "add",
  //   "skills__description__text--active",
  //   1800
  // );
  // setAnimation(
  //   skillsItemsSorted[0],
  //   "add",
  //   "skills__technologies__wrapper__container--active",
  //   2100
  // );
  // setAnimation(
  //   techonologiesLine,
  //   "add",
  //   "skills__technologies__line--active",
  //   3000
  // );
  // setTimeout(() => {
  //   autoScroll = setInterval(() => {
  //     technologiesEl.scrollBy({
  //       top: 6,
  //     });
  //   }, 60);
  // }, 2500);
};
setAnimation(technologiesLineOverlay, "style", "", 3100, {
  key: "height",
  value: windowHeight / 2 + "px",
});
startSection();

technologiesEl.addEventListener("wheel", (e) => {
  techonologiesLine.classList.add("skills__technologies__line--tranistion");
  skillsModule.changeState({ ...skillsModule.getState(), isUserScroll: true });
  isUserScroll = true;
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
    console.log("Clear");
    console.log(autoScroll);
    console.log(autoScrollTimeout);
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
}) => {
  const lineScroll = windowHeight / 1.2 + e.target.scrollTop;
  const elementCenter =
    skillsItemsSorted[i].offsetTop + skillsItemsSorted[i].offsetHeight / 2;
  const itemPointHeight = itemPoint.offsetHeight;
  const triggerPoint = elementCenter - itemPointHeight / 2 - windowHeight / 3;
  const newScrollPosition =
    scrollCenter - skillsItemsSorted[i].offsetHeight / 2 + windowHeight / 3;
  if (lineScroll > lastElementPosition) {
    if (newScrollPosition > lastElementPosition) {
      technologiesLineOverlay.style.height = lastElementPosition + "px";
      setAnimation(
        skillsItemsSorted[i],
        "add",
        "skills__technologies__wrapper__container--active",
        0
      );
      clearInterval(autoScroll);
      clearTimeout(autoScrollTimeout);
    } else technologiesLineOverlay.style.height = newScrollPosition + "px";
    techonologiesLine.style.height = lastElementPosition + "px";
  } else if (scrollCenter > triggerPoint) {
    technologiesLineOverlay.style.height = triggerPoint + windowHeight / 3;
    +"px";
    skillsItemsSorted[i].classList.add(
      "skills__technologies__wrapper__container--active"
    );

    const index = setAnimation(technologiesLineOverlay, "style", "", 300, {
      key: "height",
      value: newScrollPosition + "px",
    });
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
    skillsModule.changeState({ ...skillsModule.getState(), autoScrollTimeout });
  }
  skillsModule.changeState({ ...skillsModule.getState(), isUserScroll: false });
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
  });

  hidenLastElement({ i, scrollCenter });

  addInterval({ isUserScroll, scrollCenter, lastElementPosition });
});

document.addEventListener("scroll", (e) => {
  if (window.pageYOffset === skillsStartPosition && !isSectionStart) {
    startSection();
    skillsModule.changeState({
      ...skillsModule.getState(),
      isSectionStart: true,
    });
  }
});
