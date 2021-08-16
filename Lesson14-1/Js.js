'use strict';


function DomElement (selector, height, width, bg, fontSize, textContent) {  
   this.selector = selector;   
   this.height = height; 
   this.width = width;
   this.bg = bg;
   this.fontSize = fontSize;   
   this.textContent = textContent;
  
}

DomElement.prototype.staticMethod = function(){ 
  console.log(this);
  let elem = ''; 
  let div = document.createElement('div');
  div.classList.add(this.selector.slice(1)); 

  let p = document.createElement('p');    
  p.id = this.selector.slice(1);
  

  if (this.selector[0] ==='.'){  
   document.body.appendChild(div);
   elem = div;
   elem.textContent = 'ghbdtn'; 
  
   
  } else if (this.selector[0] ==='#') {
    document.body.appendChild(p);
    elem = p;
    elem.textContent = 'привет';    
  } 
  console.log(elem);
  
  elem.style.background = this.bg;
  elem.style.height = this.height;
  elem.style.width = this.width;
  elem.style.fontSize = this.fontSize;
  elem.textContent = this.textContent;
}



let dom = new DomElement('.best', '50px', '150px', 'yellow', '12px', 'Привет, Мир!' );



dom.staticMethod();


