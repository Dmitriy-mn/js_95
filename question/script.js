
// const arr = [1, 2, 3, [4, [5, [6, [7, [9]]]]]]
// const res = arr.flat(Infinity)
// console.log(res);



// const shop = {
//     product: {
//         vegetables: {
//           tomato: 10
//         },
//         berries: {
//             cherry: '15',
//             strawberry: 50
//         },
//         // fruit: {
//         //     local: {
//         //         pear: 20,
//         //         peach: 27,
//         //         apple: {
//         //             variety: {
//         //                 golden: 15,
//         //                 redChif: 30
//         //             }
//         //         }
//         //     },
//         //     foreign: {
//         //         banana: 5,
//         //         pineapple: '7'
//         //     }
//         // }
//     }
// }

// getProduct(shop)

// function getProduct(obj) {
//     for(const item in obj) {
//         if(typeof obj[item] === 'object' ) {
//             getProduct(obj[item])
//         } else {
//             console.log(`${item}: ${obj[item]}kg`);
//         }
//     }
// }




// const calendarEvent = {
//     title: "Lorem ipsum",
//     user: ["Kate"],
//     date: new Date(195005554887)
// }

// -------- SPRED

// const obj = {...calendarEvent}

// obj.user.push("Petya")

// console.log("obj", obj);
// console.log("calendarEvent", calendarEvent);





// ----------------- JSON


// const obj = JSON.parse(JSON.stringify(calendarEvent))


// obj.user.push("Petya")

// console.log(obj);
// console.log(calendarEvent);



// --------- structuredClone

// const obj = structuredClone(calendarEvent)

// obj.user.push("Petya")

// console.log(obj);
// console.log(calendarEvent);





// -----------------------  Calback-функції
// Напишіть функцію getProductDetails, яка приймає ідентифікатор товару productId та дві колбек-функції successCallback та errorCallback.
// Функція getProductDetails повинна отримати деталі про вказаний товар та передати їх у successCallback.
// У випадку якщо товар не знайдено, викликається errorCallback і передається повідомлення про помилку.


// const products = [
//     {
//         id: 1,
//         name: "Телефон",
//         price: 10000,
//         description: "Смартфон з високоякісним дисплеєм та потужним процесором.",
//     },
//     {
//         id: 2,
//         name: "Ноутбук",
//         price: 25000,
//         description: "Легкий та потужний ноутбук для роботи та розваг.",
//     },
//     {
//         id: 3,
//         name: "Планшет",
//         price: 8000,
//         description: "Компактний планшет для перегляду контенту.",
//     },
// ];



// function getProductDetails(id, success, error) {
//     for(product of products) {
//         if(product.id === id) {
//             success(product.id)
//             return;
//         }
//     }
//     error(`${id} not found`)
// }

// getProductDetails(1, success, productError)

// function searchName(str, success, error) {
//     for(product of products) {
//         if(product.name === str) {
//             success(product.name)
//             return;
//         }
//     }
//     error(`${str} not found`)
// }

// searchName("Ноутбук1", success, productError)

// function success(str) {
//     console.log('Success', str);
// }

// function productError(str) {
//     console.log("error", str);
// }



// ----------------------------------------------------

// 1

// let arr = [5, 3, 14, 1, 2]
// arr.sort()
// console.log(arr);

// const newArr = arr.toSorted((a, b) => a - b)
// console.log(newArr);




// 2

// let arr = [5, 4, 3, 2, 1]

// // arr.reverse()
// // console.log(arr);

// const newArr = arr.toReversed()
// console.log(newArr);




// 3

// const arr = [1, 2, 3, 4, 5]

// const newArr = arr.with(2, "hello")

// console.log(newArr);



// 4

// const arr = [1, 2, 3, 4, 5]

// arr.splice(2, 1, "hello", "world")
// console.log(arr);

// const newArr = arr.toSpliced(2, 1, "hello", "world")
// console.log(newArr);



