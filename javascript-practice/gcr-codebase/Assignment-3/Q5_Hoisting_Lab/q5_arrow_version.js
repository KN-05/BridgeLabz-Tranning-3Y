"use strict";
// ============================================================
// Q5 (Part C) – Arrow-function rewrite: hoisting differences
// Run: node q5_arrow_version.js
// ============================================================

// 1) Calling an arrow function BEFORE its definition fails.
try {
  announce();   // announce is a const -> in the TDZ at this moment
} catch (err) {
  console.log(`Arrow before definition -> ${err.name}: ${err.message}`);
}

// 2) Same with `var` + arrow: var is hoisted as undefined, so it's a different error.
try {
  oldStyle();   // oldStyle === undefined here
} catch (err) {
  console.log(`var + arrow before definition -> ${err.name}: ${err.message}`);
}
var oldStyle = () => console.log("never reached early");

// ---- Correct order ----
const announce = () => console.log("Game started");
let score = 50;
let status = "ready";
const startGame = () => console.log(status);

console.log(score);  // 50
announce();          // Game started
startGame();         // ready

/*
 COMPARISON
 - function declaration : hoisted with its BODY -> callable anywhere in scope.
 - const/let arrow      : hoisted but in TDZ -> ReferenceError if called early.
 - var arrow            : name hoisted as `undefined` -> TypeError "is not a function".
 Rule: define arrow functions BEFORE you call them.
*/
