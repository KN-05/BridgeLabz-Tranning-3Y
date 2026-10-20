"use strict";
// ============================================================
// Q7 – Smart Calculator
// Run: node q7_smart_calculator.js
// ============================================================

// ---- Custom errors (Task 2 + 3) ----
class DivideByZeroError extends Error {
  constructor() { super("Cannot divide by zero"); this.name = "DivideByZeroError"; }
}
class NegativeRootError extends Error {
  constructor(n) { super(`Cannot take the square root of a negative number (${n})`); this.name = "NegativeRootError"; }
}
class InvalidOperationError extends Error {
  constructor(op) { super(`Operation "${op}" is not recognised`); this.name = "InvalidOperationError"; }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

// Task 1: switch handles each operation
// Conventions: power = num1 ^ num2, root = square root of num1
function calculate(op, a, b) {
  switch (op) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) throw new DivideByZeroError();
      return a / b;
    case "power":
      return a ** b;
    case "root":
      if (a < 0) throw new NegativeRootError(a);
      return Math.sqrt(a);
    default:
      throw new InvalidOperationError(op);   // Task 3
  }
}

// Task 4: try...catch + formatted summary
function runBatch(ops, a, b, title) {
  console.log(`\n========== ${title} (num1=${a}, num2=${b}) ==========`);
  const summary = [];
  for (const op of ops) {
    try {
      summary.push({ op, status: "OK", output: calculate(op, a, b) });
    } catch (err) {
      summary.push({ op, status: "ERROR", output: `${err.name}: ${err.message}` });
    }
  }
  for (const row of summary) {
    const icon = row.status === "OK" ? "✔" : "✘";
    console.log(`${icon} ${row.op.padEnd(10)} | ${row.status.padEnd(5)} | ${row.output}`);
  }
  const ok = summary.filter(r => r.status === "OK").length;
  console.log(`Summary: ${ok} succeeded, ${summary.length - ok} failed`);
}

runBatch(operations, num1, num2, "GIVEN DATA");

// Extra runs to prove every custom error works
runBatch(["root", "add"], -16, 4, "NEGATIVE ROOT TEST");
runBatch(["modulo", "add"], 10, 3, "INVALID OPERATION TEST");
