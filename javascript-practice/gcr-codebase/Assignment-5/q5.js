// Q5: Person -> Student inheritance using prototypes
function Person(name) {
  this.name = name;
}

Person.prototype.printName = function () {
  console.log("Name: " + this.name);
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.printBranch = function () {
  console.log("Branch: " + this.branch);
};

Student.prototype.printDetails = function () {
  this.printName();
  this.printBranch();
};

const student = new Student("Neha", "CSE");
student.printDetails();

// prototype chain
console.log(student instanceof Student);                              // true
console.log(student instanceof Person);                               // true
console.log(Object.getPrototypeOf(Student.prototype) === Person.prototype); // true
