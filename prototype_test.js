var person = Object.create(null);

// instead of using defineProperty and specifying writable,
// configurable, and enumerable, we can just assign the
// value directly and JavaScript will take care of the rest
person['fullName'] = function() {
  return this.firstName + ' ' + this.lastName;
};

// this time, let's make man's prototype person, so all
// men share the fullName function
var man = Object.create(person);
man['sex'] = "male";

var yehuda = Object.create(man);
yehuda['firstName'] = "Yehuda";
yehuda['lastName'] = "Katz";
console.log(yehuda.sex);
console.log(yehuda.fullName());
console.log(Object.getPrototypeOf(yehuda));
console.log(Object.getPrototypeOf(man));
console.log(typeof(yehuda));

var Point = function (x, y) {
  this.x = x;
  this.y = y;
}
console.log(Object.getPrototypeOf(Point));
var pointProt = Point.prototype;
console.log(Point.prototype);

console.log("over!!");
