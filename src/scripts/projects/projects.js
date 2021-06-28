import State from "./State";
import Scroll from "./Scroll";
import Animation from "./Animation";
window.addEventListener("load", function () {
  class Projects {
    constructor() {
      this.state = new State();
      this.animation = new Animation(this);
      this.scroll = new Scroll(this.animation);
    }
    start() {
      this.scroll.listener();
    }
    setScrollProjectOff() {
      this.scroll.scrollProject("off");
    }
  }

  const projects = new Projects();
  projects.start();
});
