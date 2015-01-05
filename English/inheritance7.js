// Define override/inherited methods
var _inherits = function (child, parent) {
  child.prototype = Object.create(parent && parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (parent) child.__proto__ = parent;
};

// Parent class constructor
var ParentClass = function ParentClass(par1, par2) {
  this.parentField1 = par1;
  this.parentField2 = par2;
};

// Parent class method
ParentClass.prototype.methodName = function (par) {
  console.log('Parent method implementation: methodName("' + par + '")');
};

// Child class constructor
var ChildClass = (function () {
  var _ParentClass = ParentClass;
  var ChildClass = function ChildClass(par1, par2) {
    _ParentClass.call(this, par1, par2);
    this.childField1 = par1;
    this.childField2 = par2;
  };

  // Inheritance
  _inherits(ChildClass, _ParentClass);

  // Override method in child
  ChildClass.prototype.methodName = function (par) {
    _ParentClass.prototype.methodName.call(this, par);
    console.log('Child method implementation: methodName("' + par + '")');
  };

  return ChildClass;
})();

// Child class instantiation
var childClassInstance = new ChildClass('Lev', 'Nikolayevich');

// Check results
childClassInstance.methodName('Tolstoy');

/* Output:

Parent method implementation: methodName("Tolstoy")
Child method implementation: methodName("Tolstoy")

*/
