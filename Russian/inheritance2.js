var util = require('util');

// Конструктор родительского класса
function ParentClass(par1, par2) {
  this.parentField1 = par1;
  this.parentField2 = par2;
}

// Метод родительского класса
ParentClass.prototype.parentMethod = function(par) {
  console.log('parentMethod("' + par + '")');
};

// Свойство родительского класса
ParentClass.prototype.parentField = 'Parent field value';

// Конструктор дочернего класса
function ChildClass(par1, par2) {
  ChildClass.super_.apply(this, arguments);
  this.childField1 = par1;
  this.childField2 = par2;
}

// Наследование
util.inherits(ChildClass, ParentClass);

// Метод дочернего класса
ChildClass.prototype.childMethod = function(par) {
  console.log('childMethod("' + par + '")');
};

// Свойство дочернего класса
ChildClass.prototype.childField = 'Child field value';

// Создание объектов от каждого класса
var parentClassInstance = new ParentClass('Marcus', 'Aurelius');
var childClassInstance = new ChildClass('Yuriy', 'Gagarin');

// Проверка результатов
console.dir({
  parentClassInstance: parentClassInstance,
  childClassInstance: childClassInstance
});

console.dir({
  objectFieldDefinedInParent: childClassInstance.parentField1,
  classFieldDefinedInParent: childClassInstance.parentField,
  objectFieldDefinedInChild: childClassInstance.childField1,
  classFieldDefinedInChild: childClassInstance.childField
});

parentClassInstance.parentMethod('Cartesius');
childClassInstance.childMethod('von Leibniz');

/* Консоль:

{ parentClassInstance:
    { parentField1: 'Marcus', parentField2: 'Aurelius' },
  childClassInstance:
    { parentField1: 'Yuriy', parentField2: 'Gagarin',
      childField1: 'Yuriy', childField2: 'Gagarin' } }
{ objectFieldDefinedInParent: 'Yuriy',
  classFieldDefinedInParent: 'Parent field value',
  objectFieldDefinedInChild: 'Yuriy',
  classFieldDefinedInChild: 'Child field value' }
parentMethod("Cartesius")
childMethod("von Leibniz")

*/
