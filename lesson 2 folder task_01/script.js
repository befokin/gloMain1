let money = 1000;
let income = '500';
let addExpenses = 'Интернет, Такси, Коммуналка';
let deposit = true;
let mission = 10000;
let period = 12;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log('period =' + ' ' + period + ' ' + 'месяцев');
console.log('цель заработвть' + ' '+ mission + ' ' + 'долларов');

console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = (money/30);
console.log(budgetDay);
