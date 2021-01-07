import { globalState } from "./globalState";

const { windowWidth, windowHeight } = globalState.getState();

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
  };

  const properties = [
    {
      cord: windowWidth / 30,
      scale: 0.5,
      index: 0,
      opacity: 0.1,
      xSign: "-",
      ySign: "-",
    },
    {
      cord: windowWidth / 30,
      scale: 0.2,
      index: 1,
      opacity: 0.1,
      xSign: "",
      ySign: "",
    },
    {
      cord: -(windowWidth / 100) * 5,
      scale: -0.25,
      index: 2,
      opacity: -0.5,
      xSign: "",
      ySign: "-",
    },
    {
      cord: -(windowWidth / 100) * 10,
      scale: -0.5,
      index: 3,
      opacity: -1,
      xSign: "-",
      ySign: "",
    },
  ];

  let titleScale = 0.1;

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
      globalState.changeState({
        ...globalState.getState(),
        allowScroll: false,
      });
      document.addEventListener("wheel", (e) => {
        if (titleScale > 5) {
          for (let i = 0; i < 4; i++) {
            let { cord, scale, index, opacity, xSign, ySign } = properties[i];

            if (index < textsArray.length) {
              if (opacity < 1) {
                opacity += 0.1;
                textsArray[index].style.opacity = opacity;
              }

              cord = cord + windowWidth / 100;
              scale = scale + 0.05;
              textsArray[index].style.transform = `scale(${scale}) translate(${
                xSign + cord
              }px, ${ySign + cord}px)`;

              const elProp = textsArray[index].getBoundingClientRect();
              const topPositon = elProp.top;
              const bottomPosition = elProp.bottom;
              if (
                index === textsArray.length - 1 &&
                (bottomPosition < 0 || topPositon > windowHeight)
              ) {
                globalState.changeState({
                  ...globalState.getState(),
                  allowScroll: true,
                });
              }

              if (bottomPosition < 0 || topPositon > windowHeight) {
                opacity = 0.1;
                cord = 0;
                scale = 0.1;
                index += 4;
                if (index < textsArray.length) {
                  textsArray[index].style.opacity = opacity;
                }
              }
              properties[i] = {
                cord,
                scale,
                index,
                opacity,
                xSign,
                ySign,
              };
            }
          }
        }
        if (titleScale < 30) {
          titleScale = titleScale * 1.4;
          titleEl.style.transform = `scale(${titleScale})`;
        }
      });
    }
  });
});
