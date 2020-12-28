// setTimeout(function () {
//   window.scrollTo(0, 0);
// }, 30);

scrollModule = (() => {
  let state = {
    scrollPosition: 0,
    windowHeight: window.innerHeight,
  };

  const pub = {};
  pub.changeState = (newState) => {
    state = newState;
  };

  pub.getState = () => {
    return state;
  };

  return pub;
})();

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
  if (e.wheelDelta > 0) {
    scrollUp();
  } else {
    scrollDown();
  }
};

document.addEventListener("wheel", checkScrollDirection);
