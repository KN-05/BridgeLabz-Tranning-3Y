// Q2: applyOperation with callback
function applyOperation(numbers, operation) {
  const result = [];
  for (const num of numbers) {
    result.push(operation(num));
  }
  return result;
}

const numbers = [1, 2, 3, 4];

console.log("Doubled:", applyOperation(numbers, (n) => n * 2));
console.log("Squared:", applyOperation(numbers, (n) => n * n));
