// Q3. Monthly Expense Tracker

// Expenses for 5 categories: food, travel, rent, bills, leisure
const expenses = [4500, 2000, 12000, 3000, 1500];

let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += expenses[i];                    // assignment operator +=
}

const average = total / expenses.length;

const taxRate = 10;                        // 10% tax
let finalAmount = total;
finalAmount += total * taxRate / 100;      // add 10% tax

console.log(`Total Expense   : ₹${total.toFixed(2)}`);
console.log(`Average Expense : ₹${average.toFixed(2)}`);
console.log(`Final (+10% tax): ₹${finalAmount.toFixed(2)}`);
