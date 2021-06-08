'use strict';

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {

    const elem = document.querySelector('.box');
    let position = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (position === 300){
            clearInterval(id);
        } else {
            position++;
            elem.style.top = position + 'px';
            elem.style.left = position + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

// setTimeout(function () {
//     console.log('hello');
// }, 2000);

// const timerId = setTimeout(function (text) {
//     console.log(text);
// }, 2000, 'saySmth');


//подставить готовую ф-ю в setTimeout:
//const timerId = setTimeout(logger, 2000, 'hello');

// function logger(text) {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
// console.log(text);
// i++;
// }

// clearInterval(timerId);

// btn.addEventListener('click', () => {
//     const timerId = setTimeout(logger, 2000, 'hello');
// });

// setInterval - не будет выжидать ещё 500, после выполнения сложных вычислений в ф-и logger(если бы была тяжелой сложной),
// посчитает, что 500 уже прошли и тут же запустит ф-ю logger без паузы
// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 500, 'hello');
// });
//
// //рекурсивный setTimeout - след setTimeout будет дожидаться пока все действия вып-ся, затем подождет 500, и опять запустит ф-ю log
// function log() {
//     console.log('text');
// }
//
// setTimeout (log, setTimeout(log,500),500);