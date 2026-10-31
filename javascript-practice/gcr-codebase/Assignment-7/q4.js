// Q4: Theme switcher using attribute manipulation

const body = document.body;
const buttons = document.querySelectorAll('[data-theme-btn]');
const currentLabel = document.getElementById('current');

function applyTheme(theme) {
  // the class is applied through setAttribute (as the question requires)
  body.setAttribute('class', `theme-${theme}`);
  // the current theme is stored in a custom attribute
  body.setAttribute('data-theme', theme);
  currentLabel.textContent = body.getAttribute('data-theme');
}

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    applyTheme(btn.getAttribute('data-theme-btn'));
  });
});

// default theme
applyTheme('light');
