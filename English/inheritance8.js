var util = require('util');

// Define override/inherited methods
function override(child, fn) {
  child.prototype[fn.name] = fn;
  fn.inherited = child.super_.prototype[fn.name];
}

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
  ChildClass.super_.call(this, par1, par2);
  this.childField1 = par1;
  this.childField2 = par2;
}

// Inheritance
util.inherits(ChildClass, ParentClass);

// Override method in child
override(ChildClass, function methodName(par) {
  // Invoke inherited method from parent class
  methodName.inherited.call(this, par);
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
