// ***************Прототипне наслідування та метод Object.create***************\\
// const user = {
//     name: 'Alice',
//     age: 23,
//     sayHello() {
//         console.log(`Hello my name is ${this.name}`);
//     },
//     getAge() {
//         console.log(`my age ${this.age}`);
//     }
// }

// const student = Object.create(user)

// student.name = "Kate"
// student.sayHello()
// console.log(student);








// *********************************ES6 Class*********************************\\




// *****Публічні властивості та методи***** \\

// class User {
//     constructor({ name, age }) {
//         this.name = name;
//         this.age = age;
//     }

//     showName() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// const student = new User({ age: 25, name: "Alice" })
// const student2 = new User({ name: "Kate", age: 30 })

// console.log(student);
// console.log(student2);
// student2.showName()



// *****Приватні властивості та методи***** \\
// class User {
//     #password;

//     constructor(name, password) {
//         this.name = name;
//         this.#password = password;
//     }

//     showName() {
//         if(this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you?");
//         }
//     }

//     #checkPassword() {
//         const pas = prompt()
//         return pas === this.#password
//     }
// }

// const student = new User("Alice", "123456")
// console.log(student);
// student.showName()




// ******Геттери і сеттери****** \\

// class User {
//     #password;
//     #email;

//     constructor(name, password, email) {
//         this.name = name;
//         this.#password = password;
//         this.#email = email;
//     }

//     showName() {
//         if (this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you ?");
//         }
//     }

//     #checkPassword() {
//         const password = prompt();
//         return password === this.#password;
//     }

//     get userEmail() {
//         if(this.#checkPassword()) {
//             return this.#email
//         }
//     }

//     set userEmail(newEmail) {
//         if(this.#checkPassword()) {
//             this.#email = newEmail;
//         }
//     }
// }


// const student = new User("Alice", "123456", "test@gmail.com")


// student.userEmail = "new@gmail.com"
// console.log(student.userEmail)


// *****Статичні властивості та методи***** \\
// Розглянемо на практичному завдані (Task-3)












// **********Наслідування класів********* \\


// class User {
//     #password;
//     #email;
//     constructor(name, password, email) {
//         this.name = name;
//         this.#password = password;
//         this.#email = email;
//     }

//     showName() {
//         if (this.#checkPassword()) {
//             console.log(`Hello my name is ${this.name}`);
//         } else {
//             console.log("Who are you ?");
//         }
//     }

//     #checkPassword() {
//         const password = prompt();
//         return password === this.#password;
//     }

//     get email() {
//         if (this.#checkPassword()) {
//             return this.#email
//         }
//     }

//     set email(newEmail) {
//         if (this.#checkPassword()) {
//             this.#email = newEmail;
//         }
//     }
// }


// class Student extends User {
//     constructor({name, password, email, points}) {
//         super(name, password, email)
//         this.points = points;
//     }

//     getPoints() {
//         console.log(`${this.name} має ${this.points}`);
//     }
// }



// const student = new Student({name: "Alice", password: "123456", email: "test@gmail.com", points: 38})
// student.getPoints()






// ***********************Практика*********************** \\


// *******Task-1****** \\
// Необхідно створити клас Rectangle, 
// який представляє прямокутник.
// Клас повинен мати приватні властивості width та height, 
// а також гетери та сетери для цих властивостей. 
// Гетери повинні повертати значення властивостей, 
// а сетери повинні дозволяти змінювати значення 
// властивостей з валідацією.

// class Rectangle {
//     #width;
//     #height;
//     constructor({ width, height }) {
//         this.#width = width;
//         this.#height = height;
//     }

//     get width() {
//         return this.#width;
//     }

//     set width(newWidth) {
//         if(typeof newWidth === 'number' && newWidth > 0) {
//             this.#width = newWidth
//         } else {
//             console.log('Ширина повинна бути числом білшим за 0');
//         }
//     }

//     get height() {
//         return this.#height;
//     }

//     set height(newHeight) {
//         if(typeof newHeight === 'number' && newHeight > 0) {
//             this.#height = newHeight
//         } else {
//             console.log('Висота повинна бути числом білшим за 0');
//         }
//     }
// }

// const item = new Rectangle({ width: 10, height: 5 });

// console.log(item.height); // get
// item.height = 12 // set
// console.log(item.height); //get










// *******Task-2******* \\
// Реалізуйте клас Student, який успадковуватиметься 
// від класу User. Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),
// surname приватна властивість (прізвище, успадковується 
// від User),
// year (рік вступу до вузу).

// Клас повинен мати метод getFullName() 
// (успадковується від User), за допомогою якого можна
// вивести одночасно ім'я та прізвище студента.
// Також клас повинен мати метод getCourse(), 
// який виводитиме поточний курс студента 
// (від 1 до 5, якщо значення перевищує 5  
// курс виводити що студент являється випускником).
// Курс обчислюється так: потрібно від поточного року 
// відняти рік вступу до вузу. 
// Поточний рік отримаєте самостійно (читати документацію!!!).
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
// Приклад ініціалізації екземпляру класа:
// const student = new Student('Петрик', 'Пяточкин', 2019);

// class User {
//     #name;
//     #surname;
//     constructor(name, surname) {
//         this.#name = name;
//         this.#surname = surname;
//     }

//     getFullName() {
//         return `${this.#name} ${this.#surname}`
//     }
// }


// class Student extends User {
//     constructor(name, surname, year) {
//         super(name, surname)
//         this.year = year
//     }

//     getCourse() {
//         const today = new Date()
//         const currentYear = today.getFullYear()
//         const diff = currentYear - this.year

//         if(diff < 0) {
//             return;
//         }

//         if(diff > 5) {
//             return 'студент являється випускником'
//         }

//         return `${diff} курс`
//     }
// }


// const student = new Student('Петрик', 'Пяточкин', 2019);
// console.log(student.getFullName());
// console.log(student.getCourse());








// *******Task-3******* \\
// Необхідно створити клас Hero, який представляє героя з гри. 
// Клас повинен мати публічні властивості name, level 
// та health, а також методи attack та heal,
// що дозволяють герою атакувати та відновлювати здоров'я 
// відповідно.
// Також створи функціонал для підрахунку створених героїв

// Властивість name має зберігати ім'я героя.
// Властивість level має зберігати рівень героя.
// Властивість health має зберігати поточний рівень здоров'я героя.
// Метод attack наносить пошкодження в розмір 10 одиниць. 
// Метод heal додає до здоров'я героя 10 одиниць.



// class Hero {
//     static counter = 0;
//     static addUser() {
//         this.counter += 1;
//         console.log('Кількість героїв', this.counter);
//     }

//     #level;
//     constructor(name) {
//         this.name = name;
//         this.health = 200;
//         this.#level = 1;
//         Hero.addUser()
//     }

//     attack() {
//         console.log('пошкодження в розмір 10 одиниць');
//     }

//     heal() {
//         this.health += 10
//     }
// }

// const bloodseker = new Hero('Bloodseker');
// const bloodseker1 = new Hero('Bloodseker');
// console.log(bloodseker);







// *******Task-4******* \\
// Необхідно створити клас BankAccount, 
// який представляє банківський рахунок.
// Клас повинен мати приватну властивість balance,
// яка представляє баланс рахунку. 
// Клас повинен також мати публічні методи 
// deposit та withdraw, які дозволяють здійснювати операції 
// з депозитом та зняттям коштів з рахунку. 
// При цьому balance повинна бути доступна лише в межах 
// класу BankAccount та його приватних методів.

class BankAccount {
    #balance;
    constructor() {
        this.#balance = 0
    }

    deposit(amount) {
        if(amount > 0) {
            this.#changeBalance(amount);
            console.log(`Здійсненно поповнення ${amount}`);
            return;
        }
        console.log('Сума має бути > 0');
    }

    withdraw(amount) {
        if(amount <= 0) {
            console.log('Сума має бути > 0');
        } else if(amount > this.#balance) {
            console.log('Недостатньо коштів');
        } else {
            this.#changeBalance(-amount)
            console.log(`Знято ${amount}`);
        }
    }

    #changeBalance(amount) {
        this.#balance += amount
    }
}


const instance = new BankAccount()
instance.deposit(100)
instance.deposit(1200)
instance.withdraw(1000)
console.log(instance);




