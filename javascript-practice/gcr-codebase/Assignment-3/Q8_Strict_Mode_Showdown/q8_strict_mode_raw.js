"use strict";
// ============================================================
// Q8 (Part B-1) – RAW strict-mode version (this file will NOT run!)
// Run: node q8_strict_mode_raw.js   -> SyntaxError: Duplicate parameter name not allowed in this context
// (Syntax errors are detected at PARSE time, before a single line executes.)
// ============================================================
function demo(a, a) {
  total = 10;
  delete total;
}
demo(5, 10);
