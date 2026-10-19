"use strict";
// ============================================================
// Q9 – JSON Audit
// Run: node q9_json_audit.js
// Debug: breakpoint on the `try {` line (or the debugger statement) and F10-step.
// ============================================================
const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const requiredKeys = ["user", "age"];
const cleanData = [];   // Task 3: valid entries
const errorLog = [];    // Task 3: errors with line numbers

for (let i = 0; i < rawData.length; i++) {
  const lineNo = i + 1;
  debugger; // watch: i, lineNo, rawData[i], cleanData, errorLog

  try {
    const obj = JSON.parse(rawData[i]);          // Task 1: throws SyntaxError on bad JSON

    // Task 2: detect missing keys
    const missing = requiredKeys.filter(key => !(key in obj));
    if (missing.length > 0) {
      throw new Error(`Missing key(s): ${missing.join(", ")}`);
    }

    cleanData.push(obj);                         // only reached when everything above passed
  } catch (err) {
    // Control-flow note: when JSON.parse / throw fires, the remaining lines of `try`
    // are SKIPPED and execution jumps straight here, then the loop carries on.
    const type = err instanceof SyntaxError ? "Invalid JSON" : "Missing keys";
    errorLog.push({ line: lineNo, type, message: err.message });
    console.log(`✘ Line ${lineNo}: [${type}] ${err.message}`);
  }
}

console.log("\n=========== AUDIT REPORT ===========");
console.log("Clean entries:", cleanData);
console.log("Errors       :", errorLog);
console.log(`Valid: ${cleanData.length}, Failed: ${errorLog.length}, Total: ${rawData.length}`);

// ---------------- BONUS ----------------
// Convert age to Number and filter out users under 18.
function adultsOnly(list) {
  return list
    .map(u => ({ ...u, age: Number(u.age) }))        // "22" -> 22
    .filter(u => !Number.isNaN(u.age) && u.age >= 18);
}

console.log("\n--- BONUS: age converted to Number, under-18 removed ---");
console.log(adultsOnly(cleanData));

// Extra demo proving the under-18 filter works
const demoUsers = [...cleanData, { user: "Tom", age: "15" }];
console.log("With an extra under-18 user (Tom, 15) added:");
console.log(adultsOnly(demoUsers));    // Tom is removed

/*
 STEP-BY-STEP CONTROL FLOW (debugger)
 i=0 -> parse OK, no missing keys -> push to cleanData
 i=1 -> parse OK, `missing` = ["user","age"] -> throw -> jump to catch -> errorLog
 i=2 -> JSON.parse throws SyntaxError -> jump to catch (nothing after parse runs)
 i=3 -> parse OK, keys OK -> push (age still the string "22" until the bonus step)
*/
