"use strict";
// ============================================================
// Q2 – Employee Bonus Calculator
// Run: node q2_bonus_calculator.js
// "use strict" => any undeclared variable (implicit global) throws ReferenceError,
// so every variable below is declared with const / let.
// ============================================================

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

// Converts a value to Number or throws a meaningful error (Task 1 + 5)
function toNumber(value, field, name) {
  if (value === undefined || value === null) {
    throw new Error(`Missing property "${field}" for employee "${name}"`);
  }
  const n = Number(value);
  if (Number.isNaN(n)) {
    throw new TypeError(`Cannot convert ${field}="${value}" to a number for employee "${name}"`);
  }
  return n;
}

// Task 2: bonus = 10% if years > 3, otherwise 5%
function processEmployee(emp) {
  if (emp === null || typeof emp !== "object") {
    throw new TypeError("Employee record is null or not an object");
  }
  const name = emp.name ?? "(unknown)";
  const salary = toNumber(emp.salary, "salary", name);
  const years = toNumber(emp.years, "years", name);

  const rate = years > 3 ? 0.1 : 0.05;
  const bonus = salary * rate;
  return { name, salary, years, rate, bonus, total: salary + bonus };
}

// Task 4: template strings for formatted output
function printEmployee(r) {
  console.log(
`----------------------------------
Employee : ${r.name}
Salary   : ₹${r.salary.toLocaleString("en-IN")}
Years    : ${r.years}
Bonus    : ${r.rate * 100}%  =>  ₹${r.bonus.toLocaleString("en-IN")}
Total    : ₹${r.total.toLocaleString("en-IN")}`);
}

function run(list, title) {
  console.log(`\n########## ${title} ##########`);
  for (const emp of list) {
    // Task 5: try...catch handles conversion / missing-property errors
    try {
      printEmployee(processEmployee(emp));
    } catch (err) {
      console.log(`✘ ERROR (${err.name}): ${err.message}`);
    }
  }
}

run(employees, "GIVEN DATA");

// Extra data to PROVE the try...catch works
run(
  [
    { name: "Ravi", salary: "abc", years: "4" },   // conversion error
    { name: "Neha", salary: "40000" },             // missing 'years'
    null                                           // null record
  ],
  "ERROR TEST DATA"
);

// Task 3 demo: implicit global is illegal in strict mode
try {
  undeclaredBonus = 100; // no let/const/var
} catch (err) {
  console.log(`\nStrict-mode check -> ${err.name}: ${err.message}`);
}
