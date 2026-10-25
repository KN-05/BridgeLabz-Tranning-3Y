// Q6: Person -> Faculty -> Professor
function Person(name) {
  this.name = name;
}
Person.prototype.introduce = function () {
  console.log("I am " + this.name);
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDepartment = function () {
  console.log("Department: " + this.department);
};

function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.teach = function () {
  console.log("Teaching " + this.subject);
};

const prof = new Professor("Dr. Sharma", "Computer Science", "JavaScript");

// professor can use methods from all levels
prof.introduce();
prof.showDepartment();
prof.teach();
