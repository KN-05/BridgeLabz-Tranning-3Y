// ============================================================
// Q8 (Part B-2) – Capture EACH strict-mode error separately
// Run: node q8_strict_mode_errors.js
// We use new Function("...") so each snippet is parsed on its own;
// a SyntaxError in one snippet then cannot stop the others from running.
// ============================================================
const cases = [
  {
    label: "1) Duplicate parameter names",
    code: `"use strict"; function demo(a, a) { return a; } demo(5, 10);`
  },
  {
    label: "2) Assigning to an undeclared variable (total = 10)",
    code: `"use strict"; function demo(a, b) { total = 10; } demo(5, 10);`
  },
  {
    label: "3) delete on a plain variable name (delete total)",
    code: `"use strict"; var total = 10; delete total;`
  },
  {
    label: "4) The original code, complete, in strict mode",
    code: `"use strict"; function demo(a, a) { total = 10; delete total; } demo(5, 10);`
  }
];

for (const c of cases) {
  try {
    new Function(c.code)();
    console.log(`${c.label}\n   -> no error`);
  } catch (err) {
    console.log(`${c.label}\n   -> ${err.name}: ${err.message}`);
  }
}

/*
 TASK 2/3 – DIFFERENCES AND WHY STRICT MODE MAKES THEM ILLEGAL
 +------------------------+--------------------------+----------------------------------+
 | operation              | sloppy mode              | strict mode                      |
 +------------------------+--------------------------+----------------------------------+
 | demo(a, a)             | allowed, last `a` wins   | SyntaxError (parse time)         |
 | total = 10 (undeclared)| creates a global         | ReferenceError: total is not     |
 |                        |                          | defined                          |
 | delete total           | works on implicit global | SyntaxError: Delete of an        |
 |                        |                          | unqualified identifier           |
 +------------------------+--------------------------+----------------------------------+
 WHY ILLEGAL?
 - Duplicate params: almost always a typo; one argument becomes impossible to reach.
 - Implicit globals: typos silently create new globals, pollute the global scope and
   cause hard-to-find bugs; engines also can't optimise them well.
 - delete on a variable: variables are bindings, not object properties; deleting
   them is meaningless. delete is meant only for object properties (delete obj.key).
*/
