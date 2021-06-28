import State from "./state";
import { globalState } from "../globalState";
export default class Animation {
  constructor() {
    this.state = new State();
  }

  setAnimation(selector, type, className, time = 0) {
    const el = document.querySelector(selector);
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
    }
  }

  scrollSection(multiplier) {
    const blockAnimation = this.state.getBlockAnimation();
    const titleScale = this.state.getTitleScale();
    const properties = this.state.getProperties();
    const aboutStartPosition = this.state.getAboutStartPosition();
    const textsArray = this.state.getTextsArray();
    const aboutContainer = this.state.getAboutContainer();

    const { windowWidth, windowHeight } = globalState.getState();

    if (
      Math.abs(window.pageYOffset - aboutStartPosition) < 2 &&
      titleScale > 0.4 &&
      !blockAnimation
    ) {
      this.state.setBlockAnimation(true);
      globalState.changeState({
        ...globalState.getState(),
        allowScroll: false,
      });
      document.addEventListener("wheel", (e) => {
        this.scrollSection(1);
      });
      document.addEventListener("touchstart", (e) => {
        this.state.setLastTouchPosition(e.changedTouches[0].pageY);
      });
      document.addEventListener("touchend", (e) => {
        const lastTouchPosition = this.state.getLastTouchPosition();
        if (Math.abs(lastTouchPosition - e.changedTouches[0].pageY) > 50)
          this.scrollSection(2);
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
            const interval = this.state.getInterval();

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
          this.state.setProperties(newProperties);
        }
      }
    }

    if (titleScale < 14) {
      this.startShowingMessages({ multiplier });
    }
  }

  startShowingMessages({ multiplier }) {
    const titleEl = this.state.getTitleEl();
    const titleOpacity = this.state.getTitleOpactiy();
    if (multiplier < 1) {
      this.state.setTitleScale(titleScale * 1.1);
    } else if (multiplier > 1) {
      this.state.setTitleScale((titleScale * 1.5 * multiplier) / 1.5);
    } else this.state.setTitleScale(titleScale * 1.5);

    if (titleOpacity > 0) {
      this.state.setTitleOpacity(
        titleOpacity - Math.pow(titleOpacity, -1) * 0.02
      );
    }
    if (titleOpacity == 0) {
      titleEl.style.display = "none";
    }

    titleEl.style.transform = `scale(${titleScale})`;
    titleEl.style.opacity = titleOpacity;
  }
}
