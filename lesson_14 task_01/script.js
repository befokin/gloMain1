'use strict';

function DomElement (selector, height, width, bg, fontSize){
      this.selector = selector;
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
};



DomElement.prototype.createElem  = function() {
      let selector  = '';
      
      if (selector[0] === '.') {
            const elemA = document.createElement('div');
            elemA = elemA.value;
            elemA.cssText.height = '15px';
            elemA.cssText.width = '10px';
            elemA.cssText.background = 'red';
            elemA.cssText.fontSize = '12px';
            elemA.insertAdjacentText('beforeend', 'Новый текст');
            
      } else if (selector[0] === '#') {
            const elemB = document.createElement('#p');
            elemB = elemB = elemB.value;
            elemB.cssText.height = '15px';
            elemB.cssText.width = '10px';
            elemB.cssText.background = 'red';
            elemB.cssText.fontSize = '12px';
            elemB.insertAdjacentText('beforeend', 'Новый текст');
      }
};

function DomElement1(selector, height, width, bg, fontSize) {
 
      DomElement.apply(this, arguments);
};
    
DomElement1.prototype = Object.create(DomElement.prototype);
     
DomElement1.prototype.constructor =  DomElement1;

const domElement = new DomElement();
console.log(domElement);    
const domElement1 = new DomElement1();

domElement1.createElem();
console.log(domElement1);