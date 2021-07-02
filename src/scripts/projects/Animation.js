import { globalState } from "../globalState";
import State from "./State";
export default class Animation {
  constructor(parent) {
    this.parent = parent;
    this.state = new State();
  }

  previousSection() {
    const title = this.state.getTitle();
    const items = this.state.getItems();

    const { windowHeight, scrollPosition } = globalState.getState();
    const projectsSection = this.state.getProjectsSection();
    const projectsSectionDistance = projectsSection.offsetTop;

    const isUserOnStartSection = projectsSectionDistance === scrollPosition;
    if (isUserOnStartSection) {
      title.style.transform = `translateX(0)`;
      items.style.transform = `translateX(0)`;

      setTimeout(() => {
        globalState.changeState({
          ...globalState.getState(),
          allowScroll: true,
        });
      }, 500);
      this.state.setIsScrollOn(true);

      const newScrollPosition = scrollPosition - windowHeight;
      window.scroll({
        top: newScrollPosition,
        left: 0,
        behavior: "smooth",
      });
      globalState.changeState({
        ...globalState.getState(),
        scrollPosition: newScrollPosition,
      });
      this.parent.setScrollProjectOff("off");
    }
  }

  moveLeft({ distance }) {
    const transformProjectsPosition = this.state.getTransformProjectsPositon();
    const transformTitlePosition = this.state.getTransformTitlePosition();
    const title = this.state.getTitle();
    const items = this.state.getItems();

    let newTransformProjectsPosition = 0;
    let newTransformTitlePosition = 0;

    const isScrollLeftPossible = transformProjectsPosition + distance < -50;

    if (isScrollLeftPossible) {
      newTransformTitlePosition = transformTitlePosition + distance / 2;
      newTransformProjectsPosition = transformProjectsPosition + distance;

      title.style.transform = `translateX(${newTransformTitlePosition}px)`;
      items.style.transform = `translateX(${newTransformProjectsPosition}px)`;
    } else {
      this.previousSection();
    }

    this.state.setTransformProjectsPosition(newTransformProjectsPosition);
    this.state.setTransformTitlePosition(newTransformTitlePosition);
  }

  moveRight({ distance }) {
    const transformProjectsPosition = this.state.getTransformProjectsPositon();
    const transformTitlePosition = this.state.getTransformTitlePosition();
    const itemsWidth = this.state.getItemsWidth();
    const windowWidth = this.state.getWindowWidth();
    const title = this.state.getTitle();
    const items = this.state.getItems();

    let newTransformProjectsPosition = 0;
    let newTransformTitlePosition = 0;

    const sizeOutOfScreen = itemsWidth - windowWidth + 100;

    const isNotEndOfSection =
      (transformProjectsPosition - distance) * -1 < sizeOutOfScreen;

    if (isNotEndOfSection) {
      newTransformTitlePosition = transformTitlePosition - distance / 2;
      newTransformProjectsPosition = transformProjectsPosition - distance;
      title.style.transform = `translateX(${newTransformTitlePosition}px)`;
      items.style.transform = `translateX(${newTransformProjectsPosition}px)`;
    } else {
      newTransformTitlePosition = transformTitlePosition;
      newTransformProjectsPosition = -sizeOutOfScreen;
    }
    this.state.setTransformProjectsPosition(newTransformProjectsPosition);
    this.state.setTransformTitlePosition(newTransformTitlePosition);
  }

  moveProjects(direction, distance) {
    switch (direction) {
      case "left":
        this.moveLeft({ distance });
        break;
      case "right":
        this.moveRight({ distance });
        break;
    }
    this.itemEnlargment();
  }

  itemEnlargment() {
    const item = this.state.getItem();
    item.forEach((item) => {
      item.style.transform = "scale(0.990)";
      setTimeout(() => {
        item.style.transform = "scale(1.0)";
      }, 200);
    });
  }
}
