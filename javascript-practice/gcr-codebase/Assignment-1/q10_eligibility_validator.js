// Q10. Citizen Eligibility Validator

const age = 22;
const isCitizen = true;

// Note: the brief's rules overlap for citizens aged 18+. Resolved as:
//   citizen aged 18-20 -> vote only (driving/passport need 21+)
//   citizen aged 21+   -> all services
if (isCitizen) {
  if (age >= 18 && age <= 20) {
    console.log("Eligible to vote only.");
  } else if (age > 20) {
    console.log("Eligible for all services.");
  } else {
    console.log("Not eligible yet.");
  }
} else {
  if (age >= 18) {
    console.log("Only age criteria met.");
  } else {
    console.log("Not eligible yet.");
  }
}
