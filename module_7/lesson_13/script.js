// **************** Практика **************** \\
// Створи картки з товарами на основі масиву products, 
// приклад картки https://prnt.sc/KmgDlzqOIA3M
// Реалізуй делегування подій на колекції карток
// Після кліку на картку повинно з'являтись модальне вікно 
// з детальною 
// інформацією про продукт, приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
// Для реалізації модального вікна використай 
// бібліотеку basicLightbox 
// (https://github.com/electerious/basicLightbox)

const products = [
    {
      id: 1,
      img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
      name: "Монітор",
      price: 3000,
      description: "23-дюймовий монітор з Full HD роздільною здатністю.",
    },
    {
      id: 2,
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
      name: "Ноутбук",
      price: 20000,
      description: "Легкий та потужний ноутбук з 15-дюймовим дисплеєм та SSD.",
    },
    {
      id: 3,
      img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
      name: "Смартфон",
      price: 8000,
      description: "Оснащений потрійною камерою та багатоядерним процесором.",
    },
    {
      id: 4,
      img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
      name: "Планшет",
      price: 12000,
      description:
        "10-дюймовий планшет з високою продуктивністю та Retina дисплеєм.",
    },
];


const container = document.querySelector(".js-products");

container.insertAdjacentHTML("beforeend", createMarkup(products))
container.addEventListener("click", handleClick)


function createMarkup(arr) {
    return arr.map(({ id, img, name, price }) => `
        <li data-id="${id}" class="item js-product-item">
            <img src="${img}" alt="${name}" width="300">
            <h2>${name}</h2>
            <p>Ціна: ${price}</p>
        </li>
    `).join("")
}

function handleClick(event) {
    if(event.target === event.currentTarget) {
        return;
    }
    
    const currentProduct = event.target.closest(".js-product-item");
    const id = currentProduct.dataset.id;
    const product = products.find(({ id: productId }) => productId === Number(id));

    const instance = basicLightbox.create(`
        <div class="modal">
            <img src="${product.img}" alt="${product.name}">
            <h2>${product.name}</h2>
            <h3>${product.price}</h3>
            <p>${product.description}</p>
        </div>
    `)

    instance.show()
}