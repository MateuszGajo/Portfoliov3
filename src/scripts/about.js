import { globalState } from "./globalState";

window.addEventListener("DOMContentLoaded", () => {
  const { windowWidth, windowHeight } = globalState.getState();

  const aboutSection = document.querySelector(".about");
  const aboutContainer = document.querySelector(".about__container");
  const titleEl = document.querySelector(".about__title__text");

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

  const aboutStartPosition = aboutSection.offsetTop;

  const aboutModule = (() => {
    let state = {
      isSectionStart: false,
      lastTouchPosition: 0,
      skippedAnimation: false,
      blockAnimation: false,
      titleOpacity: 1,
      titleScale: 0.05,
      properties: [
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
          scale: 0.05,
          index: 1,
          opacity: 0.1,
          xSign: "",
          ySign: "",
        },
        {
          cord: -(windowWidth / 100) * 7,
          scale: -0.35,
          index: 2,
          opacity: -0.7,
          xSign: "",
          ySign: "-",
        },
        {
          cord: -(windowWidth / 100) * 14,
          scale: -0.7,
          index: 3,
          opacity: -1.4,
          xSign: "-",
          ySign: "",
        },
      ],
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

  const scrollSection = (multiplier) => {
    const { blockAnimation, titleScale, titleOpacity } = aboutModule.getState();
    const { properties } = aboutModule.getState();

    if (
      Math.abs(window.pageYOffset - aboutStartPosition) < 2 &&
      titleScale > 0.4 &&
      !blockAnimation
    ) {
      aboutModule.changeState({
        ...aboutModule.getState(),
        blockAnimation: true,
      });
      globalState.changeState({
        ...globalState.getState(),
        allowScroll: false,
      });
      document.addEventListener("wheel", (e) => {
        scrollSection(1);
      });
      document.addEventListener("touchstart", (e) => {
        aboutModule.changeState({
          ...aboutModule.getState(),
          lastTouchPosition: e.changedTouches[0].pageY,
        });
      });
      document.addEventListener("touchend", (e) => {
        const { lastTouchPosition } = aboutModule.getState();
        if (Math.abs(lastTouchPosition - e.changedTouches[0].pageY) > 50)
          scrollSection(2);
      });
    }

    if (titleScale > 0.4) {
      for (let i = 0; i < 4; i++) {
        let { cord, scale, index, opacity, xSign, ySign } = properties[i];

        if (index < textsArray.length) {
          if (opacity < 1) {
            opacity += 0.1 * multiplier;
            textsArray[index].style.opacity = opacity;
          }

          cord = cord + (windowWidth / 100) * multiplier;
          scale = scale + 0.05 * multiplier;
          textsArray[index].style.transform = `scale(${scale}) translate(${
            xSign + cord
          }px, ${ySign + cord}px)`;

          const elProp = textsArray[index].getBoundingClientRect();

          const topPositon = elProp.top;
          const bottomPosition = elProp.bottom;
          const leftPosition = elProp.left;
          const rightPosition = elProp.right;
          if (
            index === textsArray.length - 1 &&
            (bottomPosition < 0 ||
              topPositon > windowHeight ||
              leftPosition + windowWidth < 0 ||
              rightPosition > windowWidth * 2)
          ) {
            const { windowHeight, scrollPosition } = globalState.getState();

            aboutContainer.classList.add("about__container--active");

            globalState.changeState({
              ...globalState.getState(),
              allowScroll: true,
            });
            clearInterval(interval);

            const newScrollPosition = scrollPosition + windowHeight;
            window.scroll({
              top: newScrollPosition,
              left: 0,
              behavior: "smooth",
            });
            globalState.changeState({
              ...globalState.getState(),
              scrollPosition: newScrollPosition,
            });
          }

          if (
            bottomPosition < 0 ||
            topPositon > windowHeight ||
            leftPosition + windowWidth < 0 ||
            rightPosition > windowWidth * 2
          ) {
            opacity = 0.1;
            cord = 0;
            scale = 0.1;
            index += 4;
            if (index < textsArray.length) {
              textsArray[index].style.opacity = opacity;
            }
          }

          let newProperties = properties;
          newProperties[i] = {
            cord,
            scale,
            index,
            opacity,
            xSign,
            ySign,
          };
          aboutModule.changeState({
            ...aboutModule.getState(),
            properties: newProperties,
          });
        }
      }
    }

    if (titleScale < 14) {
      if (multiplier < 1) {
        aboutModule.changeState({
          ...aboutModule.getState(),
          titleScale: titleScale * 1.1,
        });
      } else if (multiplier > 1) {
        aboutModule.changeState({
          ...aboutModule.getState(),
          titleScale: (titleScale * 1.5 * multiplier) / 1.5,
        });
      } else
        aboutModule.changeState({
          ...aboutModule.getState(),
          titleScale: titleScale * 1.5,
        });
      if (titleOpacity > 0) {
        aboutModule.changeState({
          ...aboutModule.getState(),
          titleOpacity: titleOpacity - Math.pow(titleOpacity, -1) * 0.02,
        });
      }
      if (titleOpacity == 0) {
        titleEl.style.display = "none";
      }

      titleEl.style.transform = `scale(${titleScale})`;
      titleEl.style.opacity = titleOpacity;
    }
  };
  let interval;
  document.addEventListener("scroll", () => {
    const { scrollBack } = globalState.getState();
    const { isSectionStart } = aboutModule.getState();
    if (
      Math.abs(window.pageYOffset - aboutStartPosition) < 10 &&
      scrollBack &&
      !isSectionStart
    ) {
      aboutModule.changeState({
        ...aboutModule.getState(),
        isSectionStart: true,
      });
      startSection();
      setTimeout(() => {
        const { skippedAnimation } = aboutModule.getState();
        if (!skippedAnimation) {
          interval = setInterval(() => {
            scrollSection(0.4);
          }, 100);
        }
      }, 800);
    }
  });

  const wheelSkipSection = () => {
    const { blockAnimation } = aboutModule.getState();
    if (!blockAnimation) {
      setTimeout(() => {
        clearInterval(interval);
        aboutContainer.classList.add("about__container--active");
        titleEl.style.opacity = 0;
      }, 250);
      aboutModule.changeState({
        ...aboutModule.getState(),
        skippedAnimation: true,
      });
    }
  };

  aboutSection.addEventListener("wheel", wheelSkipSection);
  aboutSection.addEventListener("touchmove", wheelSkipSection);
});
