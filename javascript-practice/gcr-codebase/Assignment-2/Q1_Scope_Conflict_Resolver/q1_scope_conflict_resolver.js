"use strict";
// ============================================================
// Q1 – Scope Conflict Resolver
// Run: node q1_scope_conflict_resolver.js
// ============================================================

// GLOBAL scope: visible everywhere in the file
const bonus = 5000;

// isPermanent is a LOCAL variable of calculateSalary (a parameter is a local binding)
function calculateSalary(isPermanent) {
  // LOCAL scope: `salary` exists only while this function runs
  let salary = 40000;

  // Add the global bonus ONLY for permanent employees
  if (isPermanent === true) {
    salary = salary + bonus;     // reads the global `bonus`, but does not change it
  }

  console.log(`isPermanent = ${isPermanent} -> total salary inside function: ${salary}`);
  return salary;
}

console.log("===== Permanent employee =====");
calculateSalary(true);          // 40000 + 5000 = 45000

console.log("\n===== Non-permanent employee =====");
calculateSalary(false);         // 40000

// Demonstrate how isPermanent affects scope / the global variable
console.log("\n===== Scope check after both calls =====");
console.log("Global bonus is still:", bonus);   // 5000 - unchanged by either call
console.log("typeof salary outside function:", typeof salary);        // "undefined" (local only)
console.log("typeof isPermanent outside function:", typeof isPermanent); // "undefined" (local only)

/*
 EXPLANATION
 - Changing isPermanent only changes whether the LOCAL `salary` receives the bonus.
 - The global `bonus` is only READ, never modified, so it stays 5000 in both cases.
 - `salary` and `isPermanent` disappear when the function returns (function scope),
   so each call starts fresh with salary = 40000.
*/
