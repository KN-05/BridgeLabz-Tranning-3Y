"use strict";
// ============================================================
// Q9 – Odd–Even Number Analyzer
// Run: node q9_odd_even_analyzer.js
// ============================================================

// Build the array of numbers 1–30 with a loop
const numbers = [];
for (let n = 1; n <= 30; n++) {
  numbers.push(n);
}

// Classify each number; order of checks matters (FizzBuzz first)
const results = [];
for (const num of numbers) {
  if (num % 3 === 0 && num % 5 === 0) {
    results.push("FizzBuzz");
  } else if (num % 2 === 0) {
    results.push("Even");
  } else {
    results.push("Odd");
  }
}

console.log("Numbers :", numbers.join(", "));
console.log("\nNumber -> Result");
for (let i = 0; i < numbers.length; i++) {
  console.log(`${String(numbers[i]).padStart(2)}     -> ${results[i]}`);
}
console.log("\nResults array:");
console.log(results);
