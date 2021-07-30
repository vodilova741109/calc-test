let num = 266219,
     str = String(266219),
     arr = str.split(''),
     a = +arr[0];


     

// console.log(typeof a);
// console.log(arr.length);
console.log(arr);

  let result = arr[0],
        result1 = 0;
  for (i=1; i<arr.length; i++) {
     arr[i] = +arr[i];  
     result *= arr[i]; /* перемножили все цифры массива*/ 
     result1 = result **3;    /* возведение в степень 3*/ 
    
     
  }
  console.log(result);
  console.log(result1); 
  console.log(String(result1).substring(0,2));
 
 
  
  



