
// *************Практика*************** \\
// Для практичного завдання використаємо збірку Parcel та ES6 модулі
// Застосувати готові стилі з файлу style.css
// Потрібно створити інтернет-магазин в якому буде 2 сторінки.

// Сторінка Home має:
// 1 Містити картки товарів (їх можна знайти в файлі products.json)
// (приклад однієї картки https://prnt.sc/klV2uzLIcG8w)
// 2 На списку товарів реалізовано делегування подій на додавання
// товару в кошик
// 3 Для додавання товару в кошик використовуй LS
// 4 Під час додавання контролюй кількість доданих товарів, 
// для цього створи в об'єкті доданого товару новий ключ quantity

// Сторінка Checkout має:
// 1 Список карток доданих товарів, кожна картка має містити
// кількість куплених товарів та загальна вартість за даний товар.
// (приклад однієї картки https://prnt.sc/ssZA4rzw1x9L)
// 2 Повідомлення про загальну вартість покупки, якщо кошик порожній,
// то повідомлення "Your basket is empty"
// 3 Кнопку для очищення кошика, після натискання на неї всі
// товари видаляються, а користувача перенаправляємо на сторінку Home


import { createMarkup } from "./templates/templateProduct";
import tools from "./product.json";


const container = document.querySelector(".js-list");
const PRODUCT_LS_KEY = 'checkout';

container.insertAdjacentHTML("beforeend", createMarkup(tools));
container.addEventListener("click", handleAdd);


function handleAdd(event) {
    if(!event.target.classList.contains("js-btn")) {
        return;
    }

    const product = event.target.closest(".js-product");
    const productId = Number(product.dataset.id);
    const currentProduct = tools.find(({ id }) => id === productId);
    const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) ?? [];
    const index = products.findIndex(({ id }) => id === productId);

    if(index !== -1) {
        products[index].qty += 1;
    } else {
        currentProduct.qty = 1;
        products.push(currentProduct)
    }

    localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(products))
}



