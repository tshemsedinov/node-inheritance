var util = require('util');

// Средство для переопределения функций
function override(child, fn) {
  child.prototype[fn.name] = fn;
  fn.inherited = child.super_.prototype[fn.name];
}

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
  ChildClass.super_.call(this, par1, par2);
  this.childField1 = par1;
  this.childField2 = par2;
}

// Наследование
util.inherits(ChildClass, ParentClass);

// Переопределение метода в дочернем классе
override(ChildClass, function methodName(par) {
  // Вызов метода родительского класса
  methodName.inherited.call(this, par);
  // Собственный функционал
  console.log('Child method implementation: methodName("' + par + '")');
});

// Конструктор очень дочернего класса
function VeryChildClass(par1, par2) {
  VeryChildClass.super_.call(this, par1, par2);
  this.childField1 = par1;
  this.childField2 = par2;
}

// Наследование
util.inherits(VeryChildClass, ChildClass);

// Переопределение метода в очень дочернем классе
override(VeryChildClass, function methodName(par) {
  // Вызов метода родительского класса
  methodName.inherited.call(this, par);
  // Собственный функционал
  console.log('Very child method implementation: methodName("' + par + '")');
});

// Создание объекта дочернего класса
var veryChildClassInstance = new VeryChildClass('Lev', 'Nikolayevich');

// Проверка результатов
veryChildClassInstance.methodName('Tolstoy');

/* Консоль:

Parent method implementation: methodName("Tolstoy")
Child method implementation: methodName("Tolstoy")
Very child method implementation: methodName("Tolstoy")

*/
