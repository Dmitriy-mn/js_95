// Task-1
// Напишіть функцію, яка використовує метод map, 
// щоб створити новий масив об'єктів, 
// в якому буде інформація про середній бал кожного студента.

// const students = [
//     { name: 'John', grades: [80, 85, 90] },
//     { name: 'Alice', grades: [90, 95, 92] },
//     { name: 'Bob', grades: [70, 80, 75] },
//     { name: 'Emily', grades: [95, 92, 88] },
//     { name: 'David', grades: [85, 88, 90] }
// ];

// function getAverage(arr) {
//     const result = arr.map(({ name, grades }) => {
//         const total = grades.reduce((acc, item) => acc + item, 0)

//         const obj = {
//             name,
//             average: Math.floor(total / grades.length)
//         }

//         return obj
//     })

//     return result;
// }
// console.log(getAverage(students));





// Task-2
// Напишіть функцію, яка використовує метод filter, 
// щоб створити новий масив, в якому будуть тільки 
// студенти які старше 20 років


// const students = [
//     { name: 'John', age: 20, gpa: 3.8 },
//     { name: 'Alice', age: 21, gpa: 3.2 },
//     { name: 'Bob', age: 19, gpa: 3.5 },
//     { name: 'Emily', age: 22, gpa: 3.9 },
//     { name: 'David', age: 20, gpa: 3.7 }
// ];

// function getAdult(arr) {
//     const res = arr.filter((student) => student.age > 20 )
//     return res
// }
// console.log(getAdult(students));





// Task-3
// Напишіть функцію, яка використовує метод find, щоб 
// знайти книжку за її назвою (title).
// Якщо книгу не знайдено повертається рядок 'Not found'.
// const books = [
//     { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
//     { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', year: 2008 },
//     { title: 'The Pragmatic Programmer: Your Journey to Mastery', author: 'Andrew Hunt, David Thomas', year: 1999 },
//     { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', year: 1994 },
//     { title: 'Refactoring: Improving the Design of Existing Code', author: 'Martin Fowler', year: 1999 }
// ];


// function getBook(arr, title) {
//     const book = arr.find((item) => item.title === title)
//     return book || 'Not found'
// }
// console.log(getBook(books, 'Design Patterns: Elements of Reusable Object-Oriented Software'));
// console.log(getBook(books, 'qwerty'));





// Task-4
// Напишіть функцію, яка використовує метод reduce, щоб 
// обчислити загальну вартість всіх товарів у масиві, 
// яка розраховується як добуток ціни товару на його 
// кількість, а потім сумується з іншими товарами.
// Результат повинен бути загальною вартістю всіх товарів.

// const products = [
//     { id: 1, name: 'T-shirt', price: 20, quantity: 3 },
//     { id: 2, name: 'Jeans', price: 50, quantity: 2 },
//     { id: 3, name: 'Sneakers', price: 80, quantity: 1 },
//     { id: 4, name: 'Hat', price: 15, quantity: 4 },
//     { id: 5, name: 'Socks', price: 5, quantity: 6 }
// ];

// function getTotal(arr) {
//     const total = arr.reduce((acc, product) => {
//         acc += product.price * product.quantity
//         return acc
//     }, 0)

//     // const total = arr.reduce((acc, { price, quantity }) => acc += price * quantity, 0)

//     return total
// }
// console.log(getTotal(products));





// Task-5
// Напишіть функцію, яка використовує метод sort, 
// щоб відсортувати книжки за роком видання у 
// спадаючому порядку.
// Результат повинен бути відсортованим масивом книжок за 
// роком видання.

// const books = [
//     { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
//     { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', year: 2008 },
//     { title: 'The Pragmatic Programmer: Your Journey to Mastery', author: 'Andrew Hunt, David Thomas', year: 1999 },
//     { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', year: 1994 },
//     { title: 'Refactoring: Improving the Design of Existing Code', author: 'Martin Fowler', year: 1999 }
// ];

// function sortDesc(arr) {
//     // const res = [...arr].sort((a, b) => b.year - a.year)
//     return [...arr].sort((a, b) => b.year - a.year)
// }
// console.log(sortDesc(books));





// Task-6
// Напишіть функцію, яка використовує перебираючі 
// методи масиву map та filter, щоб отримати масив назв 
// продуктів, ціна яких менше 2 доларів та відсортуй їх за 
// алфавітним порядком.
// const products = [
//     { id: 2, name: 'Banana', price: 0.99 },
//     { id: 1, name: 'Apple', price: 1.99 },
//     { id: 3, name: 'Orange', price: 2.49 },
//     { id: 4, name: 'Grapes', price: 3.99 }
// ];

// function getProducts(arr) {
//     return arr.filter(({ price }) => price < 2)
//         .map(({ name }) => name)
//         .sort((a, b) => a.localeCompare(b))
        
        
// }
// console.log(getProducts(products));





// Task-7 HARD 

// Є рядок в якому довільна кількість літер, 
// гарантовано в рядку немає пробілів та розділових знаків,
// потрібно повернути об'єкт де кожна літера буде ключем, 
// а кількість разів яку вона дублюється буде значенням ключа
// const str = 'absdabsrgbadgtdswwbetflg';
// Результат на який очікуємо
// const obj = {
//     a: 3,
//     b: 4,
//     s: 3,
//     // ...
// }

// const result = str.split("")
//     .reduce((acc, item) => {
//         console.log("item", item);
//         if(acc.hasOwnProperty(item)) {
//             acc[item] += 1
//         } else {
//             acc[item] = 1
//         }

//         return acc
//     }, {})

// // console.log(result);