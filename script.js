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
    budgetMonth = money - amount1 - amount2,
    budgetDay = Math.floor(budgetMonth/30),
    periodMission = Math.ceil(mission / budgetMonth);
    

    console.log(typeof money);
    console.log(typeof income);
    console.log(typeof deposit);
    console.log(addExpenses.length);
    console.log('Период равен '+ period + ' месяцев, ' + 'Цель заработать ' + money + ' рублей');
    console.log(addExpenses.toLowerCase());
    console.log(addExpenses.toLowerCase().split(','));
    console.log('Бюджет на месяц : ', budgetMonth );
    console.log('Цель будет достигнута за '+ periodMission + ' месяцев');
    console.log('Бюджет на день : ',budgetDay);

  if (budgetDay > 1200) {
      console.log('У вас высокий уровень дохода');
  } else if (budgetDay >= 600 && budgetDay <= 1200) {
    console.log('У вас средний уровень дохода');
  } else if (budgetDay > 0 && budgetDay < 600) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
  } else {
    console.log('Что то пошло не так');
  }
