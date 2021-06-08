'use strict';

const now = new Date('2021-03-17');
// const now0 = new Date(2020, 3, 17, 14);
// const now1 = new Date(0); // 1790 год
// // console.log(now0);
//
// const now2 = new Date();
// console.log(now2.getFullYear());
// console.log(now2.getMonth());
// console.log(now2.getDate());
// console.log(now2.getDay());  // день недели
// console.log(now2.getHours());
// console.log(now2.getUTCHours());
//
//
// console.log(now2.getTimezoneOffset()); // разница в минутах от главного пояса -180
// console.log(now2.getTime()); // к-во мс с 1790 = 1616063861331
// console.log(new Date(1616063861331));  // вернет в дату


now.setHours(15);
console.log(now);

let start = new Date();

for (let i=0; i<100000; i++) {
    let some = i ** 3; // ^3
}

let end = new Date();

console.log(`цикл выполнился за ${end - start} мс`);

console.log(Date.parse(new Date())); // количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC
