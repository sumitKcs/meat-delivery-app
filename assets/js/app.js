window.addEventListener("DOMContentLoaded", () => {
  const carousel_wrapper = document.querySelectorAll(".carousel_wrapper");
  const media_scroller = document.querySelectorAll(".media_scroller");
  const offers_scroller = document.getElementById("offer_scroller");
  const next = document.querySelectorAll(".next");
  const prev = document.querySelectorAll(".prev");
  let navigation_items = document.querySelectorAll(".navigation_items");

  carousel_wrappers = Array.from(carousel_wrapper);
  carousel_wrappers.forEach((element) => {
    const nav_buttons = element.lastElementChild;
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
      let first_element_width =
        carousel.parentElement.firstElementChild.firstElementChild.clientWidth;
      carousel.scrollLeft += first_element_width;
    });
  });

  prev_elements = Array.from(prev);
  prev_elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      const carousel = element.parentElement.parentElement.firstElementChild;
      const first_element_width =
        carousel.parentElement.firstElementChild.firstElementChild.clientWidth;
      carousel.scrollLeft -= first_element_width;
    });
  });

  function setActiveLink() {
    navigation_items = Array.from(navigation_items);
    const currentURL = window.location.pathname;
    navigation_items.forEach((item) => {
      let itemURL = item.getAttribute("href");
      itemURL = itemURL.replace(/^(\.\.)/, "");
      if (currentURL === itemURL) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  // Call the setActiveLink function on page load and whenever the URL changes
  setActiveLink();
  window.addEventListener("popstate", setActiveLink);

});
