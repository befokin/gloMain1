'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money;
let income = '5000';
let addExpenses = 'Интернет, Такси, Коммуналка';
let deposit = true;
let mission = 100000;
let period = 12;

let start = function() {
    
    do {
        money = +prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));
    
console.log(typeof(money));
};       

start();

let showTypeOf = function(name) {
    console.log(typeof(name));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


console.log(addExpenses.toLowerCase().split(', '));

addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую');
console.log(addExpenses.toLowerCase().split(', '));



deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);


let expenses = [];
let expenses1;

let getExpensesMonth = function() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        expenses[i] = prompt('Введите обязательную статью расходов?');
        
        do {
            expenses1 = prompt('Во сколько это обойдется?')
        }  
        while (!isNumber(expenses1)); 
        sum = sum + expenses1; 
    }
      
    console.log(expenses);
    console.log(sum);
    return sum;
};
 
let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц:  ' + expensesAmount);
    
    

let getAccumulatedMonth = function() {

return money - expensesAmount;
};
    
let accumulatedMonth = getAccumulatedMonth();

let res;
let getTargetMonth = function() {
    
   res = mission / accumulatedMonth;
       
    return res;
}
getTargetMonth();
    if (res > 0) {
        console.log('Цель будет достигнута');
    } else if (res < 0){
        console.log('Цель не будет достигнута');
    }


let budgetDay = accumulatedMonth / 30;


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