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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,  
    budget: money,
    period: 3,
    periodMission: 3,
    budgetDay: 0,
    budgetMonth: 0,  
    expensesMonth: 0,
    asking: function(){
      if(confirm('Есть ли у Вас дополнительный заработок?')){
      let itemIncome;
      do{
        itemIncome = prompt('Какой у Вас дополнительный заработок?', 'Таксую');
      } 
      while(isNumber(itemIncome));

      let cashIncome;
      do{
        cashIncome = prompt('Сколько В месяц Вы на этом зарабатываете?', 10000);
      } 
      while(!isNumber(cashIncome));


        appData.income[itemIncome] = cashIncome;            
      }


      let arr; 

      do{
        arr = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ''); 
      } 
      while(isNumber(arr));
     
 
      let NewArr = arr.toLowerCase().split(',').map(item => item.trim()); 

      // console.log(NewArr);       

      appData.addExpenses = NewArr.map(upPer);

      function upPer(value) {
       return value[0].toUpperCase().split(',') + value.substr(1);
      }

      appData.deposit = confirm('Есть ли у вас депозит в банке?');     
 
      let sum = 0;     
      for (let i = 0; i < 2; i++) {   

      let itemExpenses; 
      do{
        itemExpenses = prompt('Введите обязательную статью расходов?');
      } 
      while(isNumber(itemExpenses));

      let cashExpenses = +prompt('Во сколько это обойдется?'); 
     
      appData.expenses[itemExpenses] = cashExpenses;

        while (!isNumber(cashExpenses)) {
          cashExpenses = +prompt('Во сколько это обойдется?');
        }         
         sum += +cashExpenses;         
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
      appData.budgetMonth = appData.budget - appData.expensesMonth;
      appData.budgetDay =  Math.floor(appData.budgetMonth/30);    
           
    },    
    getTargetMonth: function (){          
         appData.periodMission = Math.ceil(appData.mission/appData.budgetMonth);      
    },  

    getInfoDeposit: function(){
      if(appData.deposit) {
      
        do{
         appData.percentDeposit = prompt('Какой годовой процент', 10);
        } 
        while(!isNumber(appData.percentDeposit));

        do{
          appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
         } 
         while(!isNumber(appData.moneyDeposit));
  
        
                
      }
    },
    calcSaveMoney: function(){
      return appData.budgetMonth * appData.period;

    }
  
  } 

  appData.asking(); 
  appData.getBudget();
  appData.getTargetMonth();

  
  console.log('Расходы за месяц: ', appData.expensesMonth);   

  console.log('Возможные расходы:' ,  appData.addExpenses.join(', '));
  

  if(appData.periodMission > 0){
    console.log('Цель будет достигнута за '+ appData.periodMission + ' месяцев');
  } else {
    console.log('Цель не будет достигнута ');
  }  

  console.log(appData.getStatusIncome()); 

  
  appData.getInfoDeposit();
  console.log(appData.percentDeposit, appData.moneyDeposit,appData.calcSaveMoney());
 
  for (let key in appData){
    console.log('Hаша программа включает в себя данные:: ' + key + ' значение: ' + appData[key]);
    
   }
    
 

