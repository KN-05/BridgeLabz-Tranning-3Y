"use strict";
// ============================================================
// Q4 (Part 2) – Fixed version + debugger notes
// Run: node q4_fixed.js
// ============================================================
function showMessage() {
  let greeting = "Welcome"; // FIX: declare the variable -> it is now LOCAL to showMessage
  debugger;                 // <-- breakpoint: add `greeting` to WATCH, look at CALL STACK
  console.log(greeting);
}

showMessage();

// Proof that `greeting` no longer leaks into the global scope:
console.log("typeof greeting outside function:", typeof greeting); // "undefined"

/*
 TASK 2 – HOW SCOPE RULES CHANGED THE BEHAVIOUR
 - Before (sloppy): undeclared assignment -> global variable (leaks everywhere).
 - Strict, no declaration: ReferenceError.
 - Fixed (let): `greeting` is block/function scoped. Visible only inside showMessage,
   created on each call, destroyed after return. No pollution, no accidental sharing.

 TASK 3 – VS CODE DEBUGGER STEPS
 1. Open this file, press F5 (Run and Debug -> Node.js). Execution pauses at `debugger;`.
 2. WATCH panel -> "+" -> type `greeting`. Before `let greeting` executes it would show
    uninitialized (TDZ); after the line it shows "Welcome".
 3. CALL STACK panel shows:
       showMessage      (q4_fixed.js : line 8)   <- current frame
       (anonymous)      (q4_fixed.js : line 14)  <- module top-level code that called it
       Module._compile / internal Node frames...
 4. Press F10 (step over) to run console.log, F11 to step into, Shift+F11 to step out;
    the showMessage frame disappears from the stack when the function returns.
*/
