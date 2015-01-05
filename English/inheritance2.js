var util = require('util');

// Parent class constructor
function ParentClass(par1, par2) {
  this.parentField1 = par1;
  this.parentField2 = par2;
}

// Parent class method
ParentClass.prototype.parentMethod = function(par) {
  console.log('parentMethod("' + par + '")');
};

// Parent class field
ParentClass.prototype.parentField = 'Parent field value';

// Child class constructor
function ChildClass(par1, par2) {
  ChildClass.super_.apply(this, arguments);
  this.childField1 = par1;
  this.childField2 = par2;
}

// Inheritance
util.inherits(ChildClass, ParentClass);

// Child class method
ChildClass.prototype.childMethod = function(par) {
  console.log('childMethod("' + par + '")');
};

// Child class field
ChildClass.prototype.childField = 'Child field value';

// Instantiation
var parentClassInstance = new ParentClass('Marcus', 'Aurelius');
var childClassInstance = new ChildClass('Yuriy', 'Gagarin');

// Check results
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

/* Output:

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
