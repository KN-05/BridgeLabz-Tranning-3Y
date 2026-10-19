"use strict";
// ============================================================
// Q6 (Task 1 + 2) – Replace let with var and observe the changes
// Run: node q6_var_vs_let.js
// ============================================================

// A) The visible pattern is the SAME with var, but the variables now LEAK.
function pyramidVar(rows) {
  for (var i = 1; i <= rows; i++) {
    var line = "";
    for (var j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trimEnd());
  }
  // var is function-scoped, so these are still alive after the loops:
  console.log(`After loops (var): i=${i}, j=${j}, line="${line.trimEnd()}"`);
}
pyramidVar(4);

function pyramidLet(rows) {
  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) line += "* ";
  }
  console.log("After loops (let): typeof i =", typeof i, "(not accessible)");
}
pyramidLet(4);

// B) Variable RE-USE: a single var is shared by every iteration.
function reuseVar() {
  for (var k = 1; k <= 3; k++) {
    var seen;                       // declaration without value does NOT reset it
    console.log(`var iteration ${k}: seen = ${seen}`);
    seen = k;
  }
}
function reuseLet() {
  for (let k = 1; k <= 3; k++) {
    let seen;                       // new binding every iteration
    console.log(`let iteration ${k}: seen = ${seen}`);
    seen = k;
  }
}
console.log("\n-- re-use demo --");
reuseVar();   // undefined, 1, 2  (value carried over!)
reuseLet();   // undefined, undefined, undefined

// C) Closures: the classic var trap.
console.log("\n-- closure demo --");
const withVar = [], withLet = [];
for (var a = 1; a <= 3; a++) withVar.push(() => a);
for (let b = 1; b <= 3; b++) withLet.push(() => b);
console.log("var closures:", withVar.map(f => f()));  // [4, 4, 4]  one shared variable
console.log("let closures:", withLet.map(f => f()));  // [1, 2, 3]  one variable per iteration

/*
 OBSERVATIONS (debugger -> Scope panel)
 - let: "Block" scope shows i, j, line only while inside the loop; each iteration is new.
 - var: "Local" scope holds ONE i, ONE j, ONE line for the whole function; they are
        hoisted (undefined) at function start and keep their last value afterwards.
*/
