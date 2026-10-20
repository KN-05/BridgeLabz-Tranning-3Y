"use strict";
// ============================================================
// Q2 – String Manipulation Report
// Run: node q2_string_manipulation.js
// ============================================================

const productName = "  wireless headphones PRO  ";
console.log(`Original  : "${productName}" (length ${productName.length})`);

// Step 1: trim() removes the extra spaces at both ends
const trimmed = productName.trim();

// Step 2: convert everything to lowercase so formatting is consistent
const lowered = trimmed.toLowerCase();

// Step 3: replace "pro" with "Pro Edition" (done before capitalising so it still matches).
// \b = word boundary, so only the whole word "pro" is replaced (not e.g. "projector").
const replaced = lowered.replace(/\bpro\b/, "Pro Edition");

// Step 4: split into words, capitalise first letter of each word, join back
const cleanTitle = replaced
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // keep rest of the word as is
  .join(" ");

console.log(`Trimmed   : "${trimmed}"`);
console.log(`Lowercase : "${lowered}"`);
console.log(`Replaced  : "${replaced}"`);
console.log("\n===== FINAL RESULT =====");
console.log(`Cleaned title : ${cleanTitle}`);
console.log(`Title length  : ${cleanTitle.length}`);
