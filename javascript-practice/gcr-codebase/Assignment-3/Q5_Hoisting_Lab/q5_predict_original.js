// ============================================================
// Q5 (Part A) – ORIGINAL code, as given. Predict, then run.
// Run: node q5_predict_original.js
// ============================================================
console.log(score);   // PREDICTION: undefined  (var is hoisted, value not yet assigned)
announce();           // PREDICTION: "Game started" (function declaration fully hoisted)

var score = 50;
function announce() { console.log("Game started"); }

let status = "ready";
startGame();          // works: startGame is hoisted AND `status` is already initialised here

function startGame() {
  console.log(status); // "ready"
}

/*
 TASK 1 – MEMORY STATE OF EACH HOISTED ELEMENT (creation phase, before line 1 runs)
 +-----------+---------------------+---------------------------------------------+
 | name      | kind                | state before execution                      |
 +-----------+---------------------+---------------------------------------------+
 | score     | var                 | created, initialised to `undefined`         |
 | announce  | function declaration| created AND fully initialised (function body)|
 | status    | let                 | created but UNINITIALISED = Temporal Dead   |
 |           |                     | Zone (TDZ) until line `let status = ...`    |
 | startGame | function declaration| created AND fully initialised               |
 +-----------+---------------------+---------------------------------------------+
 Output: undefined / Game started / ready
 The "trap": console.log(score) prints undefined (not 50, not an error).
 If startGame() were called BEFORE `let status = "ready"`, it would throw
 ReferenceError: Cannot access 'status' before initialization (see q5_fixed.js demo).
*/
