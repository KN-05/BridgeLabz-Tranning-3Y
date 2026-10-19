"use strict";
// ============================================================
// Q4 (Part 1) – The original code that FAILS
// Run: node q4_original_error.js
// ============================================================
function showMessage() {
  greeting = "Welcome"; // undeclared
  console.log(greeting);
}

// Wrapped in try/catch only so we can print the error message nicely.
// (Without it Node would just crash with the same ReferenceError.)
try {
  showMessage();
} catch (err) {
  console.log(`${err.name}: ${err.message}`);
}

/*
 TASK 1 – WHY DOES THIS THROW?
 - Without "use strict", `greeting = "Welcome"` on an undeclared name silently
   CREATES a global variable (window.greeting / globalThis.greeting).
 - With "use strict", assignment to an identifier that cannot be resolved in any
   scope is a ReferenceError: "greeting is not defined". Strict mode forbids
   accidental globals (typo-bugs, polluting the global scope).
*/
