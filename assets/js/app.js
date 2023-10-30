window.addEventListener("DOMContentLoaded", () => {
  const carousel_wrapper = document.querySelectorAll(".carousel_wrapper");
  const media_scroller = document.querySelectorAll(".media_scroller");
  const next = document.querySelectorAll(".next");
  const prev = document.querySelectorAll(".prev");

  carousel_wrappers = Array.from(carousel_wrapper);
  carousel_wrappers.forEach((element) => {
    const nav_buttons = document.querySelector(".nav_button");
    if (nav_buttons) {
      const element_height = element.clientHeight;
      const nav_buttons_height = element_height / 3;
      nav_buttons.style.top = `${nav_buttons_height}px`;
    }
  });

  next_elements = Array.from(next);
  next_elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      const carousel = element.parentElement.parentElement.firstElementChild;
      console.log(carousel);
      let first_element_width =
        carousel.parentElement.firstElementChild.firstElementChild.clientWidth;
      carousel.scrollLeft += first_element_width;
    });
  });

  prev_elements = Array.from(prev);
  prev_elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      const carousel = element.parentElement.parentElement.firstElementChild;
      console.log(carousel);
      const first_element_width =
        carousel.parentElement.firstElementChild.firstElementChild.clientWidth;

      carousel.scrollLeft -= first_element_width;
    });
  });
});
