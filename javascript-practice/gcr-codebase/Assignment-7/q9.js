// Q9: Form submit blocker with live error messages

const form = document.getElementById('myForm');
const success = document.getElementById('success');

// One validator per field: returns an error message or '' when valid
const rules = {
  name:     (v) => (v.trim() === '' ? 'Name is required.' : ''),
  email:    (v) => {
    if (v.trim() === '') return 'Email is required.';
    if (!v.includes('@')) return 'Email must contain @.';
    return '';
  },
  password: (v) => (v.length < 6 ? 'Password must be at least 6 characters.' : ''),
};

// Validate one field and show / clear its error. Returns true if valid.
function validateField(id) {
  const input = document.getElementById(id);
  const errorEl = document.getElementById(`${id}Error`);
  const message = rules[id](input.value);

  errorEl.textContent = message;
  input.classList.toggle('invalid', message !== '');
  return message === '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault(); // always stop the real form submission

  // validate every field (map, not "every", so all errors show together)
  const results = Object.keys(rules).map(validateField);
  const allValid = results.every(Boolean);

  success.textContent = allValid ? 'Form Submitted Successfully' : '';
  if (allValid) form.reset();
});

// Live feedback: re-check a field as the user types so errors disappear
// automatically once the input is corrected.
Object.keys(rules).forEach((id) => {
  document.getElementById(id).addEventListener('input', () => {
    // only update the error if one is currently showing
    if (document.getElementById(`${id}Error`).textContent !== '') {
      validateField(id);
    }
    success.textContent = '';
  });
});
