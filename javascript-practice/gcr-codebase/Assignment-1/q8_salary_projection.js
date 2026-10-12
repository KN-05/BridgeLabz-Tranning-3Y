let currentSalary = 500000;   
const incrementRate = 8;      

const projection = [];

for (let year = 1; year <= 5; year++) {
  currentSalary += (currentSalary * incrementRate) / 100;  
  projection.push({
    Year: year,
    "Increment %": incrementRate,
    Salary: Math.round(currentSalary),                      
  });
}

console.table(projection);
