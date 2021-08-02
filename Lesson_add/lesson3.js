'use strict';

// Урок 3 дополнительный

// 1.
// let ru = document.getElementById('ru'),
//     en = document.getElementById('en'),
//     i = prompt('Введите язык', 'ru'),
//     lang = i;

// a.
// if ( lang == 'ru') { 
//   ru.classList.add('block');
//   en.classList.add('none'); 
// } else if ( lang =='en') {
//   ru.classList.add('none'); 
//   en.classList.add('block'); 
// }  else {
//   alert('Неизвестный язык');
// }  

// b.
// switch (lang) {
//   case 'ru':
//   ru.classList.add('block');
//   en.classList.add('none');
//   break;
//   case 'en':
//   ru.classList.add('none'); 
//   en.classList.add('block');
//   break;
//   default:
//     alert('Неизвестный язык');
// } 

//  c.
// let arr = [
//   ru = [ 'пн', 'вт', 'ср','чт','пт','сб','вс'],
//   en = [ 'mo', 'tu', 'we','th','fr','sa','su'],
// ]

// let lang = arr[1];
    
// alert(lang.join());

// 2.
let namePerson = prompt('Введите имя', 'Артем');

namePerson == 'Артем' ? alert('Директор') : namePerson == 'Максим' ? alert('Преподаватель') : alert ('Студент');



 
    
  

