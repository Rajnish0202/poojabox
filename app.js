const shop = document.querySelector(".shop");
const home = document.querySelector(".home");
const homeDown = document.querySelector(".homeDown");
const shopDown = document.querySelector(".shopDown");

console.log(shop, home, homeDown, shopDown);

home.addEventListener("mouseover", () => {
  homeDown.classList.add("active");
  shopDown.classList.remove("active");
});
shop.addEventListener("mouseover", () => {
  shopDown.classList.add("active");
  homeDown.classList.remove("active");
});
