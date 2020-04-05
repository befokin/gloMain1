

'use strict';

let money = 100000;
let income = '5000';
let addExpenses = 'Интернет, Такси, Коммуналка';
let deposit = true;
let mission = 10000;
let period = 12;

let showTypeOf = function(name) {
    console.log(typeof(name));
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// console.log(addExpenses.length);

// console.log('period =' + ' ' + period + ' ' + 'месяцев');
// console.log('цель заработвть' + ' '+ mission + ' ' + 'долларов');

console.log(addExpenses.toLowerCase().split(', '));

// let budgetDay = (money/30);
// console.log(budgetDay);


 // Задание №2
money = +prompt('Ваш ежемесячный доход?');

//  Задание №3
addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую');
console.log(addExpenses.toLowerCase().split(', '));



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
//  let budgetMonth = amount1 + amount2;
//  console.log('Бюджет на месяц:  ' + budgetMonth);

// // Задание №7
// let mission1 = mission / (money - budgetMonth);
// console.log('Цель будет достигнута за:  ' + Math.ceil(mission1));

// // Задание №8
// budgetDay = (budgetDay + budgetMonth);
// console.log('Бюджет на день:  ' + Math.floor(budgetDay));


// Урок №4
// Задание №1

function getExpensesMonth(a, b) {
let res = a + b;
return res;
}
    
console.log(getExpensesMonth(amount1, amount2));
    
    
// Задание №2 и №3
function getAccumulatedMonth(a, b, c) {
let res = a - b - c;
return res;
}
    
let accumulatedMonth = getAccumulatedMonth(money, amount1, amount2);
console.log(accumulatedMonth);
    
    
// Задание №4
function getTargetMonth(a, b) {
let period = a / b;
return period;
}
    
console.log(Math.ceil(getTargetMonth(mission, accumulatedMonth)));

// Задание №6
let budgetDay = accumulatedMonth / 30;
console.log(budgetDay);


let getStatusIncome = function() {
if (budgetDay >= 1200) {
    return ('У вас высокий уровень дохода');
} else if ((budgetDay >= 600) && (budgetDay <= 1200)) {
    return ('У вас средний уровень дохода');
} else if ((budgetDay < 600) && (budgetDay >= 0)) {
    return ('К сожалению у вас уровень дохода ниже среднего');
} else {
    return('Что то пошло не так');
} 
}
console.log(getStatusIncome());








