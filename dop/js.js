
'use strict';

// Урок 7 дополнительный


let li = document.querySelectorAll('li'),
    day = li[5].innerText,

  week =  [li[0], li[1], li[2], li[3], li[4], li[5], li[6]],

  a = week.slice(-2),
  b = week.slice(5,-1);

let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
            
let myDate = new Date();
let fullDate = days[myDate.getDay()];
// document.write(fullDate); // Сегодня: Суббота

console.log(day);
 
console.log(fullDate.toLowerCase());

console.log(day === fullDate.toLowerCase());

  
 for (let key of a){
  //  console.log(key);
   key.classList.add('bold');
 }

 if (day === fullDate.toLowerCase()) {

}
 
for (let key of b){       
  key.classList.add('italic');
   
} 
