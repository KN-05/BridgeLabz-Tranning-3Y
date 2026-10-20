"use strict";
// ============================================================
// Q6 – Pyramid Pattern Generator
// Run: node q6_pyramid.js         (default 5 rows)
//      node q6_pyramid.js 8       (user input = 8 rows)
// ============================================================

// Task 3: outer-loop limit controlled by user input (default = 5)
function getRows(arg) {
  const n = Number.parseInt(arg, 10);
  return Number.isInteger(n) && n > 0 ? n : 5;
}

// Uses `let` -> i and j are block scoped and do not leak.
function drawPyramid(rows) {
  for (let i = 1; i <= rows; i++) {        // outer loop = rows
    let line = "";                          // fresh binding each iteration
    for (let j = 1; j <= i; j++) {          // inner loop = stars in this row
      line += "* ";
    }
    console.log(line.trimEnd());
  }
}

console.log("--- The 4-row pattern from the question ---");
drawPyramid(4);

const rows = getRows(process.argv[2]);
console.log(`\n--- Pyramid with ${rows} rows (user input / default 5) ---`);
drawPyramid(rows);

// Task 4: strict mode catches an undeclared loop variable
function undeclaredLoopVariable() {
  for (k = 1; k <= 3; k++) { /* k was never declared */ }
}
try {
  undeclaredLoopVariable();
} catch (err) {
  console.log(`\nStrict mode -> ${err.name}: ${err.message}`);
}
// (Without "use strict" `k` would silently become a global variable.)

/*
 TASK 2 – STEP-BY-STEP DEBUGGING (VS Code, F5 + breakpoint on `line += "* "`)
 Watch: i, j, line
   i=1: line="" -> j=1 -> line="* "          -> prints "*"
   i=2: line="" -> j=1,2 -> "* * "           -> prints "* *"
   ...
 Because `line` is declared INSIDE the outer loop with let, it is reset every row.
 See q6_var_vs_let.js for what changes with `var`.
*/
