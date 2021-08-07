'use strict';

let money;
// проверка на число
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
// запуск программы
let start = function() {
  money = prompt("Ваш месячный доход?", 20000);

  while (!isNumber(money)) {
    money = prompt("Ваш месячный доход?", 20000);
  }
}; 

start();

// создаем объект со свойствами и методами
let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    deposit: false,
    mission: 50000,  
    budget: money,
    period: 3,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
      appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ''); 
      appData.addExpenses.toLowerCase().split(',');    
      appData.deposit = confirm('Есть ли у вас депозит в банке?'); 
      
 
      let sum = 0;     

      for (let i = 0; i < 2; i++) {
        
      appData.expenses.a= prompt('Введите обязательную статью расходов?');
      appData.expenses.b = prompt('Во сколько это обойдется?'); 
      
      
        while (!isNumber(appData.expenses.b)) {
          appData.expenses.b = prompt('Во сколько это обойдется?');
        }

        for (let key in appData.expenses.b ){
         sum += +appData.expenses.b[key]
        }
       
        appData.expenses.sum = sum;

      }     
          return sum;    
 
      
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

    

    getAccumulatedMonth:  function (){    
      
      return money - expensesMonth;
    },  
     

    getTargetMonth: function (){    
      return Math.ceil(appData.mission/budgetMonth);
      
    }
   

  } 

  appData.asking(); 
  
  // расходы за месяц expensesMonth
  let expensesMonth = appData.expenses.sum;
  // console.log(appData.expenses.sum);

  // доходы - расходы: budgetMonth
  let budgetMonth =   appData.getAccumulatedMonth();

  // console.log (budgetMonth);

  // бюджет за день budgetDay
  appData.budgetDay = Math.floor(budgetMonth/30),
  // console.log(appData.budgetDay);

  // период для достижения цели
  appData.period = Math.ceil(appData.mission / budgetMonth); 
  // console.log(appData.period);

  console.log('Расходы за месяц: ', expensesMonth);   
  

  if(appData.getTargetMonth() > 0){
    console.log('Цель будет достигнута за '+ appData.period + ' месяцев');
  } else {
    console.log('Цель не будет достигнута ');
  }  

  console.log(appData.getStatusIncome()); 


 
  for (let key in appData){
    console.log('Hаша программа включает в себя данные:: ' + key + ' значение: ' + appData[key]);
    
   }
    
 
