// Q9: Person -> Student with ES6 classes, compared with the prototype version

// ----- Prototype version -----
function PersonProto(name) {
  this.name = name;
}
PersonProto.prototype.printName = function () {
  return "Name: " + this.name;
};

function StudentProto(name, branch) {
  PersonProto.call(this, name);
  this.branch = branch;
}
StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;
StudentProto.prototype.printBranch = function () {
  return "Branch: " + this.branch;
};

// ----- Class version -----
class Person {
  constructor(name) {
    this.name = name;
  }
  printName() {
    return "Name: " + this.name;
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }
  printBranch() {
    return "Branch: " + this.branch;
  }
}

const s1 = new StudentProto("Neha", "CSE");
const s2 = new Student("Neha", "CSE");

console.log(s1.printName(), "|", s1.printBranch());
console.log(s2.printName(), "|", s2.printBranch());

console.log(s1.printName() === s2.printName());     // true
console.log(s1.printBranch() === s2.printBranch()); // true
console.log(s1 instanceof PersonProto, s2 instanceof Person); // true true
