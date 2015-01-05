var util = require('util');

// Определение классов

function ParentClass(par1, par2) {
  this.parentField1 = par1;
  this.parentField2 = par2;
}

function ChildClass(par1, par2) {
  this.constructor.super_.apply(this, arguments);
  this.childField1 = par1;
  this.childField2 = par2;
}

// Наследование

util.inherits(ChildClass, ParentClass);

// Создание объекта дочернего класса и проверка результата

var obj = new ChildClass('Hello', 'World');
console.dir({ obj: obj });

/* Консоль:

{ obj:
  { parentField1: 'Hello',
    parentField2: 'World',
    childField1: 'Hello',
    childField2: 'World' } }
*/
