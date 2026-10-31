// Q8: Custom dropdown without <select>

const dropdown = document.getElementById('dropdown');
const dropBtn = document.getElementById('dropBtn');
const options = document.getElementById('options');

// Button toggles the option list
dropBtn.addEventListener('click', () => {
  options.classList.toggle('open');
});

// Clicking an option updates the button text and closes the list
options.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    dropBtn.textContent = e.target.textContent;
    options.classList.remove('open');
  }
});

// Close the dropdown when clicking outside of it.
// The third argument "true" makes this listener run in the CAPTURING phase,
// so it fires before the click reaches the target element.
document.addEventListener(
  'click',
  (e) => {
    if (!dropdown.contains(e.target)) {
      options.classList.remove('open');
    }
  },
  true
);
