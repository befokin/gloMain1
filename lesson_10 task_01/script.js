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
const elementsbook2 = document.querySelectorAll('ul');
console.log(elementsbook2);


const elements = document.querySelectorAll('li');
console.log(elements);

elements[15].after(elements[8]);
elements[10].before(elements[12]);
elements[10].before(elements[14]);

elements[38].before(elements[45]);
elements[40].after(elements[38]);
elements[43].after(elements[41]);


// в шестой книге добавить главу
const newElem = document.createElement('li');
console.log(newElem);

elements[55].append(newElem);
console.log(newElem);

newElem.insertAdjacentText('beforeend', 'Глава 8: За пределами ES6');










