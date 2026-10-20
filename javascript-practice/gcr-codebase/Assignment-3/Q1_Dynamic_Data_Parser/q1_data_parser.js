"use strict";
// ============================================================
// Q1 – Dynamic Data Parser
// Run: node q1_data_parser.js
// ============================================================

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

// Helper: show the raw value clearly (strings in quotes, null/undefined as words)
function show(v) {
  return typeof v === "string" ? `"${v}"` : String(v);
}

// Helper: a value is a VALID number only when it is not null/undefined,
// not a blank string, and Number(value) is a finite number.
// NOTE: Number(" ") === 0 and Number(null) === 0 (coercion traps!),
// so we must check for those cases BEFORE calling Number().
function isValidNumber(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === "string" && value.trim() === "") return false;
  return Number.isFinite(Number(value));
}

// Helper: reason why a value is invalid (used in the report)
function invalidReason(value) {
  if (value === null) return "null (no data)";
  if (value === undefined) return "undefined (missing data)";
  if (typeof value === "string" && value.trim() === "") return "blank string (Number('  ') would wrongly give 0)";
  return "not numeric text (Number() gives NaN)";
}

const validNumbers = [];   // Task 3: array for valid numeric data
const invalidData = [];    // Task 3: array for invalid entries

console.log("=========== DETAILED CONVERSION REPORT ===========");

// Task 1 + 4: loop through every value, convert to Number / Boolean / String
for (let i = 0; i < apiData.length; i++) {
  const raw = apiData[i];

  const asNumber = Number(raw);     // may be NaN, or a surprising 0 (null / " ")
  const asBoolean = Boolean(raw);   // truthy/falsy: even "false" and "NaN" strings are TRUE
  const asString = String(raw);     // null -> "null", undefined -> "undefined"

  console.log(`\n#${i}  raw = ${show(raw)}  (typeof ${typeof raw})`);
  console.log(`     Number  -> ${asNumber}`);
  console.log(`     Boolean -> ${asBoolean}`);
  console.log(`     String  -> "${asString}"`);

  // Task 2: skip invalid numbers, but log them separately
  if (isValidNumber(raw)) {
    validNumbers.push(asNumber);
    console.log(`     ✔ VALID number`);
  } else {
    invalidData.push({ index: i, raw: show(raw), reason: invalidReason(raw) });
    console.log(`     ✘ INVALID number -> skipped (${invalidReason(raw)})`);
  }
}

console.log("\n=========== SUMMARY ===========");
console.log("Valid numeric data  :", validNumbers);
console.log("Invalid entries     :");
for (const item of invalidData) {
  console.log(`   - index ${item.index}: ${item.raw} -> ${item.reason}`);
}

// Conditional formatting of the final result
const total = validNumbers.reduce((sum, n) => sum + n, 0);
const avg = validNumbers.length > 0 ? total / validNumbers.length : 0;
console.log(`\nTotal items   : ${apiData.length}`);
console.log(`Valid count   : ${validNumbers.length}`);
console.log(`Invalid count : ${invalidData.length}`);
console.log(`Sum of valid  : ${total}`);
console.log(`Average       : ${avg.toFixed(2)}`);
console.log(
  invalidData.length > validNumbers.length
    ? "⚠ Data quality is POOR (more invalid than valid)"
    : "✔ Data quality is ACCEPTABLE"
);
