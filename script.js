'use strict';



let money = document.querySelector('.salary-amount'), 
    itemIncome = document.querySelector('.income-items> .income-title '),
    incomeAmount = document.querySelector('.income-amount'), 
    btnIncome = document.getElementsByTagName('button')[0],
    btnExpenses= document.getElementsByTagName('button')[1],
    additionalIncomeItem = document.querySelectorAll(' .additional_income-item'),
    btnStart = document.getElementById('start'),
    depositСheck = document.querySelector('#deposit-check'),
    budgetMonth = document.getElementsByClassName('budget_month-value')[0],
    budgetDay = document.getElementsByClassName('budget_day-value')[0],
    expensesMonth = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncome = document.getElementsByClassName('additional_income-value')[0],
    additionalExpenses = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriod = document.getElementsByClassName('income_period-value')[0],
    targetMonth = document.getElementsByClassName('target_month-value')[0],
    expenses = document.querySelector('.expenses-items> .expenses-title'),
    expensesAmount= document.querySelector('.expenses-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodAmount= document.querySelector('[type="range"]');
 
   
        
 
// let money;

console.log(money);
console.log(itemIncome);
console.log(incomeAmount);
console.log(btnIncome);
console.log(btnExpenses);
console.log(additionalIncomeItem);
console.log(btnStart);
console.log(depositСheck);
console.log(budgetMonth);
console.log(budgetDay);
console.log(expensesMonth);
console.log(additionalIncome);
console.log(additionalExpenses);
console.log(incomePeriod);
console.log(targetMonth);
console.log(expenses);
console.log(expensesAmount);
console.log(additionalExpensesItem);
console.log(targetAmount);
console.log(periodAmount);





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
    console.log('Hаша программа включает в себя данные: ' + key + ' значение: ' + appData[key]);
    
   }
    
 

