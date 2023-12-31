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

  // cart quantity increase decrease
  // JavaScript
  const cards = document.querySelectorAll(".cart_items_wrapper");

  cards.forEach((card, index) => {
    const plusButton = card.querySelector(".quantity_plus");
    const minusButton = card.querySelector(".quantity_minus");
    const quantityElement = card.querySelector(".item_quantity");
    console.log();
    plusButton.addEventListener("click", () =>
      increaseQuantity(quantityElement)
    );
    minusButton.addEventListener("click", () =>
      decreaseQuantity(quantityElement)
    );
  });

  function increaseQuantity(quantityElement) {
    let currentQuantity = parseInt(quantityElement.textContent, 10);
    currentQuantity++;
    quantityElement.textContent = currentQuantity;
  }

  function decreaseQuantity(quantityElement) {
    let currentQuantity = parseInt(quantityElement.textContent, 10);
    if (currentQuantity > 1) {
      currentQuantity--;
      quantityElement.textContent = currentQuantity;
    }
  }
});

// rent cart qunatity increase/decarease
const rent_cart_details = document.querySelector(".rent_cart_qunatity_wrapper");
if (rent_cart_details) {
  const plusButton = rent_cart_details.querySelector(".quantity_plus");
  const minusButton = rent_cart_details.querySelector(".quantity_minus");
  const quantityElement = rent_cart_details.querySelector(".item_quantity");
  console.log(plusButton);
  plusButton.addEventListener("click", () => increaseQuantity(quantityElement));
  minusButton.addEventListener("click", () =>
    decreaseQuantity(quantityElement)
  );
  function increaseQuantity(quantityElement) {
    let currentQuantity = parseInt(quantityElement.textContent, 10);
    currentQuantity++;
    quantityElement.textContent = currentQuantity;
  }

  function decreaseQuantity(quantityElement) {
    let currentQuantity = parseInt(quantityElement.textContent, 10);
    if (currentQuantity > 1) {
      currentQuantity--;
      quantityElement.textContent = currentQuantity;
    }
  }
}

// login/register validations

function show() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById("showimg").src =
      "https://static.thenounproject.com/png/777494-200.png";
  } else {
    x.type = "password";
    document.getElementById("showimg").src =
      "https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png";
  }
}

// orders page tabs
const returns_tab = document.getElementById("returns_tab");
const orders_tab = document.getElementById("orders_tab");
let tab_content_container = document.getElementById("tab_content_container");
const returns_tab_items = document.getElementById("returns_tab_items");
const orders_tab_items = document.getElementById("orders_tab_items");

if (orders_tab) {
  orders_tab_items.style.display = "flex";
  tab_content_container.innerHTML = "";
  tab_content_container.appendChild(orders_tab_items);
}

function ordersTabHandler(e) {
  orders_tab_items.style.display = "flex";
  tab_content_container.innerHTML = "";
  tab_content_container.appendChild(orders_tab_items);
  orders_tab.style.borderBottom = "3px solid var(--primary-color)";
  returns_tab.style.borderBottom = "none";
}

function returnsTabHandler(e) {
  returns_tab_items.style.display = "flex";
  tab_content_container.innerHTML = "";
  tab_content_container.appendChild(returns_tab_items);
  returns_tab.style.borderBottom = "3px solid var(--primary-color)";
  orders_tab.style.borderBottom = "none";
}

// Sort the card items based on price low to high
const price_low_to_high = document.getElementById("price_low_to_high");
if (price_low_to_high) {
  price_low_to_high.addEventListener("click", function () {
    // Get the card container and all the card items
    let cardContainers = document.querySelectorAll(".food_card_grid");
    cardContainers = Array.from(cardContainers);
    cardContainers.forEach((cardContainer) => {
      const cardItems = Array.from(
        cardContainer.querySelectorAll(".food_card_item")
      );

      // Sort the card items based on price low to high
      cardItems.sort((a, b) => {
        const priceA = parseInt(
          a.querySelector(".price").textContent.replace(/[^0-9]/g, ""),
          10
        );
        const priceB = parseInt(
          b.querySelector(".price").textContent.replace(/[^0-9]/g, ""),
          10
        );

        return priceA - priceB;
      });

      // Clear the card container
      cardContainer.innerHTML = "";

      // Append the sorted card items back to the container
      cardItems.forEach((card) => {
        cardContainer.appendChild(card);
      });
    });
  });
}

// Sort the card items based on price low to high
const price_high_to_low = document.getElementById("price_high_to_low");
if (price_high_to_low) {
  price_high_to_low.addEventListener("click", function () {
    // Get the card container and all the card items
    let cardContainers = document.querySelectorAll(".food_card_grid");
    cardContainers = Array.from(cardContainers);
    cardContainers.forEach((cardContainer) => {
      const cardItems = Array.from(
        cardContainer.querySelectorAll(".food_card_item")
      );

      // Sort the card items based on price low to high
      cardItems.sort((a, b) => {
        const priceA = parseInt(
          a.querySelector(".price").textContent.replace(/[^0-9]/g, ""),
          10
        );
        const priceB = parseInt(
          b.querySelector(".price").textContent.replace(/[^0-9]/g, ""),
          10
        );

        return priceB - priceA;
      });

      // Clear the card container
      cardContainer.innerHTML = "";

      // Append the sorted card items back to the container
      cardItems.forEach((card) => {
        cardContainer.appendChild(card);
      });
    });
  });
}

// Sort the food card items on alphabetical order A-Z
const receipe_a_to_z = document.getElementById("receipe_a_to_z");
if (receipe_a_to_z) {
  receipe_a_to_z.addEventListener("click", function () {
    // Get the card container and all the card items
    let cardContainers = document.querySelectorAll(".food_card_grid");
    cardContainers = Array.from(cardContainers);
    cardContainers.forEach((cardContainer) => {
      const cardItems = Array.from(
        cardContainer.querySelectorAll(".food_card_item")
      );

      // Sort the card items based on the recipe title (A-Z)
      cardItems.sort((a, b) => {
        const recipeTitleA = a.querySelector("#recipe_title").textContent;
        const recipeTitleB = b.querySelector("#recipe_title").textContent;

        return recipeTitleA.localeCompare(recipeTitleB, "en", {
          sensitivity: "base",
        });
      });

      // Clear the card container
      cardContainer.innerHTML = "";

      // Append the sorted card items back to the container
      cardItems.forEach((card) => {
        cardContainer.appendChild(card);
      });
    });
  });
}

// Sort the food card items on alphabetical order Z-A
const receipe_z_to_a = document.getElementById("receipe_z_to_a");
if (receipe_z_to_a) {
  receipe_z_to_a.addEventListener("click", function () {
    // Get the card container and all the card items
    let cardContainers = document.querySelectorAll(".food_card_grid");
    cardContainers = Array.from(cardContainers);
    cardContainers.forEach((cardContainer) => {
      const cardItems = Array.from(
        cardContainer.querySelectorAll(".food_card_item")
      );

      // Sort the card items based on the recipe title (Z-A)
      cardItems.sort((a, b) => {
        const recipeTitleA = a.querySelector("#recipe_title").textContent;
        const recipeTitleB = b.querySelector("#recipe_title").textContent;

        return recipeTitleB.localeCompare(recipeTitleA, "en", {
          sensitivity: "base",
        });
      });

      // Clear the card container
      cardContainer.innerHTML = "";

      // Append the sorted card items back to the container
      cardItems.forEach((card) => {
        cardContainer.appendChild(card);
      });
    });
  });
}
