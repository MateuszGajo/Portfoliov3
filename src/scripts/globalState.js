export const globalState = (() => {
  let state = {
    allowScroll: true,
  };

  const pub = {};

  pub.changeState = (newState) => {
    state = newState;
  };

  pub.getState = () => state;

  return pub;
})();
