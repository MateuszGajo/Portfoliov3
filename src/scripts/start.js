const setAnimation = (el, type, className, time = 0) => {
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
};

const contentLineEl = document.querySelector(".start__line--content");
const downbarLineEl = document.querySelector(".start__line--downbar");
const downbarTitleLineEl = document.querySelector(
  ".start__downbar__text__line--title"
);
const downbarTitleEl = document.querySelector(".start__downbar__text--title");
const downbarAuthorLineEl = document.querySelector(
  ".start__downbar__text__line--author"
);
const downbarAuthorEl = document.querySelector(".start__downbar__text--author");
const downbarTitleOverlayEl = document.querySelector(
  ".start__downbar__text__overlay--title"
);
const downbarAuthorOverlayEl = document.querySelector(
  ".start__downbar__text__overlay--author"
);
const downbarEls = document.querySelectorAll(".start__downbar__container");
const downbarTitleContainerEl = document.querySelector(
  ".start__downbar__container--title"
);

setAnimation(contentLineEl, "add", "start__line--content--active", 2400);
setAnimation(contentLineEl, "add", `start__line--active`, 3000);
setAnimation(downbarLineEl, "add", "start__line--downbar--active", 3400);
setAnimation(
  downbarTitleLineEl,
  "add",
  "start__downbar__text__line--draw-active",
  3500
);
setAnimation(downbarTitleEl, "add", "start__downbar__text--visible", 3600);
setAnimation(
  downbarAuthorLineEl,
  "add",
  "start__downbar__text__line--draw-active",
  3700
);
setAnimation(downbarAuthorEl, "add", "start__downbar__text--visible", 3800);
setAnimation(downbarLineEl, "add", "start__line--active", 4000);
setAnimation(
  downbarTitleLineEl,
  "add",
  "start__downbar__text__line--active",
  4100
);
setAnimation(
  downbarAuthorLineEl,
  "add",
  "start__downbar__text__line--active",
  4300
);
setAnimation(
  downbarTitleOverlayEl,
  "add",
  "start__downbar__text__overlay--active",
  4500
);
setAnimation(
  downbarAuthorOverlayEl,
  "add",
  "start__downbar__text__overlay--active",
  4700
);
setAnimation(
  downbarAuthorLineEl,
  "remove",
  "start__downbar__text__line--draw-active",
  5800
);
setAnimation(
  downbarTitleLineEl,
  "remove",
  "start__downbar__text__line--draw-active",
  5900
);
setAnimation(downbarLineEl, "remove", "start__line--downbar--active", 6000);
setAnimation(contentLineEl, "remove", "start__line--content--active", 6300);
downbarEls.forEach((item) => {
  setAnimation(item, "add", "start__downbar__container--move", 7000);
});
setAnimation(downbarAuthorEl, "add", "visibility-hidden", 7000);
setAnimation(downbarAuthorOverlayEl, "add", "visibility-visble", 7000);
setAnimation(
  downbarTitleContainerEl,
  "add",
  "start__downbar__container--title--invisible",
  7000
);

setTimeout(() => {
  document
    .querySelectorAll(".start__downbar__text__overlay__letter")
    .forEach((item, index) => {
      shuffleText(item, index + 1);
    });
}, 7500);

const shuffleText = (el, time) => {
  const initialLetter = el.textContent;
  const interval = setInterval(
    (function shuffle() {
      el.textContent = String.fromCharCode(33 + Math.round(Math.random() * 99));
      return shuffle;
    })(),
    10
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
        setTimeout(() => {
          children[i].classList.add("start__content_p--move-up");
          return moveLeft(children[i], i);
        }, 2200 + i * 200);
      }

      const moveLeft = (el, index) => {
        setTimeout(() => {
          el.classList.add("start__content_p--mov-left");
        }, 100);
        if (index === 2) {
          setTimeout(() => {
            document
              .querySelector(".start__icon")
              .classList.add("opacity-visible");

            const children = document.querySelectorAll(".side-bar__icon");

            for (let i = 0; i < children.length; i++) {
              displayIcon(children[i], i);
            }
          }, 150);
        }
      };
    }
  }, time * 250);
};

const displayIcon = (el, index) => {
  setTimeout(() => {
    el.classList.add("side-bar__icon--intitial");
  }, index * 250);
};
