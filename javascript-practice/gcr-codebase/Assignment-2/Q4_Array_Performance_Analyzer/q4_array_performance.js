"use strict";
// ============================================================
// Q4 – Array Performance Analyzer
// Run: node q4_array_performance.js   (scores change every run)
// ============================================================

const PASS_MARK = 50;

// Create 8 random scores between 30 and 100 (inclusive):
// Math.random()*71 -> 0..70.99, floor -> 0..70, + 30 -> 30..100
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

// Highest and lowest using spread
const highest = Math.max(...scores);
const lowest = Math.min(...scores);

// Average using reduce()
const total = scores.reduce((sum, score) => sum + score, 0);
const average = total / scores.length;

// Passed students using filter()
const passedScores = scores.filter(score => score >= PASS_MARK);

// Result per student using map()
const report = scores.map((score, index) =>
  `Student ${index + 1}: ${String(score).padStart(3)}  ${score >= PASS_MARK ? "PASS" : "FAIL"}`
);

console.log("==========  STUDENT PERFORMANCE REPORT  ==========");
console.log("Scores array :", scores);
console.log("\n" + report.join("\n"));
console.log("\n-------------------- SUMMARY --------------------");
console.log(`Highest score    : ${highest}`);
console.log(`Lowest score     : ${lowest}`);
console.log(`Average score    : ${average.toFixed(2)}`);
console.log(`Students passed  : ${passedScores.length} of ${scores.length}`);
console.log(`Students failed  : ${scores.length - passedScores.length}`);
console.log(`Pass percentage  : ${((passedScores.length / scores.length) * 100).toFixed(1)}%`);
