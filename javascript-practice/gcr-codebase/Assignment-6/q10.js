// Q10: Async delivery pipeline
const FAILURE_CHANCE = 0.1;

// each step waits 1-2 seconds, then succeeds or (rarely) fails
function runStep(stepName) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() < FAILURE_CHANCE) {
        reject(new Error(stepName + " failed"));
      } else {
        resolve();
      }
    }, delay);
  });
}

const takeOrder = () => runStep("takeOrder");
const prepare = () => runStep("prepare");
const pack = () => runStep("pack");
const dispatch = () => runStep("dispatch");
const deliver = () => runStep("deliver");

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    // "await" pauses only this function. The timers run in the background
    // and the event loop stays free; when a timer fires, the promise resolves
    // and the function continues from the next line.
    await takeOrder();
    console.log("Step 1: Order taken");

    await prepare();
    console.log("Step 2: Food prepared");

    await pack();
    console.log("Step 3: Package ready");

    await dispatch();
    console.log("Step 4: Out for delivery");

    await deliver();
    console.log("Delivery completed!");
  } catch (error) {
    // a rejected promise jumps straight here and skips the remaining steps
    console.log("Pipeline failed!", "(" + error.message + ")");
  }
}

runPipeline();
