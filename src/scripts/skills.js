const skillsDescriptionTitleEl = document.querySelector(
  ".skills__description__title"
);
const windowHeight = window.innerHeight;
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
  ".skills__technologies__wrapper__container__point"
);

const skillsStartPosition = skillsSection.getBoundingClientRect().y;
const endOfSkillsSection = skillsStartPosition + windowHeight;

const skillsDescriptionPosition = skillsDescriptionTitleEl.getBoundingClientRect()
  .y;

skillsDescriptionTitleEl.style.color = "red";

skillsDescriptionTitleEl.style.transform = `translate(calc(30vw - 220px), ${
  endOfSkillsSection - skillsDescriptionPosition - 141
}px) scale(3)`;

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

const startSection = () => {
  setAnimation(skillsDescriptionTitleEl, "add", "opacity-visible", 200);
  setAnimation(skillsDescriptionTitleEl, "style", "", 600, {
    key: "transform",
    value: "translate(0,0) scale(1)",
  });
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
    techonologiesLine,
    "add",
    "skills__technologies__line--active",
    2100
  );
};
setAnimation(technologiesLineOverlay, "style", "", 3100, {
  key: "height",
  value: windowHeight / 2 + "px",
});
startSection();

let isSectionStart = false;

const skillsItemsSorted = [].map
  .call(skillsItems, function (el) {
    return el;
  })
  .sort((a, b) => {
    return a.offsetTop - b.offsetTop;
  });

let i = 0;
const last = skillsItemsSorted.length;
let animation = {
  index: null,
  date: null,
};
technologiesEl.addEventListener("scroll", (e) => {
  console.log(i);
  const scrollCenter = windowHeight / 2 + e.target.scrollTop;
  const lineScroll = windowHeight / 1.5 + e.target.scrollTop;
  const elementCenter =
    skillsItemsSorted[i].offsetTop + skillsItemsSorted[i].offsetHeight / 2;
  const lastElementPosition =
    skillsItemsSorted[last - 1].offsetTop +
    skillsItemsSorted[last - 1].offsetHeight / 2;
  const itemPointHeight = itemPoint.offsetHeight;

  if (
    animation.index &&
    new Date().getTime() - animation.date.getTime() < 300
  ) {
    clearTimeout(animation.index);
  }

  if (lineScroll > lastElementPosition) {
    if (scrollCenter > lastElementPosition) {
      technologiesLineOverlay.style.height = lastElementPosition - 30 + "px";
      setAnimation(
        skillsItemsSorted[i],
        "add",
        "skills__technologies__wrapper__container--active",
        0
      );
    } else technologiesLineOverlay.style.height = scrollCenter - 30 + "px";
    techonologiesLine.style.height = lastElementPosition - 30 + "px";
  } else if (scrollCenter > elementCenter - itemPointHeight / 2) {
    technologiesLineOverlay.style.height =
      elementCenter - itemPointHeight / 2 + "px";

    setAnimation(
      skillsItemsSorted[i],
      "add",
      "skills__technologies__wrapper__container--active",
      1000
    );

    animation.index = setAnimation(technologiesLineOverlay, "style", "", 300, {
      key: "height",
      value: scrollCenter + "px",
    });
    animation.date = new Date();

    if (i < last - 1) i++;
  } else {
    technologiesLineOverlay.style.height = scrollCenter - 30 + "px";
    techonologiesLine.style.height = lineScroll + "px";
  }

  if (i > 0) {
    const previousElementCenter =
      skillsItemsSorted[i - 1].offsetTop +
      skillsItemsSorted[i - 1].offsetHeight / 2;

    if (scrollCenter > previousElementCenter + windowHeight / 2.45) {
      skillsItemsSorted[i - 1].classList.add(
        "skills__technologies__wrapper__container--deactive"
      );
    }
  }

  if (
    lineScroll > windowHeight &&
    lineScroll < e.target.scrollHeight + windowHeight * 2
  ) {
  }
});

document.addEventListener("scroll", (e) => {
  if (window.pageYOffset === skillsStartPosition && !isSectionStart) {
    startSection();
    isSectionStart = true;
  }
});
