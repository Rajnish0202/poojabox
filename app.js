const shop = document.querySelector(".shop");
const home = document.querySelector(".home");
const homeDown = document.querySelector(".homeDown");
const shopDown = document.querySelector(".shopDown");
const Section = document.querySelector("section");

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

// Side bar

const sidebar = document.querySelector(".sidebar");
const Bar = document.querySelector(".bar");
const Close = document.querySelector(".close");
const Search = document.querySelector(".search");
const SearchDiv = document.querySelector(".search-div");
// console.log(sidebar, Bar, Search, SearchDiv);

Bar.addEventListener("click", () => {
  sidebar.classList.add("show");
  sidebar.classList.remove("hide");
});

Close.addEventListener("click", () => {
  sidebar.classList.remove("show");
  sidebar.classList.add("hide");
});

Search.addEventListener("click", () => {
  SearchDiv.classList.toggle("active");
});

// Side Product toggle

const SideProduct = document.querySelectorAll(".side-content");
// console.log(SideProduct);

SideProduct.forEach((product) => {
  const Products = product.querySelector(".side-products-box");
  const Icon = product.querySelector("i");
  // console.log(Icon);
  Products.classList.remove("active");
  Icon.classList.remove("fa-minus");
  product.addEventListener("click", () => {
    Products.classList.toggle("active");
    Icon.classList.toggle("fa-plus");
    Icon.classList.toggle("fa-minus");
  });
  // console.log(Products);
});

// On Scroll Header Fixed

const Header = document.querySelector("header");
const Top = document.querySelector(".top");
const Logo = document.querySelector("#logo");
const LogoScroll = document.querySelector("#logoScroll");

window.addEventListener("scroll", () => {
  if (scrollY >= 100) {
    Header.classList.add("active");
    Top.classList.add("active");
    Logo.classList.add("active");
    LogoScroll.classList.add("active");
    homeDown.classList.remove("active");
    shopDown.classList.remove("active");
  } else {
    Header.classList.remove("active");
    Top.classList.remove("active");
    Logo.classList.remove("active");
    LogoScroll.classList.remove("active");
  }
});

// Floating Top

const Float = document.querySelector(".floatingTop");

window.addEventListener("scroll", () => {
  if (scrollY >= 400) {
    Float.classList.add("active");
  } else {
    Float.classList.remove("active");
  }
});
