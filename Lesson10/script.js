'use strict';

const  body = document.querySelector('body'),
        collections = document.querySelector('.books'),
        book = document.querySelectorAll('.book'),
        ul = document.querySelectorAll('ul'),       
        title = document.querySelectorAll('a')[4],
        adv = document.querySelector('.adv');


    console.log(collections);
    console.log(book[4]);
    console.log(ul[0]);
    // console.log(elem);
    console.log(body);
    console.log(title);
    console.log(adv);

collections.prepend(book[1]);
collections.append(book[0]);
collections.append(book[4]);
collections.append(book[3]);
collections.append(book[5]);
collections.append(book[2]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
title.textContent ='Книга 3. this и Прототипы Объектов';

adv.remove();


ul[0].classList.add('third-book');
ul[5].classList.add('five-book');
ul[2].classList.add('six-book');


console.log(ul[2]);

const  elem = document.querySelectorAll('.third-book li');
const  elem5 = document.querySelectorAll('.five-book li');
const  elem6 = document.querySelectorAll('.six-book li');

console.log((elem6));


elem[10].before(elem[2]);
elem[3].after(elem[6]);
elem[6].after(elem[8]);

elem5[1].after(elem5[9]);
elem5[4].after(elem5[2]);
elem5[7].after(elem5[5]);

const newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';

console.log(newElem);
elem6[9].insertAdjacentElement('beforebegin', newElem);