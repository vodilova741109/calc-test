'use strict';


let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let money, 
    income = 'Фриланс',   
    // addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', '').toLowerCase().split(', '), 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ''),     
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    mission = 200000,  
    period = 12,  
    expenses = [];      
   
let start = function() {
  money = prompt("Ваш месячный доход?", 20000);

  while (!isNumber(money)) {
    money = prompt("Ваш месячный доход?", 20000);
  }
}; 

start();


  let showTypeOf = function(data){
     console.log(data, typeof(data));
  }
  

  let getStatusIncome = function(){
    if (budgetDay > 1200) {
      return ('У вас высокий уровень дохода');
  } else if (budgetDay >= 600 && budgetDay <= 1200) {
    return ('У вас средний уровень дохода');
  } else if (budgetDay > 0 && budgetDay < 600) {
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else {
    return ('Что то пошло не так');
  }  
  } 

  let getExpensesMonth = function(){
    let sum = 0;     

    for (let i = 0; i < 2; i++) {
      
      expenses[i] = prompt('Введите обязательную статью расходов?');
      let amount = prompt('Во сколько это обойдется?');  
      while (!isNumber(amount)) {
        amount = prompt('Во сколько это обойдется?');
      }
      sum += +amount; 
    }     
        return sum;    
  };

  let expensesAmount = getExpensesMonth();

  function getAccumulatedMonth(){
    return money - expensesAmount;
  }

 let accumulatedMonth =   getAccumulatedMonth(),    
  budgetDay = Math.floor(accumulatedMonth/30),
  periodMission = Math.ceil(mission / accumulatedMonth); 


  function getTargetMonth(){    
    return(mission/accumulatedMonth);
    
  }

  showTypeOf(money);
  showTypeOf(income);
  showTypeOf(deposit);

  console.log('Расходы за месяц: ', expensesAmount); 
  console.log(addExpenses.toLowerCase().split(','));  

  if(getTargetMonth() > 0){
    console.log('Цель будет достигнута за '+ getTargetMonth() + ' месяцев');
  } else {
    console.log('Цель не будет достигнута ');
   }
 
  console.log('Бюджет на день : ',budgetDay);
  console.log(getStatusIncome()); 

   // console.log(addExpenses.length);
  // console.log('Период равен '+ period + ' месяцев, ' + 'Цель заработать ' + money + ' рублей');
  // console.log(addExpenses.toLowerCase());
  // console.log('Бюджет на месяц : ', accumulatedMonth);