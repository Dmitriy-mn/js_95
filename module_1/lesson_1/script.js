// Task - 1

// Виконавши математичні операції та застосувавши шаблоні рядки виведи 
// в консоль кількість та загальну вартість за кожен продукт.

// const apple = '🍎';

// const appleQuantity = 8;

// const applePrice = 34;

// const appleMessage = `${apple} quantity: ${appleQuantity}. Total price: ${appleQuantity * applePrice}`;
// console.log(appleMessage);


// const cherry = '🍒';

// const cherryQuantity = 3;

// const cherryPrice = 72;

// const cherryMessage = `${cherry} quantity: ${}`;

// console.log(cherryMessage);


// Task - 2

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) 
// в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60)
// const minutes = totalMinutes % 60;


// const doubleDigitalHours = String(hours).padStart(2, 0)
// const doubleDigitalMinutes = String(minutes).padStart(2, 0)

// const result = `${doubleDigitalHours}:${doubleDigitalMinutes}`
// console.log(result);


// Task - 3

// Виконай рефакторинг коду щоб уникнути помилок

// const name = 'Harry'
// const message = `Hello my name is ${name}`
// console.log(message);

// const delivery = 25;
// const price = 190;
// const message = `Total purchase, price ${delivery  + price}`;
// console.log(message);


// Task - 4
// Виконай рефакторинг коду так, щоб у змінну value присвоювалося 
// значення змінної 
// incomingValue, якщо воно не рівне undefined або null. 
// В іншому випадку має присвоюватися значення defaultValue. 
// Перевір роботу скрипта для наступних значень 
// змінної incomingValue: null, undefined, 0. 
// Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = false;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);