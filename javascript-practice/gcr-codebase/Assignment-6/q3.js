// Q3: Callback -> Promise (Bug Tracker)

// original callback version
function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

// promise version
const simulateFailure = false; // change to true to test the failure case

function getBugs() {
  return new Promise((resolve, reject) => {
    fetchBugs((bugs) => {
      if (simulateFailure) {
        reject(new Error("API request failed"));
      } else {
        resolve(bugs);
      }
    });
  });
}

getBugs()
  .then((bugs) => console.table(bugs))
  .catch((error) => console.log("Error:", error.message));
