// Q2. Multi-Type Data Summary

const userName = "Khush Nagpal";           // string
const userAge = 21;                        // number
const isActive = true;                     // boolean
const hobbies = ["coding", "music"];       // array
const profile = { city: "Agra", id: 101 }; // object
const middleName = null;                   // null
let phoneNumber;                           // undefined

// Helper: typeof returns "object" for arrays and null, so handle them separately
function getType(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

const entries = [
  ["userName", userName],
  ["userAge", userAge],
  ["isActive", isActive],
  ["hobbies", hobbies],
  ["profile", profile],
  ["middleName", middleName],
  ["phoneNumber", phoneNumber],
];

// Build report rows (label + value + type)
const report = entries.map(([label, value]) => ({
  Label: label,
  Value: JSON.stringify(value) === undefined ? "undefined" : JSON.stringify(value),
  Type: getType(value),
}));

// Single console.table() statement
console.table(report);
