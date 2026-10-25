// Q7: Login Form Validation using RegExp
const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // username: at least 5 characters
  const usernameErrors = [];
  if (!/^.{5,}$/.test(username)) {
    usernameErrors.push("Username must be at least 5 characters.");
  }

  // password: separate checks so we can show specific messages
  const passwordErrors = [];
  if (!/^.{8,}$/.test(password)) passwordErrors.push("at least 8 characters");
  if (!/\d/.test(password)) passwordErrors.push("a number");
  if (!/[A-Z]/.test(password)) passwordErrors.push("an uppercase letter");
  if (!/[a-z]/.test(password)) passwordErrors.push("a lowercase letter");
  if (!/[^A-Za-z0-9]/.test(password)) passwordErrors.push("a special character");

  const userInput = document.getElementById("username");
  const passInput = document.getElementById("password");

  userInput.className = usernameErrors.length ? "invalid" : "valid";
  passInput.className = passwordErrors.length ? "invalid" : "valid";
  document.getElementById("usernameError").textContent = usernameErrors.join(" ");
  document.getElementById("passwordError").textContent =
    passwordErrors.length ? "Password needs: " + passwordErrors.join(", ") + "." : "";

  document.getElementById("message").textContent =
    usernameErrors.length || passwordErrors.length ? "" : "Login successful!";
});
