var util = require('util');

// Classes definition

function ParentClass(par1, par2) {
  this.parentField1 = par1;
  this.parentField2 = par2;
}

function ChildClass(par1, par2) {
  ChildClass.super_.apply(this, arguments);
  this.childField1 = par1;
  this.childField2 = par2;
}

// Inheritance

util.inherits(ChildClass, ParentClass);

// Create child class instance and check results

var obj = new ChildClass('Hello', 'World');
console.dir({ obj: obj });

/* Output:

{ obj:
  { parentField1: 'Hello',
    parentField2: 'World',
    childField1: 'Hello',
    childField2: 'World' } }

*/
