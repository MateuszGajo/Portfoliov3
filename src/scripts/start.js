window.addEventListener("DOMContentLoaded", () => {
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
  const startSection = document.querySelector(".start");
  const contentLineEl = document.querySelector(".start__line--content");
  const downbarLineEl = document.querySelector(".start__line--downbar");
  const downbarTitleLineEl = document.querySelector(
    ".start__downbar__text__line--title"
  );
  const downbarTitleEl = document.querySelector(".start__downbar__text--title");
  const downbarAuthorLineEl = document.querySelector(
    ".start__downbar__text__line--author"
  );
  const downbarAuthorEl = document.querySelector(
    ".start__downbar__text--author"
  );
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

  const sideIcons = document.querySelectorAll(".side-bar__icon");

  let isIcons = false;

  setAnimation(contentLineEl, "add", "height-max", 1900);
  setAnimation(contentLineEl, "add", `start__line--active`, 2600); //-400
  setAnimation(downbarLineEl, "add", "start__line--downbar--active", 2700);
  setAnimation(
    downbarTitleLineEl,
    "add",
    "start__downbar__text__line--draw-active",
    3100
  );
  setAnimation(downbarTitleEl, "add", "opacity-visible", 3200);
  setAnimation(
    downbarAuthorLineEl,
    "add",
    "start__downbar__text__line--draw-active",
    3100
  );
  setAnimation(downbarAuthorEl, "add", "opacity-visible", 3400);
  setAnimation(downbarLineEl, "add", "start__line--active", 3600); //3600
  setAnimation(
    downbarTitleLineEl,
    "add",
    "start__downbar__text__line--active",
    3500
  );
  setAnimation(
    downbarAuthorLineEl,
    "add",
    "start__downbar__text__line--active",
    3900
  );
  setAnimation(downbarTitleOverlayEl, "add", "width-max", 4100);
  setAnimation(downbarAuthorOverlayEl, "add", "width-max", 4300);
  setAnimation(
    downbarAuthorLineEl,
    "remove",
    "start__downbar__text__line--draw-active",
    5400
  );
  setAnimation(
    downbarTitleLineEl,
    "remove",
    "start__downbar__text__line--draw-active",
    5500
  );
  setAnimation(downbarLineEl, "remove", "start__line--downbar--active", 5600);
  setAnimation(contentLineEl, "remove", "height-max", 5900);
  downbarEls.forEach((item) => {
    setAnimation(item, "add", "start__downbar__container--move", 6500);
  });
  setAnimation(downbarAuthorEl, "add", "visibility-hidden", 6500);
  setAnimation(downbarAuthorOverlayEl, "add", "visibility-visble", 6500);
  setAnimation(
    downbarTitleContainerEl,
    "add",
    "start__downbar__container--title--invisible",
    6500
  );

  setTimeout(() => {
    document
      .querySelectorAll(".start__downbar__text__overlay__letter")
      .forEach((item, index) => {
        shuffleText(item, index + 1);
      });
  }, 7000);

  const shuffleText = (el, time) => {
    const initialLetter = el.textContent;
    const interval = setInterval(
      (function shuffle() {
        el.textContent = String.fromCharCode(
          33 + Math.round(Math.random() * 99)
        );
        return shuffle;
      })(),
      9
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
          }, 1000 + i * 200);
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
              if (!isIcons) {
                for (let i = 0; i < sideIcons.length; i++) {
                  displayIcon(sideIcons[i], i);
                }
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

  startSection.addEventListener("wheel", (e) => {
    if (e.deltaY > 0 && !isIcons) {
      isIcons = true;
      for (let i = 0; i < sideIcons.length; i++) {
        displayIcon(sideIcons[i], i);
      }
    }
  });
});
