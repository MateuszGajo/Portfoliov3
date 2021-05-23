const developerTitle = document.querySelectorAll(".start__content__p")[2];
const skillsDescription = document.querySelector(
  ".skills__description__text__span"
);
const skillsTitle = document.querySelector(".skills__description__title__h2");
const aboutmeFirstElement = document.querySelectorAll(
  ".about__container__item--top-left .about__container__item__text__span"
)[0];
const aboutmeSecondElement = document.querySelectorAll(
  ".about__container__item--bottom-right .about__container__item__text__span"
)[0];
const aboutmeThirdElement = document.querySelectorAll(
  ".about__container__item--top-right .about__container__item__text__span"
)[0];
const aboutmeFourthElement = document.querySelectorAll(
  ".about__container__item--bottom-left .about__container__item__text__span"
)[0];
const aboutmeFifthElement = document.querySelectorAll(
  ".about__container__item--top-left .about__container__item__text__span"
)[1];
const aboutmeSixthElement = document.querySelectorAll(
  ".about__container__item--bottom-right .about__container__item__text__span"
)[1];
const aboutmeSeventhElement = document.querySelectorAll(
  ".about__container__item--top-right .about__container__item__text__span"
)[1];
const aboutmeEighthElement = document.querySelectorAll(
  ".about__container__item--bottom-left .about__container__item__text__span"
)[1];
const aboutmeTitle = document.querySelector(".about__title__text");
const keepScrollingText = document.querySelector(".projects__items__info__h1");
const codeButtonText = document.querySelectorAll(
  ".projects__items__item__desktop__shorts__icons-code"
);
const liveButtonText = document.querySelectorAll(
  ".projects__items__item__desktop__shorts__icons-demo"
);
const codeMobileButtonText = document.querySelectorAll(
  ".projects__items__item__mobile__shorts__icons-code"
);
const projectTitle = document.querySelector(".projects__title__h1");
const roomPriceDescription = document
  .querySelectorAll(".projects__items__item")[3]
  .querySelector(".projects__items__item__info__text-secondary");
const blogDescription = document
  .querySelectorAll(".projects__items__item")[2]
  .querySelector(".projects__items__item__info__text-secondary");
const bringoDescription = document
  .querySelectorAll(".projects__items__item")[1]
  .querySelector(".projects__items__item__info__text-secondary");
const SharkyDescription = document
  .querySelectorAll(".projects__items__item")[0]
  .querySelector(".projects__items__item__info__text-secondary");
const button = document.querySelector(".language-button");

const changeLanguage = (e) => {
  const el = e.target;
  const lng = el.getAttribute("data-lng");

  if (lng === "pl") {
    el.setAttribute("data-lng", "en");
    el.setAttribute("src", "assets/images/britain.jpg");

    developerTitle.innerHTML = "Deweloper";
    skillsDescription.innerHTML =
      "With 2 years experience in the field of Front-end and Back-end technologies, I’m seeking for new challenges which could use my knowledge while continuing developing it and satisfy my curiosity.";
    skillsTitle.innerHTML = "Skills";
    aboutmeFirstElement.innerHTML = "2rd year IT student at SGGW.";
    aboutmeSecondElement.innerHTML =
      "2 years of non comercial experience in working with web apps.";
    aboutmeThirdElement.innerHTML =
      "Developer focused on providing solutions in the field of web applications.";
    aboutmeFourthElement.innerHTML =
      "Eager to learn and focused on work with technologies as React, Typescript, .Net.";
    aboutmeFifthElement.innerHTML =
      "Uses tried and tested solutions to common problems in software design.";
    aboutmeSixthElement.innerHTML = "Security and performace are priority.";
    aboutmeSeventhElement.innerHTML =
      "Constantly looking for new challenges and opportunity to learn.";
    aboutmeEighthElement.innerHTML = "Currently learning .net technology..";
    aboutmeTitle.innerHTML = "About me";
    keepScrollingText.innerHTML = "Keep scrolling";
    liveButtonText.forEach((item) => (item.innerHTML = "Live"));
    codeButtonText.forEach((item) => (item.innerHTML = "Code"));
    codeMobileButtonText.forEach((item) => (item.innerHTML = "Code"));
    projectTitle.innerHTML =
      "Projects - Projects - Projects - Projects - Projects - Projects - Projects - Projects - Projects - Projects - Projects";
    SharkyDescription.innerHTML = "Social media";
    bringoDescription.innerHTML = "Vocabulary app";
    bringoDescription.innerHTML = "Vocabulary app";
    blogDescription.innerHTML = "Cooking blog";
    roomPriceDescription.innerHTML = "Rooms for rent";
  } else if (lng === "en") {
    el.setAttribute("data-lng", "pl");
    el.setAttribute("src", "assets/images/poland.jpg");

    developerTitle.innerHTML = "Developer";
    skillsDescription.innerHTML =
      "Z 2-letnim doświadczeniem w technologiach Front-end i Back-end, szukam nowych wyzwań, które pozwolą mi się rozwinąć i zaspokoją moją ciekawość.";
    skillsTitle.innerHTML = "Umiejętności";
    aboutmeFirstElement.innerHTML = "Student drugiego roku na SGGW";
    aboutmeSecondElement.innerHTML =
      "2 lata doświadczenia w tworzenia niekomercyjnych aplikacji webowych";
    aboutmeThirdElement.innerHTML =
      "Deweloper dostarczjący webowe rozwiązania dla potrzeb użytkowników";
    aboutmeFourthElement.innerHTML =
      "Dobrze radzi sobie w technologiach jak React, Typescript, .Net, ale nie zamyka się na na nowe doświadczenia.";
    aboutmeFifthElement.innerHTML =
      "Stosuje sprawdzone rozwiązania podczas procesu tworzenia oprogramowania.";
    aboutmeSixthElement.innerHTML =
      "Bezpieczeństwo oraz wydajność odgrywają dużą role.";
    aboutmeSeventhElement.innerHTML =
      "Nieustannie rozwijący swoją pasję poprzez szukanie nowych wyzwań";
    aboutmeEighthElement.innerHTML = "Aktualnie uczy sie technologi .net";
    aboutmeTitle.innerHTML = "O mnie";
    keepScrollingText.innerHTML = "Nie przestawaj scrollować";
    liveButtonText.forEach((item) => (item.innerHTML = "Podgląd"));
    codeButtonText.forEach((item) => (item.innerHTML = "Kod"));
    codeMobileButtonText.forEach((item) => (item.innerHTML = "Kod"));
    projectTitle.innerHTML =
      "Projekty - Projekty - Projekty - Projekty - Projekty - Projekty - Projekty - Projekty - Projekty - Projekty - Projekty";
    SharkyDescription.innerHTML = "Media społecznościowe";
    bringoDescription.innerHTML = "Apka do nauki słówek";
    blogDescription.innerHTML = "Blog kulinarny";
    roomPriceDescription.innerHTML = "Pokoje do wynajęcia";
  }
};

button.addEventListener("click", changeLanguage);
