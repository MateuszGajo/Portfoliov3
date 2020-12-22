setTimeout(() => {
  document
    .querySelector(".start__line--content")
    .classList.add("start__line--content--active");
}, 2400);

setTimeout(() => {
  document
    .querySelector(".start__line--content")
    .classList.add("start__line--active");
}, 3000);

setTimeout(() => {
  document
    .querySelector(".start__line--downbar")
    .classList.add("start__line--downbar--active");
}, 3400);

setTimeout(() => {
  document
    .querySelector(".start__downbar__text__line--title")
    .classList.add("start__downbar__text__line--draw-active");
}, 3500);

setTimeout(() => {
  document
    .querySelector(".start__downbar__text--title")
    .classList.add("start__downbar__text--visible");
}, 3600);

setTimeout(() => {
  document
    .querySelector(".start__downbar__text__line--author")
    .classList.add("start__downbar__text__line--draw-active");
}, 3700);

setTimeout(() => {
  document
    .querySelector(".start__downbar__text--author")
    .classList.add("start__downbar__text--visible");
}, 3800);

setTimeout(() => {
  document
    .querySelector(".start__line--downbar")
    .classList.add("start__line--active");
}, 4000);

setTimeout(() => {
  document
    .querySelector(".start__downbar__text__line--title")
    .classList.add("start__downbar__text__line--active");
}, 4100);

setTimeout(() => {
  document
    .querySelector(".start__downbar__text__line--author")
    .classList.add("start__downbar__text__line--active");
}, 4300);

setTimeout(() => {
  document
    .querySelector(".start__downbar__text__overlay--title")
    .classList.add("start__downbar__text__overlay--active");
}, 4500);

setTimeout(() => {
  document
    .querySelector(".start__downbar__text__overlay--author")
    .classList.add("start__downbar__text__overlay--active");
}, 4700);

setTimeout(() => {
  document
    .querySelector(".start__downbar__text__line--author")
    .classList.remove("start__downbar__text__line--draw-active");
}, 5800);

setTimeout(() => {
  document
    .querySelector(".start__downbar__text__line--title")
    .classList.remove("start__downbar__text__line--draw-active");
}, 5900);

setTimeout(() => {
  document
    .querySelector(".start__line--downbar")
    .classList.remove("start__line--downbar--active");
}, 6000);

setTimeout(() => {
  document
    .querySelector(".start__line--content")
    .classList.remove("start__line--content--active");
}, 6300);

setTimeout(() => {
  document.querySelectorAll(".start__downbar__container").forEach((item) => {
    item.classList.add("start__downbar__container--move");
  });
  document
    .querySelector(".start__downbar__container--title")
    .classList.add("start__downbar__container--title--invisible");

  document
    .querySelector(".start__downbar__text--author")
    .classList.add("visibility-hidden");
  document
    .querySelector(".start__downbar__text__overlay--author")
    .classList.add("visibility-visble");
}, 7000);

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
    (function foo() {
      // console.log("here");
      el.textContent = String.fromCharCode(33 + Math.round(Math.random() * 99));
      return foo;
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
      console.log(children[1]);
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
        console.log(index);
        console.log(index === 2);
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
