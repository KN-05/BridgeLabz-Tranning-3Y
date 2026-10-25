// Q2: Student Form Validator (RegExp)
// Each field has a regex and an error message. The key matches the input id.
const rules = {
  name: { regex: /^[A-Za-z ]+$/, message: "Name can only contain alphabets." },
  email: { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email like example@domain.com." },
  phone: { regex: /^\d{10}$/, message: "Phone must be exactly 10 digits." },
  password: {
    // lookaheads: at least 1 uppercase, 1 number and 1 special character
    regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
    message: "Password needs 1 uppercase letter, 1 number and 1 special character.",
  },
};

const form = document.getElementById("studentForm");
const result = document.getElementById("result");

// checks one input, sets border colour + error text, returns true/false
function validateField(input) {
  const rule = rules[input.id];
  const errorSpan = document.getElementById(input.id + "Error");

  if (rule.regex.test(input.value.trim())) {
    input.className = "valid";      // green border
    errorSpan.textContent = "";
    return true;
  }
  input.className = "invalid";      // red border
  errorSpan.textContent = rule.message;
  return false;
}

// validate live while typing
Object.keys(rules).forEach((id) => {
  document.getElementById(id).addEventListener("input", (e) => validateField(e.target));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // map (not every) so ALL fields get checked and show their errors
  const results = Object.keys(rules).map((id) => validateField(document.getElementById(id)));
  result.textContent = results.every(Boolean) ? "Registration successful!" : "";
});
