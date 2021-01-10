window.addEventListener("load", function () {
  const stateModule = (() => {
    let state = {
      transformProjectsPosition: 0,
      transformTitlePosition: 0,
      isScrollOn: true,
      touchStartX: 0,
    };
    const pub = {};

    pub.getState = () => {
      return state;
    };

    pub.changeState = (newState) => {
      state = newState;
    };

    return pub;
  })();

  const projectsSection = document.querySelector(".projects");
  const items = document.querySelector(".projects__items");
  const item = document.querySelectorAll(".projects__items__item");
  const title = document.querySelector(".projects__title__h1");
  const itemsWidth = items.offsetWidth;
  const windowWidth = window.innerWidth;
  const titleWidth = title.offsetWidth;
  const textTimes = Math.floor(itemsWidth / titleWidth);
  const text = "Projekty - ";
  title.innerHTML = text.repeat(textTimes) + "Projekty";

  const moveProjects = (direction, distance) => {
    const {
      transformProjectsPosition,
      transformTitlePosition,
    } = stateModule.getState();
    let newTransformProjectsPosition;
    let newTransformTitlePosition;

    const sizeOutOfScreen = itemsWidth - windowWidth + 100;

    if (direction === "left") {
      if (transformProjectsPosition + distance < 0) {
        newTransformTitlePosition = transformTitlePosition + distance / 2;
        newTransformProjectsPosition = transformProjectsPosition + distance;

        title.style.transform = `translateX(${newTransformTitlePosition}px)`;
        items.style.transform = `translateX(${newTransformProjectsPosition}px)`;
      } else {
        title.style.transform = `translateX(0)`;
        items.style.transform = `translateX(0)`;

        newTransformTitlePosition = 0;
        newTransformProjectsPosition = 0;
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
    stateModule.changeState({
      ...stateModule.getState(),
      transformProjectsPosition: newTransformProjectsPosition,
      transformTitlePosition: newTransformTitlePosition,
    });

    item.forEach((item) => {
      item.style.transform = "scale(0.990)";
      setTimeout(() => {
        item.style.transform = "scale(1.0)";
      }, 200);
    });
  };

  const handleTouchStartEvent = (e) => {
    const position = e.changedTouches[0].pageX;
    stateModule.changeState({
      ...stateModule.getState(),
      touchStartX: position,
    });
  };

  const handleTouchEndEvent = (e) => {
    const { touchStartX } = stateModule.getState();
    const position = e.changedTouches[0].pageX;
    const distance = position - touchStartX;
    if (distance > 0) {
      moveProjects("left", distance);
    } else if (distance < 0) {
      moveProjects("right", distance * -1);
    }
  };

  const handleWheelEvent = (e) => {
    if (e.deltaY > 0) {
      moveProjects("right", 20);
    } else if (e.deltaY < 0) {
      moveProjects("left", 20);
    }
  };

  const scrollProject = (action) => {
    if (action === "on") {
      addEventListener("wheel", handleWheelEvent);
      addEventListener("touchstart", handleTouchStartEvent);
      addEventListener("touchend", handleTouchEndEvent);
      stateModule.changeState({
        ...stateModule.getState(),
        isScrollOn: false,
      });
    } else if (action === "off") {
      removeEventListener("wheel", handleWheelEvent);
      removeEventListener("touchstart", handleTouchStartEvent);
      removeEventListener("touchend", handleTouchEndEvent);
      stateModule.changeState({
        ...stateModule.getState(),
        isScrollOn: true,
      });
    }
  };

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  }

  const keys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1,
  };

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  addEventListener("wheel", (e) => {
    const { transformProjectsPosition, isScrollOn } = stateModule.getState();
    const distanceToSection = projectsSection.offsetTop - window.scrollY;

    if (
      distanceToSection < window.innerHeight / 3 &&
      isScrollOn &&
      e.deltaY > 0
    ) {
      //   window.scroll({
      //     top: projectsSection.offsetTop,
      //     behavior: "smooth",
      //   });

      scrollProject("on");

      stateModule.changeState({
        ...stateModule.getState(),
        transformProjectsPosition: 1,
      });

      if (window.removeEventListener)
        window.addEventListener("DOMMouseScroll", preventDefault, false);
      document.addEventListener("wheel", preventDefault, {
        passive: false,
      });
      window.onmousewheel = document.onmousewheel = preventDefault;
      document.onkeydown = preventDefaultForScrollKeys;
      document.querySelector("body").style.overflow = "hidden";
    } else if (transformProjectsPosition === 0 && !isScrollOn) {
      scrollProject("off");

      if (window.removeEventListener)
        window.removeEventListener("DOMMouseScroll", preventDefault, false);
      document.removeEventListener("wheel", preventDefault, {
        passive: false,
      });
      window.onmousewheel = document.onmousewheel = null;
      document.onkeydown = null;
      //   document.querySelector("body").style.overflow = "visible";
    }
  });
});
