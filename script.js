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
    incomeItem = document.querySelectorAll('.income-items'),
    btnCancel = document.querySelector('.result #cancel');



// проверка на число
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
// запуск программы
// создаем объект со свойствами и методами
let appData = {
    // prop: 42,
    income: {},
    addIncome: [],
    expenses: {},
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,   
    budget: 0,   
    budgetDay: 0,
    budgetMonth: 0,  
    periodAmount: 1,
    expensesMonth: 0,
    incomeMonth: 0, 
    addExpenses:[],   
    // this: function(){
    //   console.log(this);
    // },
    // запускает все функции расчета и проверку на заолненность месячного дохода 
    start: function() {  
  
      console.log(this);
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
      appData.calcIncomePeriod();    
      appData.blokInputText();
      appData.blockStartBtn();    
    
    },  
    // показывает результут всех расчетов и при изменнении range показывает изменения 
    showResult: function(){
      // appData.this();
      budgetMonth.value = this.budgetMonth;
      budgetDay.value = this.budgetDay;
      expensesMonth.value = this.expensesMonth;
      additionalExpenses.value = this.addExpenses.join(', ');
      additionalIncome.value =  this.addIncome.join(', ');
      targetMonth.value = this.getTargetMonth();     
      additionalIncome.value = this.incomeMonth;
      incomePeriod.value = this.calcIncomePeriod();
      periodAmount.addEventListener('input', () => {
        this.changePeriodAmound();
        this.calcIncomePeriod();    
      });   
      
    },

    // создает клоны полей обязательные расходы, но не больше трех
    addExpensesBlock: function(){             
      let cloneExpensesItem =expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnExpenses);
      expensesItems = document.querySelectorAll('.expenses-items');
      if(expensesItems.length === 3) {
        btnExpenses.style.display = 'none';
      }
    },  
    // через цикл получаем все статьи расходов с суммами (каждый в своем Item),
    // затем создаем новые переменные, куда складывае значения этих полей, а после
    // проверки передаем их массив expenses и дополнительно суммируем все суммы расходов и передаем в свойство объекта expensesMonth
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
        // appData.this();  
        this.expensesMonth = sum; 
    }, 
    // аналогично расходам создаем те же 2 функции по доходам
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
      // appData.this();
      this.incomeMonth = sum;  
     
    }, 

    // Поле "Возможные расходы" получаем cтроку,  разбиваем строку на массив, путем разделения через запятую
    // пробигаем по каждому эементу и с помощью trim убираем лишние пробелы
    // если элемент не пустой, то добавляем в массив в новом виде
    getAddExpenses: function(){            
      let addExpenses = additionalExpensesItem.value.split(',');      
      addExpenses.forEach(function(item){
        item = item.trim();        
        if (item !== ''){          
          this.addExpenses.push(item);
          // console.log(appData.addExpenses);
        }
      });
    },

    // тоже самое с доходами
    getAddIncome: function(){        
      additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();        
        if (itemValue !== ''){   
          
          this.addIncome.push(itemValue);
          // console.log(appData.addExpenses);
        }
      });
    },
    // пока остался вопрос о депозите
    asking: function(){      
  
      //  новый массив = старый массив переводим в нижний регистр, разделяя все слова на значения массива. создаем новый массив, куда передаем элементы без пробелов
 
      // let NewArr = arr.toLowerCase().split(',').map(item => item.trim()); 

      // appData.addExpenses = NewArr.map(upPer);

      // function upPer(value) {
      //  return value[0].toUpperCase().split(',') + value.substr(1);
      // }
      // appData.this();

      this.deposit = confirm('Есть ли у вас депозит в банке?'); 
    },

    // проверка на уровень дохода
    getStatusIncome: function(){
      // appData.this();
      if (this.budgetDay > 1200) {
        return ('У вас высокий уровень дохода');
    } else if (this.budgetDay >= 600 && this.budgetDay <= 1200) {
      return ('У вас средний уровень дохода');
    } else if (this.budgetDay > 0 && this.budgetDay < 600) {
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
      return ('Что то пошло не так');
    }  
    }, 

    // расчет бюджета на месяц и на день
    getBudget:  function (){   
      // console.log(this);
      this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
      this.budgetDay =  Math.floor(this.budgetMonth/30);               
    }, 
    //  расчет периода цели сумма цели/на бюджет в месяц
    getTargetMonth: function (){          
        return Math.ceil(targetAmount.value/this.budgetMonth);      
    },  
    // расчет дохода по депозиту
    getInfoDeposit: function(){
      // console.log(this);
      if(this.deposit) {
      
        do{
         this.percentDeposit = prompt('Какой годовой процент', 10);
        } 
        while(!isNumber(this.percentDeposit));

        do{
          this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
         } 
         while(!isNumber(this.moneyDeposit));
  
        
                
      }
    },
    // изменение к-ва месяцев в rangе и передача данных в переменную для расчета наколения за месяц
    changePeriodAmound: function(){     
      periodAmountValue.textContent = periodAmount.value;   
      this.periodAmount = periodAmount.value;
    },      
    // расчет накопления за месяц
    calcIncomePeriod: function(){
      incomePeriod.value = budgetMonth.value * periodAmount.value
    },   
    // блокируем текстовые поля
    blokInputText: function(){    
      let inputText = document.querySelectorAll('.data [type=text]');       
      inputText.forEach(function(item){
     item.disabled = true;       
      });      
    },
    // меняем кнопки
    blockStartBtn: function(){      
      btnStart.style.display = 'none';      
      btnCancel.style.display = 'block';  
    
    }, 
      // снова меняем кнопки и и очищаем значение полей
    blockCancelBtn: function(){    
        
      btnStart.style.display = 'block';      
      btnCancel.style.display = 'none'; 
      let inputText = document.querySelectorAll('[type=text]');
      inputText.forEach(function(item){
        item.value= '';       
         });         
         
    },  
    // возвращаем в исходное положение калькулятор
    reset: function(){
      let inputText = document.querySelectorAll('.data [type=text]');       
      inputText.forEach(function(item){
      item.disabled = false;       
      });  
    }

    
   
  } 


  // навешиваем обработчики событий  
  btnStart.addEventListener('click', appData.start);
  btnExpenses.addEventListener('click', appData.addExpensesBlock);
  btnIncome.addEventListener('click', appData.addIncomeBlock);   
  btnCancel.addEventListener('click', appData.blockCancelBtn);
  btnCancel.addEventListener('click', appData.reset);



  // appData.test(); 
  
  // appData.getInfoDeposit();
  // console.log(appData.percentDeposit, appData.moneyDeposit,appData.calcIncomePeriod());
 
  // for (let key in appData){
  //   console.log('Hаша программа включает в себя данные: ' + key + ' значение: ' + appData[key]);
    
  //  }
    
 
 