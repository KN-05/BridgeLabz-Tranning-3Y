// Q2: Microtask vs Macrotask
console.log("Start");

setTimeout(() => console.log("setTimeout callback (macrotask)"), 0);

Promise.resolve().then(() => console.log("Promise.then callback (microtask)"));

console.log("Synchronous log");

console.log("End");

/*
Output: Start, Synchronous log, End, Promise.then, setTimeout

Normal code runs first on the call stack. When it finishes, the event loop
empties the microtask queue (promises) completely, and only then picks the
next macrotask (setTimeout). That's why the promise runs before the timeout,
even though the timeout delay is 0.
*/
