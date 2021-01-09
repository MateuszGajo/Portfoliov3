import { globalState } from "./globalState";

const scrollModule = (() => {
  let state = {
    scrollBlock: false,
  };
  const pub = {};

  pub.changeState = (newState) => {
    state = newState;
  };

  pub.getState = () => state;

  return pub;
})();

setTimeout(function () {
  window.scrollTo(0, 0);
  globalState.changeState({ ...globalState.getState(), scrollBack: true });
}, 100);

const scrollDown = () => {
  const { scrollBlock } = scrollModule.getState();
  const { windowHeight, scrollPosition } = globalState.getState();
  console.log(windowHeight);
  if (!scrollBlock) {
    const newScrollPosition = scrollPosition + windowHeight;
    window.scroll({
      lastTouchPosition: 0,
      top: newScrollPosition,
      left: 0,
      behavior: "smooth",
    });
    globalState.changeState({
      ...globalState.getState(),
      scrollPosition: newScrollPosition,
    });
    scrollModule.changeState({ ...scrollModule.getState(), scrollBlock: true });
    setTimeout(() => {
      scrollModule.changeState({
        ...scrollModule.getState(),
        scrollBlock: false,
      });
    }, 500);
  }
};

const scrollUp = () => {
  const { scrollBlock } = scrollModule.getState();
  const { windowHeight, scrollPosition } = globalState.getState();
  if (!scrollBlock) {
    const newScrollPosition = scrollPosition - windowHeight;
    console.log(windowHeight);
    window.scroll({
      top: newScrollPosition,
      left: 0,
      behavior: "smooth",
    });
    globalState.changeState({
      ...globalState.getState(),
      scrollPosition: newScrollPosition,
    });
    scrollModule.changeState({ ...scrollModule.getState(), scrollBlock: true });
    setTimeout(() => {
      scrollModule.changeState({
        ...scrollModule.getState(),
        scrollBlock: false,
      });
    }, 500);
  }
};

const checkScrollDirection = (e) => {
  const { allowScroll } = globalState.getState();
  if (allowScroll) {
    if (e.wheelDelta > 0) {
      scrollUp();
    } else {
      scrollDown();
    }
  }
};

const touchStart = (e) => {
  scrollModule.changeState({
    ...scrollModule.getState(),
    lastTouchPosition: e.changedTouches[0].pageY,
  });
};

const touchEnd = (e) => {
  const { lastTouchPosition } = scrollModule.getState();
  const { allowScroll } = globalState.getState();
  if (allowScroll) {
    if (lastTouchPosition - e.changedTouches[0].pageY > 10) {
      scrollDown();
    } else if (e.changedTouches[0].pageY - lastTouchPosition > 10) {
      scrollUp();
    }
  }
};

document.addEventListener("wheel", checkScrollDirection);
document.addEventListener("touchstart", touchStart);
document.addEventListener("touchend", touchEnd);
