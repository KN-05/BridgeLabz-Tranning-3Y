// Q1: Async Coffee Maker (Promise chaining)
const FAILURE_CHANCE = 0.2; // 20% chance that a step fails

// returns a promise that finishes after 1-2 seconds, small chance of failure
function makeStep(stepName) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() < FAILURE_CHANCE) {
        reject(new Error(`${stepName} failed`));
      } else {
        console.log(`${stepName} done`);
        resolve();
      }
    }, delay);
  });
}

const boilWater = () => makeStep("Boiling water");
const brewCoffee = () => makeStep("Brewing coffee");
const pourIntoCup = () => makeStep("Pouring into cup");

console.log("Making coffee...");

boilWater()
  .then(brewCoffee)
  .then(pourIntoCup)
  .then(() => console.log("Coffee ready for the team!"))
  .catch((error) => console.log("Error:", error.message));
