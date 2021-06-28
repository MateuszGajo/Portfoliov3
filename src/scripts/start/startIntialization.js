const observers = [
  {
    selector: ".start__line--content",
    action: "setAnimation",
    type: "add",
    className: "height-max",
    delay: 1900,
  },
  {
    selector: ".start__line--content",
    action: "setAnimation",
    type: "add",
    className: "start__line--active",
    delay: 2600,
  },
  {
    selector: ".start__line--downbar",
    action: "setAnimation",
    type: "add",
    className: "start__line--downbar--active",
    delay: 2700,
  },
  {
    selector: ".start__downbar__text__line--title",
    action: "setAnimation",
    type: "add",
    className: "start__downbar__text__line--draw-active",
    delay: 3100,
  },
  {
    selector: ".start__downbar__text__line--author",
    action: "setAnimation",
    type: "add",
    className: "start__downbar__text__line--draw-active",
    delay: 3100,
  },
  {
    selector: ".start__downbar__text--title",
    action: "setAnimation",
    type: "add",
    className: "opacity-visible",
    delay: 3200,
  },
  {
    selector: ".start__downbar__text--author",
    action: "setAnimation",
    type: "add",
    className: "opacity-visible",
    delay: 3400,
  },
  {
    selector: ".start__downbar__text__line--title",
    action: "setAnimation",
    type: "add",
    className: "start__downbar__text__line--active",
    delay: 3550,
  },
  {
    selector: ".start__line--downbar",
    action: "setAnimation",
    type: "add",
    className: "start__line--active",
    delay: 3600,
  },
  {
    selector: ".start__downbar__text__line--author",
    action: "setAnimation",
    type: "add",
    className: "start__downbar__text__line--active",
    delay: 3900,
  },
  {
    selector: ".start__downbar__text__overlay--title",
    action: "setAnimation",
    type: "add",
    className: "width-max",
    delay: 4100,
  },
  {
    selector: ".start__downbar__text__overlay--author",
    action: "setAnimation",
    type: "add",
    className: "width-max",
    delay: 4300,
  },
  {
    selector: ".start__downbar__text__line--author",
    action: "setAnimation",
    type: "remove",
    className: "start__downbar__text__line--draw-active",
    delay: 5400,
  },
  {
    selector: ".start__downbar__text__line--title",
    action: "setAnimation",
    type: "remove",
    className: "start__downbar__text__line--draw-active",
    delay: 5500,
  },
  {
    selector: ".start__line--downbar",
    action: "setAnimation",
    type: "remove",
    className: "start__line--downbar--active",
    delay: 5600,
  },
  {
    selector: ".start__line--content",
    action: "setAnimation",
    type: "remove",
    className: "height-max",
    delay: 5900,
  },
  {
    selector: ".start__downbar__text--author",
    action: "setAnimation",
    type: "add",
    className: "visibility-hidden",
    delay: 6500,
  },
  {
    selector: ".start__downbar__text__overlay--author",
    action: "setAnimation",
    type: "add",
    className: "visibility-visble",
    delay: 6500,
  },
  {
    selector: ".start__downbar__container--title",
    action: "setAnimation",
    type: "add",
    className: "start__downbar__container--title--invisible",
    delay: 6500,
  },
];

document
  .querySelectorAll(".start__downbar__container")
  .forEach((item, index) => {
    observers.push({
      selector: `.start__downbar__container:nth-child(${index + 1})`,
      action: "setAnimation",
      type: "add",
      className: "start__downbar__container--move",
      delay: 6500,
    });
  });

document
  .querySelectorAll(".start__downbar__text__overlay__letter")
  .forEach((item, index) => {
    observers.push({
      selector: `.start__downbar__text__overlay__letter:nth-child(${
        index + 1
      })`,
      action: "shuffleText",
      delay: 7000,
      time: index + 1,
    });
  });

export default observers;
