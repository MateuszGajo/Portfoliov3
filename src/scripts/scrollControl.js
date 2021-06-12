export class ControlScroll {
  constructor(section) {
    this.keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
    this.supportsPassive = false;
    this.section = document.querySelector(section);
  }

  checkPassive() {
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: function () {
            this.supportsPassive = true;
          },
        })
      );
    } catch (e) {}
  }

  preventDefault(e) {
    e.preventDefault();
  }

  preventDefaultForScrollKeys(e) {
    if (this.keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  preventDefaultForScrollKeys(e) {
    if (this.keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  disableScroll() {
    const wheelOpt = this.supportsPassive ? { passive: false } : false;
    const wheelEvent =
      "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

    this.section.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    this.section.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    this.section.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    this.section.addEventListener(
      "keydown",
      preventDefaultForScrollKeys,
      false
    );
  }

  enableScroll() {
    this.section.removeEventListener("DOMMouseScroll", preventDefault, false);
    this.section.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    this.section.removeEventListener("touchmove", preventDefault, wheelOpt);
    this.section.removeEventListener(
      "keydown",
      preventDefaultForScrollKeys,
      false
    );
  }
}
