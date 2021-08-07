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
      appData.expenses.b = +prompt('Во сколько это обойдется?'); 
      
      
        while (!isNumber(appData.expenses.b)) {
          appData.expenses.b = +prompt('Во сколько это обойдется?');
        }   
       
         sum += +appData.expenses.b
         
        }
        appData.expensesMonth = sum; 
      
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
    getBudget:  function (){   
      appData.budgetMonth = money - appData.expensesMonth;
      appData.budgetDay =  Math.floor(appData.budgetMonth/30);   
      appData.period = Math.ceil(appData.mission / appData.budgetMonth);    
           
    },    
    getTargetMonth: function (){          
         appData.period = Math.ceil(appData.mission/appData.budgetMonth);
      
    },  
  
  } 

  appData.asking(); 
  appData.getBudget();
  appData.getTargetMonth();
  
  console.log('Расходы за месяц: ', appData.expensesMonth);   
  

  if(appData.period > 0){
    console.log('Цель будет достигнута за '+ appData.period + ' месяцев');
  } else {
    console.log('Цель не будет достигнута ');
  }  

  console.log(appData.getStatusIncome()); 
 
  for (let key in appData){
    console.log('Hаша программа включает в себя данные:: ' + key + ' значение: ' + appData[key]);
    
   }
    
 

