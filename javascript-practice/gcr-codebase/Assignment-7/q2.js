// Q2: Live character counter with warning behaviour

const MAX = 100;
const textarea = document.getElementById('text');
const counter = document.getElementById('counter');
const resetBtn = document.getElementById('resetBtn');

// Update the counter text and colour
function updateCounter() {
  const remaining = MAX - textarea.value.length;
  counter.textContent = `${remaining} characters remaining`;

  counter.classList.remove('warning', 'danger');
  if (remaining <= 0) {
    counter.classList.add('danger');   // red at 0
  } else if (remaining <= 20) {
    counter.classList.add('warning');  // yellow at 20 or fewer
  }
}

// Block typing once the limit is reached
textarea.addEventListener('keydown', (e) => {
  const remaining = MAX - textarea.value.length;

  // keys that don't add text (Backspace, arrows, Ctrl+A, ...) must still work
  const isTypingKey = e.key.length === 1 && !e.ctrlKey && !e.metaKey;
  const isEnter = e.key === 'Enter';

  if (remaining <= 0 && (isTypingKey || isEnter)) {
    e.preventDefault();
  }
});

// Handles paste / drag-drop: cut the text down if it goes over the limit
textarea.addEventListener('input', () => {
  if (textarea.value.length > MAX) {
    textarea.value = textarea.value.slice(0, MAX);
  }
  updateCounter();
});

// Reset button clears everything
resetBtn.addEventListener('click', () => {
  textarea.value = '';
  updateCounter();
  textarea.focus();
});

updateCounter();
