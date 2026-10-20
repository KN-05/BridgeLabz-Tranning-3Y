// ============================================================
// Q10 (Part A) – Original code
// Run: node q10_original.js
// ============================================================
function outer() {
  console.log(count);   // 1) undefined
  var count = 5;
  function inner() {
    console.log(count); // 2) undefined
    var count = 10;
  }
  inner();
}
outer();

/*
 TASK 1 – PREDICTION: prints  undefined  then  undefined

 TASK 2 – SEPARATE MEMORY CONTEXTS (two execution contexts, each with its own `count`)

   Global EC
     outer -> function (hoisted)

   outer() EC  (creation phase)
     count = undefined      <- outer's own var `count`
     inner = function       <- hoisted function declaration
   (execution)  console.log(count)  -> undefined
                count = 5
                inner()  --------------------------+
                                                   v
   inner() EC  (creation phase)
     count = undefined      <- inner's OWN var `count` (shadows outer's count = 5)
   (execution)  console.log(count)  -> undefined   (it never looks outward,
                                                    because `count` exists locally)
                count = 10   (only changes inner's copy)

 KEY POINT: the `var count` inside inner is hoisted to the top of inner, so it shadows
 outer's count = 5. Reading it before the assignment yields undefined, not 5.

 TASK 4 – DEBUG SESSION / CALL STACK (F5, breakpoints on each console.log)
   Step 1: Call stack = outer, (global)          -> Scope: count = undefined
   Step 2: after `count = 5` -> inner() is called
           Call stack = inner, outer, (global)   -> inner Scope: count = undefined
                                                    Closure(outer): count = 5
   Step 3: `count = 10` sets inner's local only
   Step 4: inner returns -> stack pops to outer; outer returns -> stack pops to global.
   Watching `count` shows 2 DIFFERENT variables with the same name.
*/
