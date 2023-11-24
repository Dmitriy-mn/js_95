// const test = function (time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(time), time)
//     })
// }


// Promise.all([test(1000), test(3000)])
//     .then(data => console.log(data))
//     .catch(err => console.log("error", err))

// Promise.race([test(1000), test(3000)])
//     .then(data => console.log(data))
//     .catch(err => console.log("error", err))









// ****************************Практика************************* \\
// Наше завдання написати програмне забезпечення для ігрового автомата
// Для вирішення завдання використай готову розмітку HTML
// та базову стилізацію
// Після натиснення на кнопку "Start game" в кожному віконці по
// черзі має з'являтись смайлик з затримкою в 1 секунду
// ('🤑' або '👿')
// Під час обробки кожного віконця створи масив з Promis-ами
// в якому кожен з них буде відповідати за своє віконце,
// після чого оброби даний масив за допомогою методу
// Promise.allSettled
// Після того як всі віконця були заповнені потрібно щоб скріпт
// автоматично визначав чи гравець переміг, чи ні.
// Якщо в кожному віконці однаковий смайлик це означає що користувач
// переміг
// Виводить модальне вікно з повідомленням про статус гри
// ('Winner' або 'Loser')
// Для модального вікна використовуй бібліотеку basicLightbox
// Після повторного натискання на кнопку "Start game"
// поле має очищатись, а гра починатись з початку.

const startBtn = document.querySelector(".js-start");
const container = document.querySelector(".js-container");

startBtn.addEventListener('click', handleStart)

function handleStart() {
    const promise = [...container.children].map(() => createPromise())

    Promise.allSettled(promise)
        .then(items => {

            const isWinner = items.every(item => item.status === "fulfilled") || items.every(item => item.status === "rejected");

            items.forEach((item, i) => {
                container.children[i].textContent = "";

                setTimeout(() => {
                    container.children[i].textContent = item.value || item.reason;

                    if(i === items.length - 1) {
                        const instance = basicLightbox.create(`
                            <h1>${isWinner ? "Winner" : "Loser"}</h1>
                        `)
            
                        instance.show()
                    }

                }, 1000 * (i + 1));
            })
        })
}


function createPromise() {
    return new Promise((resolve, reject) => {
        const random = Math.random()

        if(random > 0.5) {
            resolve("🤑")
        } else {
            reject("👿")
        }
    })
}


