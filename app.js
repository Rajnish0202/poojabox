const shop = document.querySelector(".shop");
const home = document.querySelector(".home");
const homeDown = document.querySelector(".homeDown");
const shopDown = document.querySelector(".shopDown");
const Section = document.querySelector("section");

// const paragraph = document.querySelectorAll(".products .content h6");
// // Slicing the Paragrap

// paragraph.forEach((para) => {
//   para.innerHTML.slice(0, 19) + `...`;
//   // console.log(para.innerHTML.slice(0, 19) + `...`);
// });

home.addEventListener("mouseover", () => {
  homeDown.classList.add("active");
  shopDown.classList.remove("active");
});
shop.addEventListener("mouseover", () => {
  shopDown.classList.add("active");
  homeDown.classList.remove("active");
});

Section.addEventListener("mouseover", () => {
  homeDown.classList.remove("active");
  shopDown.classList.remove("active");
});

// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    900: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});
