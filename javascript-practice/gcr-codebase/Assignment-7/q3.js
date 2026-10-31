// Q3: 3-step form with Next / Back and validation

const stepEls = document.querySelectorAll('.step');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const errorEl = document.getElementById('error');
const progress = document.getElementById('progress');
const formArea = document.getElementById('formArea');
const summary = document.getElementById('summary');

// Each step has its own validation function.
// It returns an error message, or '' if the value is fine.
const validators = [
  (v) => (v.trim().length >= 2 ? '' : 'Name must be at least 2 characters.'),
  (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Please enter a valid email.'),
  (v) => (v.length >= 6 ? '' : 'Password must be at least 6 characters.'),
];

const fields = ['name', 'email', 'password'].map((id) => document.getElementById(id));
let current = 0;

// Show only the current step
function showStep() {
  stepEls.forEach((el, i) => el.classList.toggle('active', i === current));
  progress.textContent = `Step ${current + 1} of ${stepEls.length}`;
  backBtn.style.visibility = current === 0 ? 'hidden' : 'visible';
  nextBtn.textContent = current === stepEls.length - 1 ? 'Finish' : 'Next';
  errorEl.textContent = '';
  fields[current].focus();
}

function showSummary() {
  formArea.style.display = 'none';
  progress.textContent = 'All steps complete!';
  summary.style.display = 'block';
  summary.innerHTML = `
    <h3>Summary</h3>
    <p><b>Name:</b> <span id="sName"></span></p>
    <p><b>Email:</b> <span id="sEmail"></span></p>
    <p><b>Password:</b> ${'*'.repeat(fields[2].value.length)}</p>`;
  document.getElementById('sName').textContent = fields[0].value.trim();
  document.getElementById('sEmail').textContent = fields[1].value.trim();
}

nextBtn.addEventListener('click', () => {
  const message = validators[current](fields[current].value);
  if (message) {            // invalid -> stay on this step
    errorEl.textContent = message;
    return;
  }
  if (current === stepEls.length - 1) {
    showSummary();          // last step was valid
  } else {
    current++;
    showStep();
  }
});

backBtn.addEventListener('click', () => {
  if (current > 0) {
    current--;
    showStep();
  }
});

// Pressing Enter acts like clicking Next
fields.forEach((f) =>
  f.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') nextBtn.click();
  })
);

showStep();
