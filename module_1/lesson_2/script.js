// Task - 1
// Потрібно створити світлофор використовуючи конструкцію switch
// В propmt() юзер вводить колір який він бачить на світлофорі
// В результаті виконання юзер має отримати повідомлення з дією яку 
// має виконати


// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful

// let message = prompt("Color?");
// // let action;

// if(message) {
//     message = message.toLowerCase();
// }

// // message = message?.toLowerCase();

// switch(message) {
//     case "red":
//         action = "stop";
//         break;
//     case "yellow":
//         action = "ready";
//         break;
//     case "green":
//         action = "go";
//         break;
//     default:
//         action = "be careful"
// }

// console.log(action);

// Task - 2
// Потрібно створити застосунок для автоматизації перевірки 
// правильних відповідей на дитячі загадки
// Створи функцію яка буде приймати 2 параметри
// 1 параметр це текст загадки
// 2 вірна відповідь

// Після виклику функції користувач має побачити питання на екрані 
// та поле для вводу відповіді, використовуй propmt()
// Функція має повертати булеве значення з результатом відповіді (true/false)


// function check(text, answer) {

//     let message = prompt(text);
//     message = message?.toLowerCase()

//     return answer === message;
// }



// console.log(check('Хоч не літак, а крилатий, Без крил не може працювати.', 'вітряк'));
// console.log(check('Через воду він проводить, А сам з місця вік не сходить', 'міст'));
// Тестові дані
// Хоч не літак, а крилатий,
// Без крил не може працювати.
// (Вітряк)


// Через воду він проводить,
// А сам з місця вік не сходить.
// (Міст)










// Task - 3
// Потрібно створити функцію яка буде рахувати за скільки днів 
// Равлик зможе виповзти з колодязя
// функція приймає 1 параметр глибину колодязя, функція повертає кількість 
// днів 
// яку равлик витратив на шлях.
// за день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// для вирішення завдання використовуй цикл while

// 42 м, виповзе за 8 днів
// 17 м, виповзе за 3 дні
// 18 м, виповзе за 4 дні

// function getDays(deps) {
//     const daySpeed = 7;
//     const nightSpeed = 2;
//     let total = 0;
//     let days = 0;

//     while(total < deps) {
//         total += daySpeed;
//         days++;

//         if(total < deps) {
//             total -= nightSpeed
//         }
//     }

//     console.log(days);
// }


// getDays(42) // 8
// getDays(17) // 3
// getDays(18) // 4








// Task - 4
// Порахуй скільки голосних літер у реченні.

// function countVowel(str) {
//     const vowels = "aeiouy";
//     let conter = 0;

//     for(let i = 0; i < str.length; i++) {
//         if(vowels.includes(str[i].toLowerCase())) {
//             conter++
//         }
//     }
//     return conter
// }


// console.log(countVowel("HELLO WORLD")) // 3
// console.log(countVowel("Junior Web Developer")) // 8