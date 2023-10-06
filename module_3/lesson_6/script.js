// Task - 1 - Деструктуризація
// Деструктуризуй об'єкт таким чином щоб отримати 
// значення name, 
// surname, username

// const user = {
//     id: 1,
//     username: 'harry_potter',
//     profile: {
//       name: 'Harry',
//       surname: 'Potter',
//       age: 25
//     }
//   };


// Деструктуризація об'єкта для отримання окремих змінних
// const { username, profile: { name, surname }} = user


// Виведення отриманих значень
// console.log(`Ім'я користувача: ${name}`);
// console.log(`Прізвище користувача: ${surname}`);
// console.log(`Ім'я користувача (за нікнеймом): ${username}`);





// Task - 2 Деструктуризація
// Допиши функцію таким чином щоб кожна властивість об'єкта 
// product була незалежним параметром

// const product = {
//     name: 'Smart TV',
//     price: 25000,
//     category: 'Electronics',
//     details: {
//       brand: 'Samsung',
//       color: 'Black',
//       weight: '15.5'
//     }
//   };

// function displayProductInfo({ name, price, category, details: { brand, color, weight }}) {
//     console.log(`Назва товару: ${name}`);
//     console.log(`Ціна: ${price} грн`);
//     console.log(`Категорія: ${category}`);
//     console.log('Деталі:');
//     console.log(`- Бренд: ${brand}`);
//     console.log(`- Колір: ${color}`);
//     console.log(`- Вага: ${weight} кг`);
// }

// displayProductInfo(product);





// Task - 3 - Операція spread
// Напиши функцію createContact(partialContact) так, 
// щоб вона повертала новий об'єкт контакту з доданими 
// властивостями 
// id та createdAt, а також list зі значенням "default" 
// якщо в 
// partialContact немає такої властивості.



// function createContact(partialContact) {
 
//     return {
//         id: 5,
//         createdAt: "06.10.2023",
//         list: "default",
//         ...partialContact
//     }
// }

// console.log(createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );





// Task - 4 - Операція rest
// Напиши функцію transformUsername(user) так, 
// щоб вона повертала 
// новий об'єкт із властивістю fullName, 
// замість firstName та lastName.

// function transformUsername({ firstName, lastName, ...props}) {
//     return {
//         fullName: `${firstName} ${lastName}`,
//         ...props
//     }
// }


// console.log(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendCount: 40,
//     }),
// );


// console.log(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@hotmail.com',
//         friendCount: 20,
//     }),
// );





// Task - 5 Об'єкт параметрів
// Необхідно зрoбити рефакторинг функції 
// calculateHousePerimeter, 
// так щоб вона приймала об'єкт з параметрами будинку,
// включаючи довжини сторін будинку. 
// Функція повинна розрахувати та повернути периметр будинку.

// function calculateHousePerimeter({sideA, sideB, sideC, sideD}) {
//     const perimeter = sideA + sideB + sideC + sideD
//     return perimeter;
// }

// const house = {
//     sideA: 10,
//     sideB: 15,
//     sideC: 10,
//     sideD: 15
// }

// const perimeter = calculateHousePerimeter(house);
// console.log(`Периметр будинку: ${perimeter}`);