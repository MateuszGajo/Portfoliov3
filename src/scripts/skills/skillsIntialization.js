import { globalState } from "../globalState";
const { windowHeight, windowWidth } = globalState.getState();

const SkillsDescriptionTextEl = document.querySelector(
  ".skills__description__text"
);

const skillItem = document.querySelector(
  ".skills__technologies__wrapper__container"
);

export const observers = (delay) => [
  {
    selector: ".skills__description__title",
    action: "add",
    className: "opacity-visible",
    delay: 200,
    type: "description",
  },
  {
    ...(windowWidth < 1023
      ? {
          selector: ".skills__description__title",
          action: "style",
          styles: [
            {
              key: "bottom",
              value: `${
                windowHeight - SkillsDescriptionTextEl.offsetTop + 10
              }px`,
            },
            {
              key: "transform",
              value: `translateX(-50%) scale(1)`,
            },
          ],
          delay: 200,
          type: "description",
        }
      : {
          selector: ".skills__description__title",
          action: "style",
          delay: 600,
          styles: [
            {
              key: "left",
              value: "20%",
            },
            {
              key: "bottom",
              value: `${
                windowHeight - SkillsDescriptionTextEl.offsetTop + 10
              }px`,
            },
            {
              key: "transform",
              value: `translateX(-50%) scale(1)`,
            },
          ],
          type: "description",
        }),
  },
  {
    selector: ".skills__description__text",
    action: "add",
    className: "skills__description__text--active",
    delay: 1800,
    type: "description",
  },
  {
    selector: ".skills__technologies",
    action: "add",
    className: "opacity-visible",
    delay: 200 + delay,
    type: "technologies",
  },
  {
    selector:
      ".skills__technologies__wrapper--right .skills__technologies__wrapper__container:nth-child(1)",
    action: "add",
    className: "skills__technologies__wrapper__container--active",
    delay: 400 + delay,
    type: "technologies",
  },
  {
    selector: ".skills__technologies__line",
    action: "add",
    className: "skills__technologies__line--active",
    delay: 1200 + delay,
    type: "technologies",
  },
  {
    selector: ".skills__technologies__line",
    action: "add",
    delay: 1300 + delay,
    styles: [
      {
        key: "height",
        value:
          windowHeight / 2 -
          skillItem.offsetHeight / 2 +
          windowHeight / 3 +
          "px",
      },
    ],
    type: "technologies",
  },
];
