export default class State {
  constructor() {
    if (State._instance) {
      return State._instance;
    }
    State._instance = this;
    this.projectsSection = document.querySelector(".projects");
    this.items = document.querySelector(".projects__items");
    this.item = document.querySelectorAll(".projects__items__item");
    this.title = document.querySelector(".projects__title__h1");
    this.itemsWidth = this.items.offsetWidth;
    this.windowWidth = window.innerWidth;
    this.titleWidth = this.title.offsetWidth;
    this.projectsSectionPosition = this.projectsSection.offsetTop;
    this.textTimes = Math.floor(this.itemsWidth / this.titleWidth);
    this.text = "Projects - ";
    this.title.innerHTML = this.text.repeat(this.textTimes) + "Projects";
    this.transformTitlePosition = 0;
    this.startTouchPosition = 0;
    this.isScrollOn = true;
    this.transformProjectsPosition = 0;
    this.touchStartX = 0;
  }

  getProjectsSection() {
    return this.projectsSection;
  }
  getItems() {
    return this.items;
  }
  getItem() {
    return this.item;
  }
  getTitle() {
    return this.title;
  }
  getItemsWidth() {
    return this.itemsWidth;
  }
  getWindowWidth() {
    return this.windowWidth;
  }
  getTitleWidth() {
    return this.titleWidth;
  }
  getProjectsSectionPosition() {
    return this.projectsSectionPosition;
  }

  getTransformTitlePosition() {
    return this.transformTitlePosition;
  }
  getStartTouchPosition() {
    return this.startTouchPosition;
  }
  getIsScrollOn() {
    return this.isScrollOn;
  }
  getTransformProjectsPositon() {
    return this.transformProjectsPosition;
  }
  getTouchStartX() {
    return this.touchStartX;
  }
  setTransformTitlePosition(val) {
    this.transformTitlePosition = val;
  }
  setStartTouchPosition(val) {
    this.startTouchPosition = val;
  }
  setIsScrollOn(val) {
    this.isScrollOn = val;
  }
  setTransformProjectsPosition(val) {
    this.transformProjectsPosition = val;
  }
  setTouchStartX(val) {
    this.startTouchPosition = val;
  }
}
