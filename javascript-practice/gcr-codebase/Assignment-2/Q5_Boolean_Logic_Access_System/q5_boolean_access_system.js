"use strict";
// ============================================================
// Q5 – Boolean Logic Access System
// Run: node q5_boolean_access_system.js
// ============================================================

// Rules: access is granted (Secure) only if
//   alarm is ON  &&  door is locked  &&  window is closed  &&  owner is inside
function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside; // &&
  const isBreachRisk = !isDoorLocked || !isWindowClosed;                          // ! and ||

  console.log(
    `Door locked: ${isDoorLocked}, Window closed: ${isWindowClosed}, ` +
    `Alarm on: ${isAlarmOn}, Owner inside: ${isOwnerInside}`
  );
  console.log(isSecure ? "   -> Secure" : "   -> Unsafe");
  if (!isSecure) {
    console.log(`   (entry point open: ${isBreachRisk})`);
  }
  return isSecure;
}

// Test several combinations
const tests = [
  [true, true, true, true],     // everything fine
  [false, true, true, true],    // door unlocked
  [true, false, true, true],    // window open
  [true, true, false, true],    // alarm off
  [true, true, true, false],    // owner not inside
  [false, false, false, false]  // everything wrong
];

console.log("========== SMART HOME SECURITY TESTS ==========");
tests.forEach((t, i) => {
  console.log(`\nTest ${i + 1}`);
  checkSecurity(...t);
});
