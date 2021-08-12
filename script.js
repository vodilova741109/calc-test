'use strict';



let money = document.querySelector('.salary-amount'), 
    itemIncome = document.querySelector('.income-items> .income-title '),    
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
    expensesItems = document.querySelectorAll('.expenses-items'),
    expensesAmount= document.querySelector('.expenses-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodAmount= document.querySelector('[type="range"]'),
    periodAmountValue = document.querySelector('.period-amount'),
    incomeItem = document.querySelectorAll('.income-items');


 
// console.log(money);
// console.log(itemIncome);
// console.log(incomeAmount);
// console.log(btnIncome);
// console.log(btnExpenses);
// console.log(additionalIncomeItem);
// console.log(btnStart);
// console.log(depositСheck);
// console.log(budgetMonth);
// console.log(budgetDay);
// console.log(expensesMonth);
// console.log(additionalIncome);
// console.log(additionalExpenses);
// console.log(incomePeriod);
// console.log(targetMonth);
// console.log(expenses);
// console.log(expensesAmount);
// console.log(additionalExpensesItem);
// console.log(targetAmount);
// console.log(periodAmount);

// проверка на число
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
// запуск программы
// создаем объект со свойствами и методами
let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,   
    budget: 0,   
    budgetDay: 0,
    budgetMonth: 0,  
    period: 1,
    expensesMonth: 0,
    incomeMonth: 0, 
    addExpenses:[],   
    start: function() {   
      if(money.value === '' )  {
        alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
        return;
      } 
      if(!isNumber(money.value)) {
        alert('Ошибка, введите число!');
        return;
      }
      appData.budget = +money.value;        
      // appData.asking();            
      
      appData.getExpenses();
      appData.getIncome();
      appData.getAddExpenses();
      appData.getAddIncome();  
      appData.getBudget();
      appData.getTargetMonth();      
      appData.showResult();
      appData.start();      
    },   
    showResult: function(){
      budgetMonth.value = appData.budgetMonth;
      budgetDay.value = appData.budgetDay;
      expensesMonth.value = appData.expensesMonth;
      additionalExpenses.value = appData.addExpenses.join(', ');
      additionalIncome.value =  appData.addIncome.join(', ');
      targetMonth.value = appData.getTargetMonth();     
      additionalIncome.value = appData.incomeMonth;
      incomePeriod.value = appData.calcSaveMoney();      

    },
    addExpensesBlock: function(){           
      let cloneExpensesItem =expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnExpenses);
      expensesItems = document.querySelectorAll('.expenses-items');
      if(expensesItems.length === 3) {
        btnExpenses.style.display = 'none';
      }
    },  
    getExpenses: function(){
      let sum = 0;
      expensesItems.forEach(function(item){         
         let itemExpenses = item.querySelector('.expenses-title').value;
         let cashExpenses = +item.querySelector('.expenses-amount').value;
          if (itemExpenses !== '' && cashExpenses !== ''&& (isNumber(cashExpenses))){
            appData.expenses[itemExpenses] = cashExpenses;
            sum += +cashExpenses;  
          }     
      });       
        appData.expensesMonth = sum; 
    }, 

    addIncomeBlock: function(){           
      let cloneIncomeItem = incomeItem[0].cloneNode(true);
      incomeItem[0].parentNode.insertBefore(cloneIncomeItem, btnIncome);
      incomeItem = document.querySelectorAll('.income-items');
      if(incomeItem.length === 3) {
        btnIncome.style.display = 'none';
      }
    },  
    getIncome: function(){
      let sum = 0;
      incomeItem = document.querySelectorAll('.income-items');    
      incomeItem.forEach(function(item) {         
         let itemIncome = item.querySelector('.income-title').value;
         let cashIncome = +item.querySelector('.income-amount').value;
          if (itemIncome !== '' && cashIncome !== ''&& (isNumber(cashIncome))){            
            appData.income[itemIncome] = cashIncome;  
            sum += +cashIncome;                       
          }
      });
      appData.incomeMonth = sum;           
     
    }, 
    getAddExpenses: function(){
      let addExpenses = additionalExpensesItem.value.split(',');      
      addExpenses.forEach(function(item){
        item = item.trim();        
        if (item !== ''){          
          appData.addExpenses.push(item);
          // console.log(appData.addExpenses);
        }
      });
    },
    getAddIncome: function(){        
      additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();        
        if (itemValue !== ''){          
          appData.addIncome.push(itemValue);
          // console.log(appData.addExpenses);
        }
      });
    },
    asking: function(){
      // if(confirm('Есть ли у Вас дополнительный заработок?')){
      // let itemIncome;
      // do{
      //   itemIncome = prompt('Какой у Вас дополнительный заработок?', 'Таксую');
      // } 
      // while(isNumber(itemIncome));

      // let cashIncome;
      // do{
      //   cashIncome = prompt('Сколько В месяц Вы на этом зарабатываете?', 10000);
      // } 
      // while(!isNumber(cashIncome));


      //   appData.income[itemIncome] = cashIncome;            
      // }


      // let arr; 

      // do{
      //   arr = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ''); 
      // } 
      // while(isNumber(arr));
     
 
      // let NewArr = arr.toLowerCase().split(',').map(item => item.trim()); 

      // console.log(NewArr);       

      // appData.addExpenses = NewArr.map(upPer);

      // function upPer(value) {
      //  return value[0].toUpperCase().split(',') + value.substr(1);
      // }

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
    getBudget:  function (){   
      appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
      appData.budgetDay =  Math.floor(appData.budgetMonth/30);               
    },    
    getTargetMonth: function (){          
        return Math.ceil(targetAmount.value/appData.budgetMonth);      
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
    eventFunc: function(){
      appData.period = +periodAmount.value;  
      periodAmountValue.textContent = +periodAmount.value;      
    },      
    calcSaveMoney: function(){
      return appData.budgetMonth * appData.period;
    },     
  } 



  btnStart.addEventListener('click', appData.start);
  btnExpenses.addEventListener('click', appData.addExpensesBlock);
  btnIncome.addEventListener('click', appData.addIncomeBlock);  
  periodAmount.addEventListener('input', appData.eventFunc);


  
  // console.log('Расходы за месяц: ', appData.expensesMonth);   

  // console.log('Возможные расходы:' ,  appData.addExpenses.join(', '));
  

  // if(appData.periodMission > 0){
  //   console.log('Цель будет достигнута за '+ appData.periodMission + ' месяцев');
  // } else {
  //   console.log('Цель не будет достигнута ');
  // }  

  // console.log(appData.getStatusIncome()); 

  
  // appData.getInfoDeposit();
  // console.log(appData.percentDeposit, appData.moneyDeposit,appData.calcSaveMoney());
 
  // for (let key in appData){
  //   console.log('Hаша программа включает в себя данные: ' + key + ' значение: ' + appData[key]);
    
  //  }
    
 

