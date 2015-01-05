function speedTest(caption, count, fn) {
  console.log(caption);
  var startTime = new Date().getTime();
  for (var i = 0; i < count; i++) fn();
  var endTime = new Date().getTime(),
      processingTime = endTime - startTime;
  console.log('Processing time: ' + processingTime + '\n');
}

function inherits(child, parent) {
  child.super_ = parent;
  child.prototype = Object.create(parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  child.override = function(fn) {
    child.prototype[fn.name] = fn;
    fn.inherited = parent.prototype[fn.name];
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
  ChildClass.super_.call(this, par1, par2);
  this.childField1 = par1;
  this.childField2 = par2;
}

inherits(ChildClass, ParentClass);

ChildClass.override(function methodName(par) {
  methodName.inherited.call(this, par);
  this.childField3 = par;
});

speedTest('Instantiation test', 10000000, function() {
  var childClassInstance = new ChildClass('Lev', 'Nikolayevich');
});

var childClassInstance = new ChildClass('Lev', 'Nikolayevich');
speedTest('Call method test', 10000000, function() {
  childClassInstance.methodName('Tolstoy');
});
