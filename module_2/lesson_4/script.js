// Task-1;
// Створи функцію яка буде перевіряти чи кожен елемент 
// масиву більше ніж вказане значення.
// Функція приймає два параметри.
// 1 - Масив чисел
// 2 - Число яке потрібно порівнювати з усіма елементами
// масиву.
// Функція повертає повідомлення про успішну або не успішну 
// перевірку (повідомлення "Success ✅" "Fail ❌")

// const numbers = [25, 12, 67, 40, 18];

// function checkValue(arr, target) {
//     let message = "Success";

//     for(const number of arr) {
//         console.log(number);
//         if(target > number) {
//             message = "Fail"
//         }
//     }
//     return message
// }


// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 13));




// Застосування функції + патерн раннє повернення

// const numbers = [25, 12, 67, 40, 18];

// function checkValue(arr, target) {
//     for(const item of arr) {
//         console.log(item);
//         if(target > item) {
//             return "Fail"
//         }
//     }
//     return "Success"
// }

// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 13));







// Task-2
// Створити функцію яка буде розбивати початковий масив 
// на потрібну кількість елементів розділюячи на декілька 
// масивів.Функція приймає 2 параметри
// 1 - масив значень
// 2 - потрібну кількість елементіа в масиві
//  Функція повертає масив масивів


// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getCombination(arr, count) {
//     const res = []
//     for(let i = 0; i < arr.length; i += count) {
//         const comb = arr.slice(i, i + count)
//         res.push(comb)
//     }
//     return res
// }
// console.log(getCombination(data, 2)); // [[1, 2], [3, 4],[5, 6],[7, 8]]
// console.log(getCombination(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]









// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення 
// площі прямокутника зі сторонами, значення яких будуть 
// передані до параметра dimensions у вигляді рядка. 
// Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//     const arr = dimensions.split(" ");
//     const firstValue = Number(arr[0]);
//     const secondValue = +arr[1];
    
//     return firstValue * secondValue
// }

// console.log(getRectArea('8 11'));
// console.log(getRectArea('15 11'));







// Task-4
// Напишіть функції для роботи з колекцією навчальних
// курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове


// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// function addCourse(name) {
//     if(courses.includes(name)) {
//         return "Курс вже є"
//     }
//     courses.push(name)
// }

// addCourse('Express');
// console.log(courses); 
// console.log(addCourse('CSS')); 






// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// function removeCourse(name) {
//     const idx = courses.indexOf(name)

//     if(idx === -1) {
//         return "Курс не знайли"
//     }
//     courses.splice(idx, 1)
// }
// removeCourse('React');
// console.log(courses); 
// console.log(removeCourse('Vue'));






// const courses = ['HTML', 'CSS', 'Express','JavaScript', 'React', 'PostgreSQL'];
// function updateCourse(oldName, newName) {
//     const idx = courses.indexOf(oldName)

//     if(idx !== -1) {
//         courses[idx] = newName;
//         return;
//     }
//     return "Курс не знайли"
// }


// updateCourse('HTML', 'NestJS');
// console.log(updateCourse('qwerty', 'NestJS'));
// console.log(courses);