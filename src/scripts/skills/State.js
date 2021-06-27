export default class State {
  constructor() {
    if (State._instance) {
      return State._instance;
    }
    State._instance = this;
    this.isTechnologiesStart = false;
    this.isDescriptionStart = false;
    this.i = 0;
    this.last = null;
    this.animation = {
      index: null,
      date: null,
    };
    this.autoScrollTimeout = null;
    this.autoScroll = null;
    this.isUserScroll = false;
    this.animationStarted = false;
    this.animationEnded = false;
    this.skippedAnimation = false;
    this.stoppedAnimation = false;
    this.skillsDescriptionEl = document.querySelector(".skills__description");
    this.skillsSection = document.querySelector(".skills");
    this.techonologiesLine = document.querySelector(
      ".skills__technologies__line"
    );
    this.technologiesLineOverlay = document.querySelector(
      ".skills__technologies__line__overlay"
    );
    this.technologiesEl = document.querySelector(".skills__technologies");
    this.skillsItems = document.querySelectorAll(
      ".skills__technologies__wrapper__container"
    );
    this.itemPoint = document.querySelector(
      ".skills__technologies__wrapper__container__point__circle--big"
    );
    this.marginEl = document.querySelector(".skills__technologies__margin");

    this.technologiesStart =
      this.skillsSection.offsetTop + this.technologiesEl.offsetTop;
    this.descriptionStart =
      this.skillsSection.offsetTop + this.skillsDescriptionEl.offsetTop;
  }

  skillItemsSort() {
    const skillsItemsSorted = [].map
      .call(this.skillsItems, function (el) {
        return el;
      })
      .sort((a, b) => {
        return a.offsetTop - b.offsetTop;
      });
    this.last = skillsItemsSorted.length;
    return skillsItemsSorted;
  }

  getDelay() {
    let delay = 0;
    if (this.technologiesStart == this.descriptionStart) {
      delay = 2000;
    }
    return delay;
  }

  getIsTechnologiesStart() {
    return this.isTechnologiesStart;
  }
  getIsDescriptionStart() {
    return this.isDescriptionStart;
  }
  getAnimationStarted() {
    return this.animationStarted;
  }
  getDescriptionStart() {
    return this.descriptionStart;
  }
  getTechnologiesStart() {
    return this.technologiesStart;
  }
  getTechnologiesEl() {
    return this.technologiesEl;
  }
  getSkippedAnimationStatus() {
    return this.skippedAnimation;
  }
  getTechnologiesLine() {
    return this.techonologiesLine;
  }
  getAnimationEnded() {
    return this.animationEnded;
  }
  getItemPoint() {
    return this.itemPoint;
  }
  getTechnologiesLineOverlay() {
    return this.technologiesLineOverlay;
  }
  getIndex() {
    return this.i;
  }
  getLast() {
    return this.last;
  }
  getSkillsSection() {
    return this.skillsSection;
  }
  getStoppedAnimation() {
    return this.stoppedAnimation;
  }
  getAutoScrollIndex() {
    return this.autoScroll;
  }
  getAutoScrollTimeout() {
    return this.autoScrollTimeout;
  }
  getIsUserScroll() {
    return this.isUserScroll;
  }
  getAnimation() {
    return this.animation;
  }
  getMarginEl() {
    return this.marginEl;
  }
  setAnimation(value) {
    this.animation = value;
  }

  setAutoScrollTimeout(val) {
    this.autoScrollTimeout = val;
  }
  setIsTechnologiesStart(val) {
    this.isTechnologiesStart = val;
  }
  setUserScroll(val) {
    this.isUserScroll = val;
  }
  setIndex(val) {
    this.i = val;
  }
  setAutoScroll(val) {
    this.autoScroll = val;
  }
  setStopAnimation(val) {
    this.stoppedAnimation = val;
  }
  setAnimationEnd(val) {
    this.animationEnded = val;
  }
  setSkipAnimation(val) {
    this.skippedAnimation = val;
  }
  setAutoScroll(value) {
    this.autoScroll = value;
  }
  setAnimationStarted(value) {
    this.animationStarted = value;
  }
}
