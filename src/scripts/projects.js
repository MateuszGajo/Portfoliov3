import { globalState } from "./globalState";

window.addEventListener("load", function () {
  const stateModule = (() => {
    let state = {
      transformProjectsPosition: 0,
      transformTitlePosition: 0,
      startTouchPosition: 0,
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

  const projectsSectionPosition = projectsSection.offsetTop;

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

        stateModule.changeState({
          ...stateModule.getState(),
          isScrollOn: true,
        });
        console.log("koniec, scroll do góry");
        const newScrollPosition = scrollPosition - windowHeight;
        console.log(newScrollPosition);
        window.scroll({
          top: newScrollPosition,
          left: 0,
          behavior: "smooth",
        });
        globalState.changeState({
          ...globalState.getState(),
          scrollPosition: newScrollPosition,
        });

        scrollProject("off");
      }
    } else if (direction === "right") {
      if ((transformProjectsPosition - distance) * -1 < sizeOutOfScreen) {
        newTransformTitlePosition = transformTitlePosition - distance / 2;
        newTransformProjectsPosition = transformProjectsPosition - distance;
        console.log(newTransformProjectsPosition);
        title.style.transform = `translateX(${newTransformTitlePosition}px)`;
        items.style.transform = `translateX(${newTransformProjectsPosition}px)`;
      } else {
        newTransformTitlePosition = transformTitlePosition;
        newTransformProjectsPosition = -sizeOutOfScreen;
        console.log(newTransformProjectsPosition);
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
      projectsSection.addEventListener("wheel", handleWheelEvent);
      projectsSection.addEventListener("touchstart", handleTouchStartEvent);
      projectsSection.addEventListener("touchend", handleTouchEndEvent);
      stateModule.changeState({
        ...stateModule.getState(),
        isScrollOn: false,
      });
    } else if (action === "off") {
      projectsSection.removeEventListener("wheel", handleWheelEvent);
      projectsSection.removeEventListener("touchstart", handleTouchStartEvent);
      projectsSection.removeEventListener("touchend", handleTouchEndEvent);
      stateModule.changeState({
        ...stateModule.getState(),
        isScrollOn: true,
      });
    }
  };

  document.addEventListener("scroll", (e) => {
    const { isScrollOn } = stateModule.getState();
    const { scrollPosition } = globalState.getState();
    if (
      isScrollOn &&
      Math.abs(window.pageYOffset - projectsSectionPosition) < 10
    ) {
      moveProjects("right", 30);
      globalState.changeState({
        ...globalState.getState(),
        allowScroll: false,
      });
      scrollProject("on");
      stateModule.changeState({
        ...stateModule.getState(),
        isScrollOn: false,
      });
    }
  });

  projectsSection.addEventListener(
    "touchmove",
    function (e) {
      e.preventDefault();
    },
    { passive: false }
  );
});
