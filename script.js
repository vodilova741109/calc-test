'use strict';

let money;

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let start = function() {
  money = prompt("Ваш месячный доход?", 20000);

  while (!isNumber(money)) {
    money = prompt("Ваш месячный доход?", 20000);
  }
}; 


let appData = {
  income: {},
  addIncome: [],
  expenses: [],
  deposit: false,
  mission: 50000,  
  budget: money,
  period: 3,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function(){
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ''); 
    appData.addExpenses.toLowerCase().split(',')    
    appData.deposit = confirm('Есть ли у вас депозит в банке?'); 
  },
 getStatusIncome: function(){
    if (appData.budgetDay > 1200) {
      return ('У вас высокий уровень дохода');
  } else if (appData.budgetDay >= 600 && appData.budgetDay <= 1200) {
    return ('У вас средний уровень дохода');
  } else if (appData.budgetDay > 0 && appData.budgetDay < 600) {
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else {
    return ('Что то пошло не так');
  }  
  },

  expensesAmount: function getExpensesMonth(){
    let sum = 0;     

    for (let i = 0; i < 2; i++) {
      
      appData.expenses[i] = prompt('Введите обязательную статью расходов?');
      let amount = prompt('Во сколько это обойдется?');  
      while (!isNumber(amount)) {
        amount = prompt('Во сколько это обойдется?');
      }
      sum += +amount; 
    }     
        return sum;    
  },


  getAccumulatedMonth:  function (){
    
    return money - appData.expensesAmount;
  },
   
  accumulatedMonth: getAccumulatedMonth(),

  getTargetMonth: function (){    
  
    return(appData.mission / appData.accumulatedMonth);  
    
  },



}

 
   


start();


  // let showTypeOf = function(data){
  //    console.log(data, typeof(data));
  // }
  

 const period = Math.ceil(appData.mission / appData.accumulatedMonth),
       budgetDay =  Math.floor(appData.accumulatedMonth/30); 
 

  
  // appData.budgetDay = Math.floor(appData.accumulatedMonth/30),
  // appData.period = Math.ceil(appData.mission / appData.accumulatedMonth); 


 

  // showTypeOf(money);
  // showTypeOf(appData.income);
  // showTypeOf(appData.deposit);

  console.log('Расходы за месяц: ', appData.expensesAmount()); 
 

  if(appData.getTargetMonth() > 0){
    console.log('Цель будет достигнута за '+ appData.getTargetMonth() + ' месяцев');
  } else {
    console.log('Цель не будет достигнута ');
   }
 
  console.log('Бюджет на день : ', appData.budgetDay);
  console.log(appData.getStatusIncome()); 

   // console.log(addExpenses.length)git status!;
  // console.log('Период равен '+ period + ' месяцев, ' + 'Цель заработать ' + money + ' рублей');
  // console.log(addExpenses.toLowerCase());
  // console.log('Бюджет на месяц : ', accumulatedMonth);
