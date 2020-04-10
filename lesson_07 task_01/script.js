'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money,
    start = function() {
    
        do {
            money = +prompt('Ваш месячный доход?');
        }
        while (!isNumber(money));
        
    console.log(typeof(money));
    };       

start();

let appData = {
        budget: money,
        income: {},
        addIncome: [],
        expenses: {},
        addExpenses: [],
        deposit: false,
        mission: 50000,
        period: 3,
        asking: function(){
            let addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
          
            appData.getExpensesMonth = function() {
               
                    let answer1;
                    let answer2;

                    for (let i = 0; i < 2; i++) {
                
                                              
                        do {
                            answer1  = prompt('Введите обязательную статью расходов?');
                        }  
                        while (!isNumber(answer1)); 
                                               
                        do {
                            answer2 = prompt('Во сколько это обойдется?');
                        }
                        while (!isNumber(answer2)); 

                        answer2 = +answer2;
                        appData.expenses[answer1] = answer2;
                        console.log(appData.expenses);
                       
                     } 
                     
                  }
                  appData.getExpensesMonth();
        }

        appData.asking(); 

};

appData.budgetDay = 0;
appData.budgetMonth = 0;
appData.expensesMonth = 0;

// let showTypeOf = function(name) {
//     console.log(typeof(name));
// };

// showTypeOf(money);
// showTypeOf(appData.income);
// showTypeOf(appData.deposit);


// console.log(addExpenses.toLowerCase().split(', '));

// addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую');
// console.log(addExpenses.toLowerCase().split(', '));



// deposit = confirm('Есть ли у вас депозит в банке?');
// console.log(deposit);


// let expenses = [];
// let expenses1;

// appData.getExpensesMonth = function() {
//     let sum = 0;

//     for (let i = 0; i < 2; i++) {

//         expenses[i] = prompt('Введите обязательную статью расходов?');
        
//         do {
//             expenses1 = prompt('Во сколько это обойдется?')
//         }  
//         while (!isNumber(expenses1)); 
//         sum = sum + +expenses1; 
//     }
      
//     console.log(expenses);
//     console.log(sum);
//     return sum;
// };
 
appData.expensesMonth = appData.getExpensesMonth();
console.log('Расходы за месяц:  ' + appData.expensesMonth);
    
    

appData.getAccumulatedMonth = function() {

return money - appData.expensesMonth;
};
    
appData.accumulatedMonth = appData.getAccumulatedMonth();

let res;
appData.getTargetMonth = function() {
    
  res = Math.ceil(appData.mission / appData.accumulatedMonth);
    console.log(res);    
    return res;
}
appData.getTargetMonth();
    if (res >= 0) {
        console.log('Цель будет достигнута');
    } else if (res < 0){
        console.log('Цель не будет достигнута');
    }

appData.budgetDay = Math.ceil(appData.accumulatedMonth / 30);
console.log(appData.budgetDay);

appData.getStatusIncome = function() {
if (appData.budgetDay >= 1200) {
    return ('У вас высокий уровень дохода');
} else if ((appData.budgetDay >= 600) && (appData.budgetDay <= 1200)) {
    return ('У вас средний уровень дохода');
} else if ((appData.budgetDay < 600) && (appData.budgetDay >= 0)) {
    return ('К сожалению у вас уровень дохода ниже среднего');
} else {
    return('Что то пошло не так');
} 
}
console.log(appData.getStatusIncome());