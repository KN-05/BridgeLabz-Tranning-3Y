"use strict";
// ============================================================
// Q10 – Departmental Employee Evaluator
// Run: node q10_department_evaluator.js
// ============================================================

const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];

console.log("========== DEPARTMENT EVALUATION ==========");

for (let i = 0; i < departments.length; i++) {
  const name = departments[i][0];    // index 0 = department name
  const score = departments[i][1];   // index 1 = performance points
  let rating;

  // Nested if-else with comparison operators
  if (score >= 75) {
    if (score >= 90) {
      rating = "Excellent";          // 90 and above
    } else {
      rating = "Good";               // 75 to 89
    }
  } else {
    if (score >= 60) {
      rating = "Average";            // 60 to 74
    } else {
      rating = "Needs Improvement";  // below 60
    }
  }

  console.log(`${name.padEnd(8)} | Score: ${score} | ${rating}`);
}
