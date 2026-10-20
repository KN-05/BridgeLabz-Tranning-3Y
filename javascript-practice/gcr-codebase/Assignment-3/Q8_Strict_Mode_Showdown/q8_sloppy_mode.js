// ============================================================
// Q8 (Part A) – WITHOUT "use strict" (sloppy mode)
// Run: node q8_sloppy_mode.js
// ============================================================
function demo(a, a) {   // duplicate parameter names are ALLOWED in sloppy mode
  console.log("a =", a); // the LAST one wins -> 10
  total = 10;            // undeclared -> silently creates a GLOBAL variable
  console.log("total inside function =", total);
  console.log("delete total ->", delete total); // allowed here: removes the global property
}
demo(5, 10);
console.log("typeof total after delete:", typeof total); // "undefined"

/* RESULT: no errors at all. Silent, confusing behaviour:
   - first `a` (5) is unreachable
   - `total` leaked to the global scope
*/
