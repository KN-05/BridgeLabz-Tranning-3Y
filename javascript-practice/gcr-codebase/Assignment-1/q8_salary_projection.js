// Q8. Employee Salary Projection

let currentSalary = 500000;   // starting salary
const incrementRate = 8;      // annual increment in %

const projection = [];

for (let year = 1; year <= 5; year++) {
  currentSalary += (currentSalary * incrementRate) / 100;  // assignment operator
  projection.push({
    Year: year,
    "Increment %": incrementRate,
    Salary: Math.round(currentSalary),                      // rounding
  });
}

console.table(projection);
