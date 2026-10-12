const userName = "Khush Nagpal";           
const userAge = 21;                        
const isActive = true;                     
const hobbies = ["coding", "music"];       
const profile = { city: "Agra", id: 101 }; 
const middleName = null;                   
let phoneNumber;                           

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

const report = entries.map(([label, value]) => ({
  Label: label,
  Value: JSON.stringify(value) === undefined ? "undefined" : JSON.stringify(value),
  Type: getType(value),
}));
console.table(report);
