﻿var util = require('util');

// Define override/inherited methods for built-in Function class
Function.prototype.override = function(fn) {
  var superFunction = this;
  return function() {
    this.inherited = superFunction;
    return fn.apply(this, arguments);
  };
};

// Parent class constructor
function ParentClass(par1, par2) {
  this.parentField1 = par1;
  this.parentField2 = par2;
}

// Parent class method
ParentClass.prototype.methodName = function(par) {
  console.log('Parent method implementation: methodName("' + par + '")');
};

// Child class constructor
function ChildClass(par1, par2) {
  ChildClass.super_.apply(this, arguments);
  this.childField1 = par1;
  this.childField2 = par2;
}

// Inheritance
util.inherits(ChildClass, ParentClass);

// Override method in child
ChildClass.prototype.methodName = ParentClass.prototype.methodName.override(function(par) {
  // Invoke inherited method from parent class
  this.inherited(par); // or this.inherited.apply(this, arguments);
  // Method code
  console.log('Child method implementation: methodName("' + par + '")');
});

// Child class instantiation
var childClassInstance = new ChildClass('Lev', 'Nikolayevich');

// Check results
childClassInstance.methodName('Tolstoy');

/* Output:

Parent method implementation: methodName("Tolstoy")
Child method implementation: methodName("Tolstoy")

*/
