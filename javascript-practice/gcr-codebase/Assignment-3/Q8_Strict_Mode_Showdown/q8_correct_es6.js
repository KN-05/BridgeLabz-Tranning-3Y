"use strict";
// ============================================================
// Q8 (Part C) – Correct version following ES6 rules
// Run: node q8_correct_es6.js
// ============================================================
function demo(a, b) {          // unique parameter names
  let total = a + b;           // declared with let (local, no global leak)
  console.log(`a=${a}, b=${b}, total=${total}`);

  const result = { total };    // if you need to "remove" data, use an OBJECT property
  delete result.total;         // delete is legal on properties
  console.log("result after delete:", result); // {}
  return total;
}

demo(5, 10);

// Arrow + default parameter variant (ES6 style)
const demoArrow = (a = 0, b = 0) => a + b;
console.log("demoArrow(5, 10) =", demoArrow(5, 10));
