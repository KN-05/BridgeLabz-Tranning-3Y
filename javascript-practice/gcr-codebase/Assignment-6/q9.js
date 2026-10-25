// Q9: Event loop prediction

/*
Predicted output:
1. Script start
2. Script end
3. Promise callback
4. Timeout callback
*/

console.log("Script start");
setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));
console.log("Script end");

/*
Actual output matches the prediction.

The synchronous logs run first. After the call stack is empty, the event loop
runs all microtasks (promise callbacks) before moving to the next macrotask
(setTimeout), so "Promise callback" comes before "Timeout callback".
*/
