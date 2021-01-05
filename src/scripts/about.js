import { globalState } from "./globalState";

const { windowWidth } = globalState.getState();

const topLeftTexts = document.querySelectorAll(
  ".about__container__item--top-left .about__container__item__text"
);
const topRightTexts = document.querySelectorAll(
  ".about__container__item--top-right .about__container__item__text"
);
const bottomLeftTexts = document.querySelectorAll(
  ".about__container__item--bottom-left .about__container__item__text"
);
const bottomRightTexts = document.querySelectorAll(
  ".about__container__item--bottom-right .about__container__item__text"
);

const max = (a, b, c, d) => {
  const aL = a.length;
  const bL = b.length;
  const cL = c.length;
  const dL = d.length;
  if (aL > bL && aL > cL && aL > dL) return aL;
  if (bL > cL && bL > dL) return bL;
  if (cL > dL) return cL;
  return dL;
};

const maxItem = max(
  topLeftTexts,
  topRightTexts,
  bottomLeftTexts,
  bottomRightTexts
);

const textsArray = [];

for (let i = 0; i < maxItem; i++) {
  if (topLeftTexts[i]) textsArray.push(topLeftTexts[i]);
  if (bottomRightTexts[i]) textsArray.push(bottomRightTexts[i]);
  if (topRightTexts[i]) textsArray.push(topRightTexts[i]);
  if (bottomLeftTexts[i]) textsArray.push(bottomLeftTexts[i]);
}

console.log(textsArray);

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
    // setAnimation(titleEl, "add", "about__title__text--active", 600);
  };

  let firstCord = windowWidth / 12.5;
  let firstScale = 0.5;
  let secondCord = 0;
  let secondScale = 0;
  let firstIndex = 0;
  let secondIndex = 1;
  let firstSign = -1;
  let secondSign = 1;

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
      document.addEventListener("wheel", (e) => {
        if (c > 30) {
          if (firstIndex < textsArray.length && firstScale < 2) {
            console.log(textsArray[firstIndex]);
            firstCord = firstCord + windowWidth / 50;
            firstScale = firstScale + 0.08;
            textsArray[
              firstIndex
            ].style.transform = `scale(${firstScale}) translate(${
              firstCord * firstSign
            }px, -${firstCord}px)`;
            console.log(textsArray[firstIndex]);
            if (firstScale >= 2) {
              firstCord = 0;
              firstScale = 0;
              firstIndex += 2;
              firstSign *= -1;
            }
          }

          if (secondIndex < textsArray.length && secondScale < 2) {
            secondCord = secondCord + windowWidth / 50;
            secondScale = secondScale + 0.08;
            textsArray[
              secondIndex
            ].style.transform = `scale(${secondScale}) translate(${
              secondCord * secondSign
            }px, ${secondCord}px)`;

            if (secondScale >= 2) {
              secondCord = 0;
              secondScale = 0;
              secondIndex += 2;
              secondSign *= -1;
            }
          }
        } else {
          c = c * 1.4;
          titleEl.style.transform = `scale(${c})`;
        }
      });
    }
  });
});

const aa = document.querySelector(
  ".about__container__item--top-left .about__container__item__text"
);

const bb = document.querySelector(
  ".about__container__item--bottom-right .about__container__item__text"
);

let c = 0.1;
