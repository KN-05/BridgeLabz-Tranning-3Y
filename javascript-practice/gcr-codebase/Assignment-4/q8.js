// Q8: Dynamic Object Updater
const user = { name: "John", email: "john@mail.com", age: 21 };

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const display = document.getElementById("display");

// put the current object values into the form
function fillForm() {
  nameInput.value = user.name;
  emailInput.value = user.email;
  ageInput.value = user.age;
}

// show the object below the form
function showUser() {
  display.textContent =
    `Name : ${user.name}\nEmail: ${user.email}\nAge  : ${user.age}\n\n` +
    JSON.stringify(user, null, 2);
}

// copy the form values into the object
function updateUser() {
  user.name = nameInput.value;
  user.email = emailInput.value;
  user.age = Number(ageInput.value);
  showUser();
}

// update in real time as the user types
[nameInput, emailInput, ageInput].forEach((input) => input.addEventListener("input", updateUser));

// submit also updates (and stops the page from reloading)
document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  updateUser();
});

fillForm();
showUser();
