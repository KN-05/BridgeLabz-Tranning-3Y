"use strict";
// ============================================================
// Q6 – Event-Based Counter Simulation
// Run: node q6_event_counter.js
// ============================================================

let count = 0;   // shared counter in the outer (module/global) scope

function increment() {
  count++;                               // modifies the outer `count`

  // NESTED function: it can read `count` from its enclosing scopes (scope chain)
  function logCurrentValue() {
    console.log(`+1  -> count = ${count}`);
  }
  logCurrentValue();
}

function decrement() {
  count--;
  function logCurrentValue() {
    console.log(`-1  -> count = ${count}`);
  }
  logCurrentValue();
}

// Simulated "click" events: calling the handlers manually
console.log("===== Simulated clicks =====");
increment();   // click "+"
increment();   // click "+"
increment();   // click "+"
decrement();   // click "-"
decrement();   // click "-"
console.log("Final count:", count);   // 1

// ---- Scope demonstration: a nested function with its OWN `count` ----
console.log("\n===== Function scope demo =====");
function scopeDemo() {
  let count = 100;                      // local variable SHADOWS the outer count
  function nestedUpdate() {
    count++;                            // updates scopeDemo's count, not the outer one
    console.log("nested sees local count:", count);   // 101
  }
  nestedUpdate();
}
scopeDemo();
console.log("outer count is unaffected:", count);     // still 1

// ---- Bonus: private counter using a closure ----
function createCounter() {
  let privateCount = 0;                 // hidden from the outside
  return {
    increment() { privateCount++; console.log("closure counter:", privateCount); },
    decrement() { privateCount--; console.log("closure counter:", privateCount); }
  };
}
console.log("\n===== Closure counter =====");
const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
