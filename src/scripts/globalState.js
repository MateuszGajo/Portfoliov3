export const globalState = (() => {
  let state = {
    allowScroll: true,
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
    scrollPosition: 0,
    scrollBack: false,
  };

  const pub = {};

  pub.changeState = (newState) => {
    state = newState;
  };

  pub.getState = () => state;

  return pub;
})();
