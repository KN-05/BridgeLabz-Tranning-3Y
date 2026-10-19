"use strict";
// ============================================================
// Q5 (Part B) – FIXED code: declare first, use after
// Run: node q5_fixed.js
// ============================================================

// --- Demonstrate the TDZ trap first (caught so the file keeps running) ---
function tdzDemo() {
  try {
    earlyCall();                  // runs fine: function declarations are hoisted
  } catch (err) {
    console.log(`TDZ demo -> ${err.name}: ${err.message}`);
  }
  let lateStatus = "ready";       // too late for earlyCall() above
  function earlyCall() { console.log(lateStatus); }
}
tdzDemo();

// --- Properly ordered version ---
function announce() { console.log("Game started"); }
function startGame() { console.log(status); }

let score = 50;          // FIX 1: use let/const instead of var and assign BEFORE use
let status = "ready";    // FIX 2: initialise before any function reads it

console.log(score);      // 50
announce();              // Game started
startGame();             // ready
