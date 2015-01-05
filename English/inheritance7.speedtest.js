function speedTest(caption, count, fn) {
  console.log(caption);
  var startTime = new Date().getTime();
  for (var i = 0; i < count; i++) fn();
  var endTime = new Date().getTime(),
      processingTime = endTime - startTime;
  console.log('Processing time: ' + processingTime + '\n');
}

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

var ParentClass = function ParentClass(par1, par2) {
  this.parentField1 = par1;
  this.parentField2 = par2;
};

ParentClass.prototype.methodName = function (par) {
  this.parentField3 = par;
};

var ChildClass = (function () {
  var _ParentClass = ParentClass;
  var ChildClass = function ChildClass(par1, par2) {
    _ParentClass.call(this, par1, par2);
    this.childField1 = par1;
    this.childField2 = par2;
  };

  _inherits(ChildClass, _ParentClass);

  ChildClass.prototype.methodName = function (par) {
    _ParentClass.prototype.methodName.call(this, par);
    this.childField3 = par;
  };

  return ChildClass;
})();

speedTest('Instantiation test', 10000000, function() {
  var childClassInstance = new ChildClass('Lev', 'Nikolayevich');
});

var childClassInstance = new ChildClass('Lev', 'Nikolayevich');
speedTest('Call method test', 10000000, function() {
  childClassInstance.methodName('Tolstoy');
});
