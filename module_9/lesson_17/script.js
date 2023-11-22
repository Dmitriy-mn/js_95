// Додатковий матеріал для самостійного ознайомлення
// Event loop documentation
// https://bool.dev/blog/detail/obyasnenie-event-loop-v-javascript-s-pomoshchyu-vizualizatsii
// https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif



// Приклад використання setInterval та setTimeout
// Створимо блок з рекламою яка зникне через 10 секунд

// const container = document.querySelector(".js-content");
// const text = document.querySelector(".js-text");
// let count = 10;

// text.textContent = `Залишилось ${count} секунд`;

// const id = setInterval(() => {
//     count -= 1;
//     text.textContent = `Залишилось ${count} секунд`;
// }, 1000)

// setTimeout(() => {
//     clearInterval(id)
//     container.style.display = "none";
// }, 1000 * count)




// Практика
// Потрібно створити два приклади годинника 
// (Електронний та механічний)

const arrDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];
const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

const selectors = {
    day: document.querySelector(".date-day"),
    date: document.querySelector(".date"),
    month: document.querySelector(".date-month"),
    year: document.querySelector(".date-year"),
    clock: document.querySelector(".digital-clock"),
    seconds: document.querySelector(".clock-seconds__arrow"),
    minutes: document.querySelector(".clock-minutes__arrow"),
    hours: document.querySelector(".clock-hours__arrow"),
}

setInterval(() => {
    const currentDate = new Date()

    const day = currentDate.getDay();
    const date = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    
    const localeTime = currentDate.toLocaleTimeString('uk-UA');

    selectors.day.textContent = arrDay[day];
    selectors.month.textContent = namesOfMonth[month];
    selectors.date.textContent = date;
    selectors.year.textContent = year;
    selectors.clock.textContent = `Поточний час ${localeTime}`;

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const secondsDeg = 360 / 60 * seconds;
    const minutesDeg = 360 / 60 * minutes;
    const hoursDeg = 360 / 12 * hours + (360 / 12 / 60) * minutes; 

    selectors.seconds.style.transform = `rotate(${secondsDeg}deg)`;
    selectors.minutes.style.transform = `rotate(${minutesDeg}deg)`;
    selectors.hours.style.transform = `rotate(${hoursDeg}deg)`;

}, 1000)

const currentDate = new Date();


console.log(currentDate.toString());