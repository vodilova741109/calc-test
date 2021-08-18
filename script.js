'use strict';
const money = document.querySelector('.salary-amount'), 
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
    targetMonth = document.getElementsByClassName('target_month-value')[0],
    expenses = document.querySelector('.expenses-items> .expenses-title'),   
    expensesAmount= document.querySelector('.expenses-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),    
    btnCancel = document.querySelector('.result #cancel');

let  incomeItem = document.querySelectorAll('.income-items'),
     expensesItems = document.querySelectorAll('.expenses-items'),
     incomePeriod = document.getElementsByClassName('income_period-value')[0],
     periodAmountValue = document.querySelector('.period-amount'),
     periodAmount= document.querySelector('[type="range"]');

// проверка на число
const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
// запуск программы

class AppData {
  constructor(){
    this.income = {};
    this.addIncome = [];
    this.expenses = {};
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;   
    this.budget = 0;   
    this.budgetDay = 0;
    this.budgetMonth = 0;  
    this.periodAmount = 1;
    this.expensesMonth = 0;
    this.incomeMonth = 0; 
    this.addExpenses = [];  
  }
  // запускает все функции расчета и проверку на заолненность месячного дохода 
  start () {     
    if(money.value === '' )  {
      alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
      return;
    } 
    if(!isNumber(money.value)) {
      alert('Ошибка, введите число!');
      return;
    }
    this.budget = +money.value;        
    // appData.asking(); 
    this.getExpenses();
    this.getIncome();
    this.getAddExpenses();
    this.getAddIncome();  
    this.getBudget();
    this.getTargetMonth();      
    this.showResult();      
    this.calcIncomePeriod();    
    this.blokInputText();
    this.blockStartBtn();    
  } 
  // показывает результут всех расчетов и при изменнении range показывает изменения 
  showResult (){  
    budgetMonth.value = this.budgetMonth;
    budgetDay.value = this.budgetDay;
    expensesMonth.value = this.expensesMonth;
    additionalExpenses.value = this.addExpenses.join(', ');
    additionalIncome.value =  this.addIncome.join(', ');
    targetMonth.value = this.getTargetMonth();     
    // additionalIncome.value = this.incomeMonth;
    incomePeriod.value = this.calcIncomePeriod();
    // additionalExpenses.value= this.getAddExpenses();
    periodAmount.addEventListener('input', () => {
      this.changePeriodAmound();
      this.calcIncomePeriod();    
    });     
  }
  // создает клоны полей обязательные расходы, но не больше трех
  addExpensesBlock (){             
    const cloneExpensesItem =expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnExpenses);
    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3) {
      btnExpenses.style.display = 'none';
    }
  }  
  // через цикл получаем все статьи расходов с суммами (каждый в своем Item),
  // затем создаем новые переменные, куда складывае значения этих полей, а после
  // проверки передаем их массив expenses и дополнительно суммируем все суммы расходов и передаем в свойство объекта expensesMonth
  getExpenses (){      
    let sum = 0;     
    expensesItems.forEach(function(item){                
      const itemExpenses = item.querySelector('.expenses-title').value;
      const cashExpenses = +item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== ''&& (isNumber(cashExpenses))){
          appData.expenses[itemExpenses] = cashExpenses;
          sum += +cashExpenses;  
        }     
    });     
      // appData.this();  
      this.expensesMonth = sum; 
  }
  // аналогично расходам создаем те же 2 функции по доходам
  addIncomeBlock (){              
    const cloneIncomeItem = incomeItem[0].cloneNode(true);
    incomeItem[0].parentNode.insertBefore(cloneIncomeItem, btnIncome);
    incomeItem = document.querySelectorAll('.income-items');
    if(incomeItem.length === 3) {
      btnIncome.style.display = 'none';
    }
  }  
  getIncome (){
    const _this = this;
    let sum = 0;
    incomeItem = document.querySelectorAll('.income-items');    
    incomeItem.forEach(function(item) {         
      const itemIncome = item.querySelector('.income-title').value;
      const cashIncome = +item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cashIncome !== ''&& (isNumber(cashIncome))){            
          _this.income[itemIncome] = cashIncome;  
          sum += +cashIncome;                       
        }
    });
    // appData.this();
    this.incomeMonth = sum;   
  }
  // Поле "Возможные расходы" получаем cтроку,  разбиваем строку на массив, путем разделения через запятую
  // пробигаем по каждому эементу и с помощью trim убираем лишние пробелы
  // если элемент не пустой, то добавляем в массив в новом виде
  getAddExpenses (){            
    const addExpenses = additionalExpensesItem.value.split(',');  
    addExpenses.forEach((item) =>{
      item = item.trim();        
      if (item !== ''){          
        this.addExpenses.push(item);     
      }
    });
  }
  // тоже самое с доходами
  getAddIncome (){   
    additionalIncomeItem.forEach(function(item){
      const itemValue = item.value.trim();        
      if (itemValue !== ''){           
      this.addIncome.push(itemValue);
        // console.log(appData.addExpenses);  
      }
    }.bind(this));
  }
  // пока остался вопрос о депозите
  asking (){   
  //  новый массив = старый массив переводим в нижний регистр, разделяя все слова на значения массива. создаем новый массив, куда передаем элементы без пробелов

  // let NewArr = arr.toLowerCase().split(',').map(item => item.trim()); 

  // appData.addExpenses = NewArr.map(upPer);

  // function upPer(value) {
  //  return value[0].toUpperCase().split(',') + value.substr(1);
  // }
  // appData.this();
  this.deposit = confirm('Есть ли у вас депозит в банке?'); 
}
  // проверка на уровень дохода
  getStatusIncome (){
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
  }
  // расчет бюджета на месяц и на день
  getBudget(){   
    // console.log(this);
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay =  Math.floor(this.budgetMonth/30);               
  }
  //  расчет периода цели сумма цели/на бюджет в месяц
  getTargetMonth (){          
      return Math.ceil(targetAmount.value/this.budgetMonth);      
  }  
  // расчет дохода по депозиту
  getInfoDeposit (){    
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
  }
  // изменение к-ва месяцев в rangе и передача данных в переменную для расчета наколения за месяц
  changePeriodAmound (){     
    periodAmountValue.textContent = periodAmount.value;   
    this.periodAmount = periodAmount.value;
  } 
  // расчет накопления за месяц
  calcIncomePeriod (){
    incomePeriod.value = budgetMonth.value * periodAmount.value;
  }   
  // блокируем текстовые поля
  blokInputText (){    
    const inputText = document.querySelectorAll('.data [type=text]');       
    inputText.forEach(function(item){
    item.disabled = true;       
      });      
  }
  // меняем кнопки
  blockStartBtn (){      
    btnStart.style.display = 'none';      
    btnCancel.style.display = 'block';  
  } 
    // снова меняем кнопки и и очищаем значение полей
  blockCancelBtn (){        
    btnStart.style.display = 'block';      
    btnCancel.style.display = 'none'; 
    const inputText = document.querySelectorAll('[type=text]');    
    inputText.forEach(function(item){
      item.value= '';       
    });     
      // for(let [key, value] in Object.entries(appData)){
      //     appData[key] = '';
      // }        
  }
  // возвращаем в исходное положение калькулятор
  reset (){
    const inputText = document.querySelectorAll('.data [type=text]');       
    inputText.forEach(function(item){
    item.disabled = false;       
    });  
  }
   // навешиваем обработчики событий  
  eventsListeners (){   
    btnStart.addEventListener('click', this.start.bind(this));
    btnExpenses.addEventListener('click', this.addExpensesBlock);
    btnIncome.addEventListener('click', this.addIncomeBlock);   
    btnCancel.addEventListener('click', () => {
      this.blockCancelBtn();
      this.clearFormData();
    });
    btnCancel.addEventListener('click', appData.reset);
  }   
  clearFormData () {
    this.income = {};
    this.addIncome = [];
    this.expenses = {};
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;   
    this.budget = 0;   
    this.budgetDay = 0;
    this.budgetMonth = 0;  
    this.periodAmount = 1;
    this.expensesMonth = 0;
    this.incomeMonth = 0; 
    this.addExpenses = [];
  } 
}

// создаем объект со свойствами и методами
const appData = new AppData();

Object.defineProperty(appData, "calcIn", {enumerable: false})

appData.eventsListeners();


 
 

  
  // appData.getInfoDeposit();
  // console.log(appData.percentDeposit, appData.moneyDeposit,appData.calcIncomePeriod());
 
  // for (let key in appData){
  //   console.log('Hаша программа включает в себя данные: ' + key + ' значение: ' + appData[key]);
    
  //  }
    
 
 