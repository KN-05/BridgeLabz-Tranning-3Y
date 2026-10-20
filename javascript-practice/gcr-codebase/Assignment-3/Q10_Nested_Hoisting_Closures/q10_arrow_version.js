"use strict";
// ============================================================
// Q10 (Part B) – inner converted to an arrow function
// Run: node q10_arrow_version.js
// ============================================================

// --- Version 1: arrow with its own `var count` (same output as the original) ---
function outerV1() {
  console.log("V1 outer:", count);          // undefined  (var hoisted)
  var count = 5;
  const inner = () => {
    console.log("V1 inner:", count);        // undefined  (arrow still has its OWN function scope,
    var count = 10;                          //            so its var count is hoisted too)
  };
  inner();
}
outerV1();

// --- Version 2: arrow called BEFORE it is defined -> hoisting difference ---
function outerV2() {
  try {
    inner();                                // ReferenceError (const in the TDZ)
  } catch (err) {
    console.log(`V2 -> ${err.name}: ${err.message}`);
  }
  const inner = () => console.log("never reached");
}
outerV2();

// --- Version 3: arrow WITHOUT its own `count` -> real closure over outer's count ---
function outerV3() {
  var count = 5;
  const inner = () => {
    console.log("V3 inner sees outer count:", count);  // 5 (found by walking the scope chain)
    count = 10;                                         // modifies outer's variable
  };
  inner();
  console.log("V3 outer after inner:", count);         // 10
}
outerV3();

/*
 BEHAVIOUR CHANGES WITH ARROW
 - Hoisting of the function itself: declaration (fully hoisted) vs const arrow (TDZ) -> must
   be defined before it is called.
 - Variables declared INSIDE an arrow function body are still hoisted within the arrow's
   own scope, so the undefined/shadowing result is unchanged (V1).
 - Arrow functions have no own `this` / `arguments` (not used here, but a major difference).
 - Closure: V3 shows inner reading/updating outer's `count` via the scope chain.

 DEBUGGER / CALL STACK (same flow as the original): outerVx -> inner -> back to outerVx -> global.
 In the Scope panel, V3 shows `count` under "Closure (outerV3)", while V1 shows it under "Local".
*/
