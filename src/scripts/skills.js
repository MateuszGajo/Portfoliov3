const skillsDescriptionTitleEl = document.querySelector(
  ".skills__description__title"
);
const windowHeight = window.innerHeight;
const skillsSection = document.querySelector(".skills");
const SkillsDescriptionTextEl = document.querySelector(
  ".skills__description__text"
);
const techonologiesLine = document.querySelector(".skills__technologies__line");
const technologiesEl = document.querySelector(".skills__technologies");

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
    case "style": {
      setTimeout(() => {
        el.style[styles.key] = styles.name;
      }, time);
    }
  }
};

const startSection = () => {
  setAnimation(skillsDescriptionTitleEl, "add", "opacity-visible", 200);
  setAnimation(skillsDescriptionTitleEl, "style", "", 600, {
    key: "transform",
    name: "translate(0,0) scale(1)",
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
startSection();
let isSectionStart = false;

const skillsItems = document.querySelectorAll(
  ".skills__technologies__wrapper__container"
);

const skillsItemsSorted = [].map
  .call(skillsItems, function (el) {
    return el;
  })
  .sort((a, b) => {
    return a.offsetTop - b.offsetTop;
  });

// aa.forEach((item) => console.log(item.offsetTop));

let counter = 0;

technologiesEl.addEventListener("scroll", (e) => {
  // console.log(skillsItemsSorted[1].offsetTop);
  // console.log(skillsItemsSorted[1].offsetHeight);
  console.log(e.target.scrollTop + windowHeight / 2);
  console.log(skillsItemsSorted[1].offsetTop);
  console.log(
    skillsItemsSorted[1].offsetTop + skillsItemsSorted[1].offsetHeight / 2 - 100
  );
  if (
    e.target.scrollTop + windowHeight / 2 >
      skillsItemsSorted[1].offsetTop +
        skillsItemsSorted[1].offsetHeight / 2 -
        100 &&
    e.target.scrollTop + windowHeight / 2 <
      skillsItemsSorted[1].offsetTop +
        skillsItemsSorted[1].offsetHeight / 2 +
        100
  ) {
    console.log("jesteśmy tu");
    // e.scrollBy({

    // })
    // console.log(skillsItems[2].offsetTop);
    // technologiesEl.scrollBy({
    //   top: skillsItems[2].offsetTop,
    //   behavior: "smooth",
    // });
    // technologiesEl.scrollTop = skillsItems[2].offsetTop;
  }
  if (
    windowHeight / 1.5 + e.target.scrollTop > windowHeight &&
    windowHeight / 1.5 + e.target.scrollTop <
      e.target.scrollHeight + windowHeight * 2
  )
    techonologiesLine.style.height =
      windowHeight / 1.5 + e.target.scrollTop + "px";
});

document.addEventListener("scroll", (e) => {
  if (window.pageYOffset === skillsStartPosition && !isSectionStart) {
    startSection();
    isSectionStart = true;
  }
});
