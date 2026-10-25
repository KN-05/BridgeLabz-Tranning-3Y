// Q6: Employee Management System
// Run with: node q6.js

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary; // monthly salary
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  // increase the monthly salary by a percentage
  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
  }
}

const employees = [
  new Employee(101, "Aarav", "Engineering", 60000),
  new Employee(102, "Meera", "HR", 45000),
  new Employee(103, "Rohan", "Sales", 40000),
  new Employee(104, "Sneha", "Finance", 52000),
  new Employee(105, "Kabir", "Engineering", 70000),
];

console.log("Annual salary of each employee:");
employees.forEach((e) => {
  console.log(`${e.name} (${e.department}): Rs.${e.getAnnualSalary()}`);
});

// total payout using reduce
const totalPayout = employees.reduce((sum, e) => sum + e.getAnnualSalary(), 0);
console.log("\nTotal annual payout: Rs." + totalPayout);

// bonus example
employees[1].applyBonus(10);
console.log(`\nMeera after 10% bonus -> annual: Rs.${employees[1].getAnnualSalary()}`);
