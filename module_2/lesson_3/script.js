// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з 
// нього (мутувати) 
// всі елементи що не є типом даних Number.

// const arr = [3, 'Hello', null, 42, false];
// [3, null, 42, false] i = 1

// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] !== "number") {
//         arr.splice(i, 1)
//         i -= 1
//     }
// }

// console.log(arr);


// for(let i = arr.length - 1; i >= 0; i -= 1) {
//     if(typeof arr[i] !== "number") {
//         arr.splice(i, 1)
//     }
// }

// console.log(arr);



// Task-2
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що
// дублюються 
// в ньому та повернути їх в вигляді нового масиву як 
// результат виконання 
// функції

// function getCommonElements(arr) {
//     const result = []
//     for(let i = 0; i < arr.length; i++) {
//         if(arr.includes(arr[i], i+1)) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }


// function getCommonElements(arr) {
//     const uniq = []
//     const repeat = []

//     for(const item of arr) {
//         if(!uniq.includes(item)) {
//             uniq.push(item)
//         } else {
//             repeat.push(item)
//         }
//     }
    
//     return repeat
// }


// console.log(getCommonElements([1, 2, 3, 2, 1, 17, 19]));




// Task-3
//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів
//2 параметр це масив з чоловічими іменами.
//Функція повина відібрати з масиву всіх юзерів лише жіночі 
// імена та 
// повернути їх в результаті свого виконання.

// const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'David', 'Roman', 'Olga'];
// const men = ['Artem', 'Maksim', 'David', 'Roman'];

// function getWomen(users, men) {
//     const women = []

//     for(const user of users) {
//         if(!men.includes(user)) {
//             women.push(user)
//         }
//     }
//     return women
// }

// console.log(getWomen(users, men));




// Task-4 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок 
// (зворотний порядок літер) 
// і виводить його в консоль.

// const string = 'Welcome to the future';
// const result = string.split("").reverse().join("")
// console.log(result);





// Task-5
// Напиши скрипт який буде перевіряти чи елементи в масиві 
// розташовані в порядку зростання,
// якщо ні то замінювати елементи на вірнi
// const numbers = [1, 2, 3, 12, 5, 6, 1, 1, 9]

// numbers.sort(function(a, b) {
//     return a - b
// })
// // numbers.sort((a, b) => a-b)
// console.log(numbers);





// Task-6
// Напиши функцію яка на основі масиву користувачів що 
// поставили 
// лайк формує та повертає рядок.
// Функція має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function createStr(arr) {
//     let message;
//     switch(arr.length) {
//         case 0:
//             message = "no one likes this";
//             break;
//         case 1:
//             message = `${arr[0]} likes this`;
//             break;
//         case 2:
//             message = `${arr[0]} and ${arr[1]} like this`;
//             break;
//         case 3:
//             message = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
//             break;
//         default:
//             message = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`
//     }
//     return message;
// }


// console.log(createStr([]));
// console.log(createStr(["Peter"]));
// console.log(createStr(["Jacob", "Alex"]));
// console.log(createStr(["Max", "John", "Mark"]));
// console.log(createStr(["Mark", "Alex", "Jacob", "Mark"]));