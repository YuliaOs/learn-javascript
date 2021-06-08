
'use strict';

// touchstart - событие срабатывает при возникновении касания к элементу
// touchmove - палец при касании к эл-ту начинает двигаться по нему
// touchend - палец оторвался от эл-та
// touchenter - ведем пальцем по экрану и наскальзываем на пределы эл-та с этим событием
// touchleave - палец продолжил скользить и ушёл за пределы эл-та
// touchcancel - точка соприкосновения больше не регистрируется на поверхности (палец выйдет за пределы браузера

window.addEventListener('DOMContentLoaded', () => {

const box = document.querySelector('.box');

box.addEventListener('touchstart', (e) => {

    e.preventDefault();
    console.log('start');
    console.log(e.targetTouches);

});
box.addEventListener('touchmove', (e) => {

    e.preventDefault();
    console.log('move');
    console.log(e.targetTouches[0].pageX);

});
//
// box.addEventListener('touchend', (e) => {
//
//     e.preventDefault();
//     console.log('end');
//
// });
});

// touches - console.log(e.touches); -- позволяет получить список пальцев кот есть на экране
// targetTouches --- пальцы кот взаимодействуют именно с этим эл-том
// changedTouches --- список пальцев кот-е уч-ют в текущем событии