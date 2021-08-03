'use strict';

let money = +prompt("Ваш месячный доход?", 20000), 
    income = 'Фриланс',   
    // addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', '').toLowerCase().split(', '), 
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ''),     
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    mission = 200000,  
    period = 12,      
    expenses1 =  prompt('Введите обязательную статью расходов?'),
    amount1 = +prompt('Во сколько это обойдется?'),
    expenses2 = prompt('Введите обязательную статью расходов?'),
    amount2 = +prompt('Во сколько это обойдется?'),  
// 3
    accumulatedMonth =  getAccumulatedMonth(),    
    budgetDay = Math.floor(accumulatedMonth/30),
    periodMission = Math.ceil(mission / accumulatedMonth); 

// 7  
  let showTypeOf = function(data) {
     console.log(data, typeof(data));
  }
  

  let getStatusIncome = function() {
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

//  1
  function getExpensesMonth(a,b) {    
    return(amount1 + amount2); 
  }
  
  
//  2
  function getAccumulatedMonth() {
    return(money -getExpensesMonth(amount1, amount2));
  }
  getAccumulatedMonth();


// 4
  function getTargetMonth() {
    return(mission/accumulatedMonth);
  }

  

  showTypeOf(money);
  showTypeOf(income);
  showTypeOf(deposit);

  console.log('Расходы за месяц: ', getExpensesMonth()); 
  console.log(addExpenses.toLowerCase().split(','));  
  console.log('Цель будет достигнута за '+ getTargetMonth() + ' месяцев');
  console.log('Бюджет на день : ',budgetDay);
  console.log(getStatusIncome()); 

   // console.log(addExpenses.length);
  // console.log('Период равен '+ period + ' месяцев, ' + 'Цель заработать ' + money + ' рублей');
  // console.log(addExpenses.toLowerCase());
  // console.log('Бюджет на месяц : ', accumulatedMonth);