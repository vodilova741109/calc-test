'use strict';

// 1
let arr = ['22', '58777', '43299','55378', '423', '99335', '287924'];

for (let i = 0; i < arr.length; i++) {
  let num = String(arr[i]);  /* получаем каждый элемент массива последовательно*/
  // let char = num[0];  /* первый способ получить первый элемент*/  
  // num.charAt(0); /*второй способ*/
  if (num.charAt(0) == 2  || num.charAt(0) == 4) {
    console.log(num);
  }
}

// 2 Вывод простых чисел

// проверяю простое ли число через остаток при делении  
let n = 100;  
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
showPrimes(n);

//  вывожу только простые перескакивая через остальные 
function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      console.log(i + ' Делители этого числа: 1 и ' + i);  // простое
    }
  }

