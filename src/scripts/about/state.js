import { globalState } from "../globalState";
const { windowWidth } = globalState.getState();
export default class State {
  constructor() {
    if (State._instance) {
      return State._instance;
    }
    State._instance = this;
    this.isSectionStart = false;
    this.lastTouchPosition = 0;
    this.skippedAnimation = false;
    this.blockAnimation = false;
    this.titleOpacity = 1;
    this.interval = null;
    this.titleScale = 0.05;
    this.properties = [
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
    ];

    this.aboutSection = document.querySelector(".about");
    this.aboutContainer = document.querySelector(".about__container");
    this.titleEl = document.querySelector(".about__title__text");
    this.topLeftTexts = document.querySelectorAll(
      ".about__container__item--top-left .about__container__item__text"
    );
    this.topRightTexts = document.querySelectorAll(
      ".about__container__item--top-right .about__container__item__text"
    );
    this.bottomLeftTexts = document.querySelectorAll(
      ".about__container__item--bottom-left .about__container__item__text"
    );
    this.bottomRightTexts = document.querySelectorAll(
      ".about__container__item--bottom-right .about__container__item__text"
    );
    this.aboutStartPosition = this.aboutSection.offsetTop;
  }
  getInterval() {
    return this.interval;
  }
  getAboutStartPosition() {
    return this.aboutStartPosition;
  }
  getAboutSection() {
    return this.aboutSection;
  }
  getAboutContainer() {
    return this.aboutContainer;
  }
  getTitleEl() {
    return this.titleEl;
  }
  getTopLeftTexts() {
    return this.topLeftTexts;
  }
  getTopRightTexts() {
    return this.topRightTexts;
  }
  getBottomLeftTexts() {
    return this.bottomLeftTexts;
  }
  getBottomRightTexts() {
    return this.bottomRightTexts;
  }
  getIsSectionStart() {
    return this.isSectionStart;
  }
  getLastTouchPosition() {
    return this.lastTouchPosition;
  }
  getSkippedAnimation() {
    return this.skippedAnimation;
  }
  getBlockAnimation() {
    return this.blockAnimation;
  }
  getTitleOpactiy() {
    return this.titleOpacity;
  }
  getTitleScale() {
    return this.titleScale;
  }
  getProperties() {
    return this.properties;
  }
  setInterval(val) {
    this.interval = val;
  }
  setIsSectionStart(val) {
    this.isSectionStart = val;
  }
  setLastTouchPosition(val) {
    this.lastTouchPosition = val;
  }
  setSkippedAnimation(val) {
    this.skippedAnimation = val;
  }
  setBlockAnimation(val) {
    this.blockAnimation = val;
  }
  setTitleOpacity(val) {
    this.titleOpacity = val;
  }
  setTitleScale(val) {
    this.titleScale = val;
  }
  setProperties(val) {
    this.properties = val;
  }

  max(a, b, c, d) {
    const aL = a.length;
    const bL = b.length;
    const cL = c.length;
    const dL = d.length;
    if (aL > bL && aL > cL && aL > dL) return aL;
    if (bL > cL && bL > dL) return bL;
    if (cL > dL) return cL;
    return dL;
  }

  maxItem() {
    return this.max(
      this.topLeftTexts,
      this.topRightTexts,
      this.bottomLeftTexts,
      this.bottomRightTexts
    );
  }

  getTextsArray() {
    const textsArray = [];
    const maxItem = this.maxItem();
    for (let i = 0; i < maxItem; i++) {
      if (this.topLeftTexts[i]) textsArray.push(this.topLeftTexts[i]);
      if (this.bottomRightTexts[i]) textsArray.push(this.bottomRightTexts[i]);
      if (this.topRightTexts[i]) textsArray.push(this.topRightTexts[i]);
      if (this.bottomLeftTexts[i]) textsArray.push(this.bottomLeftTexts[i]);
    }

    return textsArray;
  }
}
