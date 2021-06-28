import { globalState } from "../globalState";
import State from "./State";
export default class Animation {
  constructor(parent) {
    this.parent = parent;
    this.state = new State();
  }
  moveProjects(direction, distance) {
    const transformProjectsPosition = this.state.getTransformProjectsPositon();
    const transformTitlePosition = this.state.getTransformTitlePosition();
    const itemsWidth = this.state.getItemsWidth();
    const windowWidth = this.state.getWindowWidth();
    const title = this.state.getTitle();
    const items = this.state.getItems();
    const item = this.state.getItem();

    let newTransformProjectsPosition;
    let newTransformTitlePosition;

    const sizeOutOfScreen = itemsWidth - windowWidth + 100;

    if (direction === "left") {
      if (transformProjectsPosition + distance < -50) {
        newTransformTitlePosition = transformTitlePosition + distance / 2;
        newTransformProjectsPosition = transformProjectsPosition + distance;

        title.style.transform = `translateX(${newTransformTitlePosition}px)`;
        items.style.transform = `translateX(${newTransformProjectsPosition}px)`;
      } else {
        const { windowHeight, scrollPosition } = globalState.getState();
        title.style.transform = `translateX(0)`;
        items.style.transform = `translateX(0)`;

        newTransformTitlePosition = 0;
        newTransformProjectsPosition = 0;
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
    } else if (direction === "right") {
      if ((transformProjectsPosition - distance) * -1 < sizeOutOfScreen) {
        newTransformTitlePosition = transformTitlePosition - distance / 2;
        newTransformProjectsPosition = transformProjectsPosition - distance;
        title.style.transform = `translateX(${newTransformTitlePosition}px)`;
        items.style.transform = `translateX(${newTransformProjectsPosition}px)`;
      } else {
        newTransformTitlePosition = transformTitlePosition;
        newTransformProjectsPosition = -sizeOutOfScreen;
      }
    }
    this.state.setTransformProjectsPosition(newTransformProjectsPosition);
    this.state.setTransformTitlePosition(newTransformTitlePosition);

    item.forEach((item) => {
      item.style.transform = "scale(0.990)";
      setTimeout(() => {
        item.style.transform = "scale(1.0)";
      }, 200);
    });
  }
}
