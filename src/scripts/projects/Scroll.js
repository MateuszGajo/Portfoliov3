import { globalState } from "../globalState";
import State from "./State";
export default class Scroll {
  constructor(animation) {
    this.state = new State();
    this.animation = animation;
  }

  handleTouchStartEvent(e) {
    const position = e.changedTouches[0].pageX;
    this.state.setTouchStartX(position);
  }

  handleTouchEndEvent(e) {
    const touchStartX = this.state.getTouchStartX();
    const position = e.changedTouches[0].pageX;
    const distance = position - touchStartX;
    if (distance > 0) {
      this.animation.moveProjects("left", distance);
    } else if (distance < 0) {
      this.animatiomoveProjects("right", distance * -1);
    }
  }

  handleWheelEvent(e) {
    if (e.deltaY > 0) {
      this.animation.moveProjects("right", 20);
    } else if (e.deltaY < 0) {
      this.animation.moveProjects("left", 20);
    }
  }

  addProjectsScrolling() {
    const projectsSection = this.state.getProjectsSection();

    projectsSection.addEventListener("wheel", this.handleWheelEvent.bind(this));
    projectsSection.addEventListener(
      "touchstart",
      this.handleTouchStartEvent.bind(this)
    );
    projectsSection.addEventListener(
      "touchend",
      this.handleTouchEndEvent.bind(this)
    );
    this.state.setIsScrollOn(true);
  }

  removeProjectsScrolling() {
    const projectsSection = this.state.getProjectsSection();

    projectsSection.removeEventListener(
      "wheel",
      this.handleWheelEvent.bind(this)
    );
    projectsSection.removeEventListener(
      "touchstart",
      this.handleTouchStartEvent.bind(this)
    );
    projectsSection.removeEventListener(
      "touchend",
      this.handleTouchEndEvent.bind(this)
    );
    this.state.setIsScrollOn(true);
  }

  scrollProject(action) {
    switch (action) {
      case "on":
        this.addProjectsScrolling();
        break;
      case "off":
        this.removeProjectsScrolling();
        break;
    }
  }

  listener() {
    document.addEventListener("scroll", (e) => {
      const isScrollOn = this.state.getIsScrollOn();
      const projectsSectionPosition = this.state.getProjectsSectionPosition();

      const { scrollPosition } = globalState.getState();

      const isUserOnSection =
        Math.abs(window.pageYOffset - projectsSectionPosition) < 10 &&
        Math.abs(scrollPosition - projectsSectionPosition) < 10;

      if (isScrollOn && isUserOnSection) {
        this.animation.moveProjects("right", 30);

        globalState.changeState({
          ...globalState.getState(),
          allowScroll: false,
        });
        this.state.setIsScrollOn(false);

        this.scrollProject("on");
      }
    });

    const projectsSection = this.state.getProjectsSection();
    projectsSection.addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault();
      },
      { passive: false }
    );
  }
}
