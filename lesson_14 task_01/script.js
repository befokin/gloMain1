'use strict';

function DomElement (selector, height, width, bg, fontSize){
      this.selector = selector;
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
};

DomElement.prototype.createElem  = function() {
   
      if (selector[0] === '.') {
            let newElem = document.createElement('div');

      } else if (selector[0] === '#') {
            let newElem = document.createElement('#p');
      }

      newElem.cssText.height = '15px';
      newElem.cssText.width = '10px';
      newElem.cssText.background = 'red';
      newElem.cssText.fontSize = '12px';

      newElem.insertAdjacentText('beforeend', 'Новый текст');
};

function DomElement1(selector, height, width, bg, fontSize) {
 
      DomElement.apply(this, arguments);
};
    
DomElement1.prototype = Object.create(DomElement.prototype);
     
DomElement1.prototype.constructor =  DomElement1;

const domElement = new DomElement();    
const domElement1 = new DomElement1();
domElement1.createElem();