// Task - 1
// Напишіть наступні функції:
// createProduct(obj, callback) - приймає об'єкт товару без 
// id, а також коллбек. Функція створює об'єкт товару, 
// додаючи йому унікальний ідентифікатор у властивість id 
// та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек що приймає об'єкт продукту 
// і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт 
// продукту і логіює загальну вартість товару в консоль

// function createProduct(obj, callback) {
//     const product = {
//         id: Date.now(),
//         ...obj
//     }
//     callback(product);
// }

// function logProduct(obj) {
//     console.log("Product", obj);
// }

// const logTotalPrice = ({price, quantity}) => console.log(`Total price: ${price * quantity}`);

// // createProduct({ name: 'apple', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: 'lemon', price: 20, quantity: 5 }, logTotalPrice);



// Task - 2
// Напишіть функцію яка буде отримувати 2 параметри.
// 1 - масив чисел.
// 2 - функцію яка має опрацювати кожен елемент масиву.
//
// Функція повертає новий масив кожен елемент якого є 
// результатом виконання колбек функції


// function each(arr, action) {
//     const items = []

    // arr.forEach(elem => items.push(action(elem)))

//     return items
// }

// console.log(each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));



// Task-3
// Напишіть функцію getProductDetails, 
// яка приймає ідентифікатор товару productId та дві 
// колбек-функції successCallback та errorCallback.
// Функція getProductDetails повинна отримати деталі про 
// вказаний товар та передати їх у successCallback.
// У випадку якщо товар не знайдено, викликається 
// errorCallback і передається повідомлення про помилку.

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
//     for(const product of products) {
//         if(product.id === id) {
//             return success(product)
//         }
//     }

//     error(id)
// }


// getProductDetails(3, handleSuccess, handleError)
// getProductDetails(44, handleSuccess, handleError)


// function handleSuccess(message) {
//     console.log(`Success!`, message);
// }


// function handleError(productId) {
//     console.log(`Error! Product with ${productId} id not found`);
// }




// Task-4
// Напишіть функцію calculateAveragePrice, яка приймає на 
// вхід масив об'єктів, що представляють товари, та колбеки 
// onSuccess та onError.
// Функція повинна обчислювати середню ціну товарів у 
// масиві та викликати колбек onSuccess, передаючи йому 
// отриману середню ціну як аргумент.
// Якщо масив товарів порожній, функція повинна викликати 
// колбек onError, передаючи йому рядок "No products found".
// Для форматування середньої ціни використовується метод 
// toFixed(2), щоб обмежити число до двох десяткових знаків.

// const products = [
//     {name: 'Apple', price: 0.99 },
//     {name: 'Banana', price: 0.49 },
//     {name: 'Orange', price: 0.79 },
//     {name: 'Mango', price: 1.99 }
//   ];


// function calculateAveragePrice(products, onSuccess, onError) {
//     if(!products.length) {
//         onError("No products found")
//         return;
//     }

//     let total = 0;
//     products.forEach(product => total += product.price)
//     const averagePrice = total / products.length
//     onSuccess(averagePrice)
// }


// const onSuccess = (averagePrice) => {
//     console.log("Average Price", averagePrice.toFixed(2));
// };

// const onError = (errorMessage) => {
//     console.log('Error', errorMessage);
// };


// calculateAveragePrice(products, onSuccess, onError);