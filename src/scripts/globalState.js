const body = document.body;
const html = document.documentElement;
export const globalState = (() => {
  let state = {
    allowScroll: true,
    windowWidth: Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0,
      document.querySelector(".start").clientWidth || 0
    ),
    windowHeight: Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0,
      document.querySelector(".start").clientHeight || 0
    ),
    websiteHeight: Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    ),
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
