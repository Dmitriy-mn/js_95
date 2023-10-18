// ПРАВИЛА ВИЗНАЧЕННЯ THIS
// 1 Визначити з яким типом функції працюємо
// 2 Маємо умовне поділення на два табори
// 2.1 Перший це Function Declaration & Function Expression
// 2.2 Другий це Arrow Function
// 3 Function Declaration & Function Expression визначають
// this тим хто їх викликав, перший ліворуч
// 4 Arrow Function в рамках чого вона була створена


// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     // Change code below this line
//     checkPizza(pizzaName) {
//       return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//       const isPizzaAvailable = this.checkPizza(pizzaName);
  
//       if (!isPizzaAvailable) {
//         return `Sorry, there is no pizza named «${pizzaName}»`;
//       }
  
//       return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//     // Change code above this line
// };

// console.log(pizzaPalace.order("Smoked"));



// const user = {
//     userName: "Alice",
//     getName() {
//         return this.userName
//     }
// }


// function foo(callback) {
//     console.log(`My name is ${callback()}`);
// }


// // console.log(user.getName()); // Alice

// foo(user.getName.bind(user))



// *************************Практика***************************\\

// Task - 1
// Наше завдання написати програмне забезпечення для автомобіля,
// а саме натискання кнопки набору та зниження швидкості в
// системі круїз контролю.
// Створити об'єкт cruiseСontrol з методами accelerate та
// decrease, властивостями speed та brand.

// const cruiseСontrol = {
//     speed: 0,
//     brand: "Audi",
//     accelerate() {
//         this.speed += 10;
//         console.log(`${this.brand} має швидкість ${this.speed}`);
//     },
//     decrease() {
//         console.log(this.speed);
//         if(this.speed <= 0) {
//             console.log(`Авто ${this.brand} зупинилось`);
//             return;
//         }
//         this.speed -= 10;
//         console.log(`${this.brand} гальмує і має швидкість ${this.speed}`);
//     }
// }

// cruiseСontrol.accelerate()
// cruiseСontrol.accelerate()
// cruiseСontrol.decrease()
// cruiseСontrol.decrease()

// Task - 2
// Потрібно створити систему для продажу в інтернет-магазині.
// В об'єкті продукту (product) потрібно створити метод 
// discount(буде приймати знижку клієнта в %) та повертати 
// вартість товару з врахуванням знижки
// В об'єкті клієнта (client) який містить ім'я та індивідуальну
// знижку, потрібно створити метод purchase, який буде викликати
// метод для розрахунку вартості товару та логувати
// повідомлення про покупку
// Alice придбала товар зі знижкою в 8%, сума до сплати 460грн"

// const product = {
//     name: "Smartphone",
//     price: 500,
//     discount(percent) {
//         return this.price * (100 - percent) / 100
//     }
// };

// const client = {
//     name: "Alice",
//     discountPercent: 8,
//     purchase() {
//         const price = product.discount(this.discountPercent)
//         return `${this.name} придбала товар зі знижкою в ${this.discountPercent}%, сума до сплати ${price}грн`
//     }
// };
// console.log(client.purchase())



// Task - 3
// Потрібно створити функціонал для контролю швидкості прокатних
// авто.
// Створіть функцію яка буде приймати 1 параметр 
// (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною 
// швидкістю чи перевищуємо, функція має опрацьовувати об'єкт
// автомобіля як this


// const SAFE_SPEED = 60;

// const bmw = {
//     brand: "bmw",
//     speed: 30,
// };

// const audi = {
//     brand: 'Audi',
//     speed: 70,
// }

// function speedSensor(maxSpeed) {
//     // if(this.speed <= maxSpeed) {
//     //     return `Автомобіль ${this.brand} рухаєтсья з беспечною швидкістю`
//     // }
//     // return `Автомобіль ${this.brand} перевищує`

//     return this.speed <= maxSpeed ? 
//     `Автомобіль ${this.brand} рухаєтсья з беспечною швидкістю` :
//     `Автомобіль ${this.brand} перевищує`
// }


// console.log(speedSensor.call(audi, SAFE_SPEED));

// console.log(speedSensor.call(tesla, SAFE_SPEED));




// Task-4 Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як
// властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.

// const calculator = {
//     read(a, b) {
//         this.a = a;
//         this.b = b;
//     },
//     add() {
//         return (this.a ?? 0) + (this.b ?? 0)
//     },
//     mult() {
//         return (this.a || 1) * (this.b || 1)
//     }
// };





// calculator.read(3)
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());





