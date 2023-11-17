import { createMarkup } from "../templates/templateCheckout";
import { save, load } from "../templates/helpers";

const selectors = {
    container: document.querySelector(".js-list"),
    totalPrice: document.querySelector(".js-total-price"),
    clear: document.querySelector(".js-btn")
}

const PRODUCT_LS_KEY = 'checkout';
const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) || [];
let totalPrice;

if(products.length) {
    selectors.clear.hidden = false;
    totalPrice = products.reduce((acc, { qty, price }) => acc += qty * price, 0);
}

selectors.totalPrice.textContent = totalPrice ? `Total price: ${totalPrice}` : 'Your basket is empty';
selectors.container.insertAdjacentHTML("beforeend", createMarkup(products));
selectors.clear.addEventListener("click", handleClick);

function handleClick() {
    localStorage.removeItem(PRODUCT_LS_KEY);
    window.location.href = "../index.html"
}
