import { globalState } from "../globalState";
const { windowHeight, windowWidth } = globalState.getState();

const SkillsDescriptionTextEl = document.querySelector(
  ".skills__description__text"
);

export const startDescription = [
  {
    selector: ".skills__description__title",
    action: "add",
    className: "opacity-visible",
    delay: 200,
  },
  ...(windowWidth < 1023
    ? {
        selector: ".skills__description__title",
        action: "style",
        styles: [
          {
            key: "bottom",
            value: `${windowHeight - SkillsDescriptionTextEl.offsetTop + 10}px`,
          },
          {
            key: "transform",
            value: `translateX(-50%) scale(1)`,
          },
        ],
        delay: 200,
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
            value: `${windowHeight - SkillsDescriptionTextEl.offsetTop + 10}px`,
          },
          {
            key: "transform",
            value: `translateX(-50%) scale(1)`,
          },
        ],
      }),
  {
    selector: ".skills__description__text",
    action: "add",
    className: "skills__description__text--active",
    delay: 1800,
  },
];

export const startTechnologies = (delay) => {};
