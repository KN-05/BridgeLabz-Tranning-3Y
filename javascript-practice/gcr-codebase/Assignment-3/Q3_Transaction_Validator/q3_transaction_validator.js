"use strict";
// ============================================================
// Q3 – Transaction Validator
// Run: node q3_transaction_validator.js
// Debug: open in VS Code, click left of the line number next to `debugger;`
// (or just rely on the debugger statement) and press F5.
// Watch: tx, index, valid, invalid, err
// ============================================================

// ---- Custom error classes (Task 2) ----
class NegativeAmountError extends Error {
  constructor(id, amount) {
    super(`Transaction ${id} has a negative amount (${amount})`);
    this.name = "NegativeAmountError";
  }
}
class MissingFieldError extends Error {
  constructor(field, entry) {
    super(`Missing "${field}" in ${JSON.stringify(entry)}`);
    this.name = "MissingFieldError";
  }
}
class NullEntryError extends Error {
  constructor(index) {
    super(`Entry at index ${index} is null`);
    this.name = "NullEntryError";
  }
}

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

function validate(tx, index) {
  if (tx === null) throw new NullEntryError(index);
  if (tx.id === undefined) throw new MissingFieldError("id", tx);
  if (tx.amount === undefined) throw new MissingFieldError("amount", tx);
  if (tx.amount < 0) throw new NegativeAmountError(tx.id, tx.amount);
  return true;
}

const valid = [];     // successful transactions
const invalid = [];   // { entry, errorType, message }
const errorsByType = { NegativeAmountError: [], MissingFieldError: [], NullEntryError: [] };

// Task 1: loop through each transaction
for (let index = 0; index < transactions.length; index++) {
  const tx = transactions[index];

  debugger; // Task 5: breakpoint -> watch `tx`, `index`, `valid`, `invalid`

  try {
    validate(tx, index);
    valid.push(tx);
  } catch (err) {
    // Task 3: categorise by error type
    invalid.push({ entry: tx, errorType: err.name, message: err.message });
    if (errorsByType[err.name]) errorsByType[err.name].push(err.message);
    else throw err; // unknown error -> don't swallow it
  }
}

// Task 4: final report
console.log("=========== TRANSACTION REPORT ===========");
console.log("Valid transactions  :", valid);
console.log("\nInvalid transactions:");
for (const item of invalid) {
  console.log(`  ✘ [${item.errorType}] ${item.message}`);
}
console.log("\nErrors grouped by type:");
for (const [type, list] of Object.entries(errorsByType)) {
  console.log(`  ${type}: ${list.length}`);
}
console.log("\n--------------------------------------------");
console.log(`Total      : ${transactions.length}`);
console.log(`Successful : ${valid.length}`);
console.log(`Failed     : ${invalid.length}`);
