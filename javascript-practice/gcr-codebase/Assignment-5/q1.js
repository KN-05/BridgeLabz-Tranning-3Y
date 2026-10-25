// Q1: Callback
function showEndMessage() {
  console.log("Welcome to the course!");
}

function greetUser(name, callback) {
  console.log("Hello " + name);
  callback(); // runs after the greeting
}

greetUser("Aman", showEndMessage);
