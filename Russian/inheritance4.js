﻿var util = require('util');

// Средство для переопределения функций
Function.prototype.override = function(fn) {
  var superFunction = this;
  return function() {
    this.inherited = superFunction;
    return fn.apply(this, arguments);
  };
};

// Конструктор родительского класса
function ParentClass(par1, par2) {
  this.parentField1 = par1;
  this.parentField2 = par2;
}

// Метод родительского класса
ParentClass.prototype.methodName = function(par) {
  console.log('Parent method implementation: methodName("' + par + '")');
};

// Конструктор дочернего класса
function ChildClass(par1, par2) {
  ChildClass.super_.apply(this, arguments);
  this.childField1 = par1;
  this.childField2 = par2;
}

// Наследование
util.inherits(ChildClass, ParentClass);

// Переопределение метода в дочернем классе
ChildClass.prototype.methodName = ParentClass.prototype.methodName.override(function(par) {
  // Вызов метода родительского класса
  this.inherited(par); // или this.inherited.apply(this, arguments);
  // Собственный функционал
  console.log('Child method implementation: methodName("' + par + '")');
});

// Создание объекта дочернего класса
var childClassInstance = new ChildClass('Lev', 'Nikolayevich');

// Проверка результатов
childClassInstance.methodName('Tolstoy');

/* Консоль:

Parent method implementation: methodName("Tolstoy")
Child method implementation: methodName("Tolstoy")

*/
