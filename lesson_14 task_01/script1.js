'use strict';

const DomElement = function(selector, height, width, bg, frontSize) {
this.selector = selector;
this.height = height;
this.width = width;
this.bg = bg;
this.frontSize = frontSize;
this.element;
}


DomElement.prototype.showElement = function() {
     
      if (this.selector[0] === '.') {
            this.element = document.createElement('div');
            this.element.classList.add(this.selector. slice(1));
       }  else if (this.selector[0] === '#') {
            this.element = document.createElement('p');
            this.element.id = this.selector.slice(1);
       } else {
           console.error('Ввели неверный селектор');
           return;
      }

     this.element.style.cssText = 'height:'  + this.height + 'px;' + 'width:' + this.width + 'px;' + 'background:' 
     + this.bg + ';' + 'font-size:' + this.fontSize + 'px;';

     this.element.textContent = 'Новый объект';
     console.log(this.element);

      document.body.append(this.element);
};


let newDiv = new DomElement('.block', 100, 100, 'green', 10);
console.log(newDiv);
let newP = new DomElement('#best', 200, 150, 'black', 20);
console.log(newP);

newDiv.showElement();
newP.showElement();
