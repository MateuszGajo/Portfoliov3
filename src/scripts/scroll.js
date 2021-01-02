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
}, 40);

const scrollDown = () => {
  const { scrollBlock } = scrollModule.getState();
  const { windowHeight, scrollPosition } = globalState.getState();
  if (!scrollBlock) {
    const newScrollPosition = scrollPosition + windowHeight;
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

const scrollUp = () => {
  const { scrollBlock } = scrollModule.getState();
  const { windowHeight, scrollPosition } = globalState.getState();
  if (!scrollBlock) {
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

document.addEventListener("wheel", checkScrollDirection);
