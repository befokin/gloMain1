// Урок №3
// Задание №1

'use strict';

let money = 100000;
let income = '5000';
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

 // Задание №2
money = +prompt('Ваш ежемесячный доход?');

//  Задание №3
addExpenses = +prompt('Перечислите возможные расходы за расчитываемый период через запятую');
console.log(addExpenses);



// Задание №4
deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

// Задание №5
let expenses1 = prompt('Введите обязательную статью расходов?');
console.log(expenses1);

let expenses2 = prompt('Введите обязательную статью расходов?');
console.log(expenses2);

let amount1 = +prompt('Во сколько это обойдется?');
console.log(amount1);

let amount2 = +prompt('Во сколько это обойдется?');
console.log(amount2);

// Задание №6
let budgetMonth = amount1 + amount2;
console.log('Бюджет на месяц:  ' + budgetMonth);

// Задание №7
mission = mission / (money - budgetMonth);
console.log('Цель будет достигнута за:  ' + Math.ceil(mission));

// Задание №8
budgetDay = (budgetDay + budgetMonth);
console.log('Бюджет на день:  ' + Math.floor(budgetDay));

// Задание №9

if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if ((budgetDay >= 600) && (budgetDay <= 1200)) {
    console.log('У вас средний уровень дохода');
} else if ((budgetDay < 600) && (budgetDay >= 0)) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что то пошло не так');
} 

