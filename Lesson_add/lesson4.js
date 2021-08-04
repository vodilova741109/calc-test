'use strict';
  let str = '';
 
    function transformationString(str) {

      if(typeof(str) !== 'string' ) {   
        return ('Вы ввели не строку!');
      }; 
      if (str.length <= 30)  {
        return str.trim();  
                      
      } else {
        str =str.trim();
        return str.slice(0, 30) + '...';
      }
    }
    console.log(transformationString('         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry esetting industry. Lorem Ipsum has been the industry '));

    


