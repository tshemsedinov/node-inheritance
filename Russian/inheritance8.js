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
  console.dir({t1:this})
  this.parentField3 = par;
};

// Конструктор дочернего класса
function ChildClass(par1, par2) {
  this.constructor.super_.call(this, par1, par2);
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
  this.childField3 = par;
});

// Создание объекта дочернего класса
var childClassInstance = new ChildClass('Lev', 'Nikolayevich');

// Проверка результатов
childClassInstance.methodName('Tolstoy');

/* Консоль:

Parent method implementation: methodName("Tolstoy")
Child method implementation: methodName("Tolstoy")

*/
