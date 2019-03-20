// Extensions are implemented as JavaScript classes
var IfEmptyDynamicValue = function () {

  this.title = function (context) {
    return "IfEmpty";
  };

  this.text = function (context) {
    return this.name;
  };

  // implement the evaluate() method to generate the dynamic value
  this.evaluate = function (context) {
    return this._isNull(this.testValue) ? this.isEmpty : this.notEmpty;
  };

  this._isNull = function ( str ) {
    if (!str || str == "" ) return true;
    var regu = "^[ ]+$";
    var re = new RegExp(regu);
    return re.test(str);
  };
};
// set the Extension Identifier (must be same as the directory name)
IfEmptyDynamicValue.identifier = "io.chengguo.PawExtensions.IfEmptyDynamicValue";

// give a display name to your Dynamic Value
IfEmptyDynamicValue.title = "If Empty Dynamic Value";

// set input fields
IfEmptyDynamicValue.inputs = [
  InputField("name", "Name", "String"),
  InputField("testValue", "Test Value", "String"),
  InputField("isEmpty", "Empty", "String"),
  InputField("notEmpty", "Not Empty", "String")
];

// call to register function is required
registerDynamicValueClass(IfEmptyDynamicValue);