'use strict';

const collectionBooks = document.querySelectorAll('.books'),
        collectionBook = document.querySelectorAll('.book')

console.log(collectionBooks);
console.log(collectionBook);

// восстановили порядок книг
collectionBook[3].before(collectionBook[4]);
collectionBooks[0].append(collectionBook[2]);
collectionBooks[0].prepend(collectionBook[1]);

// поменяли картинку заднего фона
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// исправили заголовок книги 3
const thirdHead = document.getElementsByTagName('a')[2];
thirdHead.textContent = '';
thirdHead.insertAdjacentText('afterbegin', 'Книга 3. "this и Прототипы Объектов" ');
console.log(thirdHead);

// удалили рекламу со страницы

const advertise = document.querySelectorAll('.adv');
console.log(advertise);
advertise[0].remove();
console.log(advertise);

// восстановили порядок глав во 2-ой и 5-ой книгах
const elementsbook2 = document.getElementsByTagName('ul')[1];
// elementsbook2.classList.add('head');

let arr = elementsbook2;
console.log(arr);
// arr.forEach(function(item, i, array) {
//         console.log(item, i, array);
// });
// for (let item of arr)
// console.log(item);
console.log(elementsbook2);






