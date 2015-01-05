var util = require('util');

function speedTest(caption, count, fn) {
  console.log(caption);
  var startTime = new Date().getTime();
  for (var i = 0; i < count; i++) fn();
  var endTime = new Date().getTime(),
      processingTime = endTime - startTime;
  console.log('Processing time: ' + processingTime + '\n');
}

Function.prototype.override = function(fn) {
  var superFunction = this;
  return function() {
    this.inherited = superFunction;
    return fn.apply(this, arguments);
  };
};

function ParentClass(par1, par2) {
  this.parentField1 = par1;
  this.parentField2 = par2;
}

ParentClass.prototype.methodName = function(par) {
  this.parentField3 = par;
};

function ChildClass(par1, par2) {
  this.constructor.super_.apply(this, arguments);
  this.childField1 = par1;
  this.childField2 = par2;
}

util.inherits(ChildClass, ParentClass);

ChildClass.prototype.methodName = ParentClass.prototype.methodName.override(function(par) {
  this.inherited(par);
  this.childField3 = par;
});

speedTest('Instantiation test', 10000000, function() {
  var childClassInstance = new ChildClass('Lev', 'Nikolayevich');
});

var childClassInstance = new ChildClass('Lev', 'Nikolayevich');
speedTest('Call method test', 10000000, function() {
  childClassInstance.methodName('Tolstoy');
});
