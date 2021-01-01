setTimeout(function () {
  window.scrollTo(0, 0);
}, 40);

import { globalState } from "./globalState";
console.log(globalState);

const windowHeight = window.innerHeight;

const scrollDown = () =>
  window.scrollBy({
    top: windowHeight,
    behavior: "smooth",
  });

const scrollUp = () => {
  window.scrollBy({
    top: windowHeight * -1,
    left: 0,
    behavior: "smooth",
  });
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
