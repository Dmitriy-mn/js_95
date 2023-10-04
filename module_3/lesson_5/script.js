// Task - 1
// Створи функцію яка буде приймати 3 параметри та формувати
// об'єкт покупки
// 1 Назва продукту
// 2 Кількість одиниць
// 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами 
// name, price, quantity, 
// totalPrice.


// function createBasket(product, quantity, price) {
//     const totalPrice = quantity * price;

//     // const basket = {
//     //     name: product,
//     //     price,
//     //     quantity,
//     //     totalPrice
//     // }
//     return {
//         name: product,
//         price,
//         quantity,
//         totalPrice
//     }
// }
// console.log(createBasket('pizza', 3, 120));
// console.log(createBasket('aplle', 13, 1200));





// Task - 2
// Створи функцію для ведення статистики комп'ютерного клубу. 
// Функція приймає 1 параметр це об'єкт користувачів 
// де ключ це ім'я 
// користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки 
// було користувачів 
// та який середній час оренди комп'ютера.

// const players = {
//     Den: 60,
//     Kate: 130,
//     William: 45,
//     Matthew: 120,
//     Ethan: 40,
//     David: 55,
// }

// function getTime(obj) {
//     const values = Object.values(players)
//     let total = 0;

//     for(const value of values) {
//         total += value
//     }

//     return `Count of players ${values.length}, average time ${total / values.length}`
// }

// console.log(getTime(players));





// Task - 3
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) 
// в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//     { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//     { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//     { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
//     { name: "Oleksii", books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"], age: 26 },
// ]


// function getUsers(arr, bookName) {
//     const userNames = []
//     for(const user of arr) {
//         if(user.books.includes(bookName)) {
//             userNames.push(user.name)
//         }
//     }
//     return userNames.join(", ")
// }
// console.log(getUsers(friends, "Harry Potter"));


// function getTotalAge(arr) {
//     let totalAge = 0;

//     for(const user of arr) {
//         // if("age" in user) {
//         //     totalAge += user.age
//         // }
//         if(user.hasOwnProperty("age")) {
//             totalAge += user.age
//         }
//     }
//     return totalAge
// }
// console.log(getTotalAge(friends));





// Task - 4
// 1 Створити метод об'єкту який буде приймати 1 
// параметр назву факультету 
// та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр
// назву факультету 
// та повертати кількість очків факультету

// const hogvarts = {
//     griffindor: [{
//         name: "Harry",
//         points: 17
//     },
//     {
//         name: "Hermiona",
//         points: 19
//     },
//     {
//         name: "Ron",
//         points: 14
//     }],
//     slizerin: [{
//         name: "Draco",
//         points: 17
//     },
//     {
//         name: "Goyl",
//         points: 14
//     },
//     {
//         name: "Crabbe",
//         points: 5
//     }],
//     getUserList(faculty) {
//         if(!(faculty in this)) {
//             return "Faculty not found"
//         }

//         const students = []

//         for(const student of this[faculty]) {
//             students.push(student.name)
//         }

//         return students.join(", ")
//     },
//     getTotalPoints(faculty) {
//         if(!(faculty in this)) {
//             return "Faculty not found"
//         }

//         let totalPoints = 0;

//         for(const student of this[faculty]) {
//             if("points" in student) {
//                 totalPoints += student.points
//             }
//         }
//         return totalPoints
//     }
// }

// console.log(hogvarts.getUserList('griffindor'));
// console.log(hogvarts.getUserList('slizerin'));
// console.log(hogvarts.getUserList('slitherin'));

// console.log(hogvarts.getTotalPoints('griffindor'));
// console.log(hogvarts.getTotalPoints('slizerin'));
// console.log(hogvarts.getTotalPoints('slitherin'));