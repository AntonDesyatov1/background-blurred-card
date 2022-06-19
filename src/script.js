function initEventListeners() {
  const courseCardHeader = document.querySelector(".card__course--header");
  const courseCardBackground = document.querySelector(".card__background");
  const button = document.querySelector(".card__course--button");
  initMouseOverListener(courseCardHeader, courseCardBackground);
  initMouseLeaveListener(courseCardHeader, courseCardBackground, button);
}

const initMouseOverListener = (courseCardHeader, courseCardBackground) => {
  const courseButton = document.querySelector(".card__course--button");
  courseCardHeader.addEventListener("mouseover", () => {
    courseButton.className = "card__course--button-active";
    courseCardBackground.className = "card__background--blurred";
    courseCardHeader.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae augue tristique, pellentesque neque non, molestie justo.";
    courseCardHeader.className = "card__course--header-active";
    document.querySelector(".card__course--header-active").append(courseButton);
  });

  courseCardBackground.addEventListener("mouseover", () => {
    courseButton.className = "card__course--button-active";
    courseCardBackground.className = "card__background--blurred";
    courseCardHeader.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae augue tristique, pellentesque neque non, molestie justo.";
    courseCardHeader.className = "card__course--header-active";
    document.querySelector(".card__course--header-active").append(courseButton);
  });
};

const initMouseLeaveListener = (
  courseCardHeader,
  courseCardBackground,
  button
) => {
  courseCardHeader.addEventListener("mouseleave", () => {
    console.log("left");
    button.className = "card__course--button";
    courseCardHeader.innerHTML = "Learn fun stuff online free";
    courseCardBackground.className = "card__background";
    courseCardHeader.className = "card__course--header";
  });

  courseCardBackground.addEventListener("mouseleave", () => {
    console.log("left");
    button.className = "card__course--button";
    courseCardHeader.innerHTML = "Learn fun stuff online free";
    courseCardBackground.className = "card__background";
    courseCardHeader.className = "card__course--header";
  });
};
