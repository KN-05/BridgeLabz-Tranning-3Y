"use strict";
// ============================================================
// Q3 – Math Utility Dashboard
// Run: node q3_math_dashboard.js
// ============================================================

const x = 16.75;

const rounded = Math.round(x);                          // nearest integer
const squareRoot = Math.sqrt(x);                        // √x
const cubed = Math.pow(x, 3);                           // x³
const randomNumber = Math.floor(Math.random() * 41) + 10; // integer between 10 and 50 (inclusive)

// Template literal for a formatted summary
console.log(`
==============================
     MATH UTILITY DASHBOARD
==============================
 Number (x)         : ${x}
 Rounded value      : ${rounded}
 Square root        : ${squareRoot.toFixed(4)}
 Power (x ^ 3)      : ${cubed.toFixed(4)}
 Random (10 to 50)  : ${randomNumber}
==============================`);
