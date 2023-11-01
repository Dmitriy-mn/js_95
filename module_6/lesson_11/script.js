
// Потрібно створити розмітку з картками автомобілів.
// Для створення розмітки використовуй масив cars.

// Варіант-1
// Створи розмітку використовуючи метод createElement

// Варіант-2
// Створи розмітку використовуючи приклад шаблонної розмітки

const cars = [
  {
    id: 1,
    model: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 2,
    model: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    id: 3,
    model: "BMW",
    type: "5 series",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    id: 4,
    model: "Honda",
    type: "Accord",
    price: 20000,
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 5,
    model: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
];


// *******Варіант-1******* \\
// const list = document.querySelector(".js-list")

// function createMarkup(arr) {
//     const markup = arr.map(({ id, model, type, price, img }) => {
//         const li = document.createElement("li")
//         const imgEl = document.createElement("img")
//         const h2 = document.createElement("h2")
//         const h3 = document.createElement("h3")
//         const span = document.createElement("span")

//         li.setAttribute("data-car-id", id)
//         li.style.marginBottom = "50px"

//         imgEl.src = img;
//         imgEl.alt = type;
//         imgEl.style.width = "300px"

//         h2.textContent = model;
//         h3.textContent = type;
//         span.textContent = price;

//         li.append(imgEl, h2, h3, span)

//         return li;
//     })
//     list.append(...markup)

// }

// createMarkup(cars)




// *******Варіант-2******* \\

const list = document.querySelector(".js-list")

function createMarkup(arr) {
    const markup = arr.map(({ id, model, type, price, img }) => `
        <li data-car-id="${id}">
            <img src="${img}" alt="${type}" width="300"/>
            <h2>${model}</h2>
            <h3>${type}</h3>
            <span>${price}</span>
        </li>
    `).join("")

    list.insertAdjacentHTML("beforeend", markup)
}
createMarkup(cars)


document.querySelector('button[data-action="save"]');


