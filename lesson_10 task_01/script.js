'use strict';
const collectionBooks = document.querySelectorAll('.books'),
        collectionBook = document.querySelectorAll('.book')

console.log(collectionBooks);
console.log(collectionBook);

collectionBook[3].before(collectionBook[4]);
collectionBooks[0].append(collectionBook[2]);
collectionBooks[0].prepend(collectionBook[1]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
const thirdHead = document.getElementsByTagName('a')[2];
thirdHead.textContent = '';
thirdHead.insertAdjacentText('afterbegin', 'Книга 3. "this и Прототипы Объектов" ');

console.log(thirdHead);



console.log(collectionBook);







