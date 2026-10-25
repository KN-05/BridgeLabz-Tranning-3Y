// Q5: Callback hell vs async/await

// ---------- 1. Callback hell ----------
function stageWithCallback(stageName, callback) {
  setTimeout(() => {
    console.log(stageName);
    callback();
  }, 1000);
}

function runWithCallbacks(done) {
  stageWithCallback("Design", () => {
    stageWithCallback("Build", () => {
      stageWithCallback("Test", () => {
        stageWithCallback("Deploy", () => {
          stageWithCallback("Celebrate", done);
        });
      });
    });
  });
}

// ---------- 2. async/await ----------
function stage(stageName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(stageName);
      resolve();
    }, 1000);
  });
}

// Reads top to bottom like normal code, no nesting, and errors can use one try/catch
async function runWithAsyncAwait() {
  await stage("Design");
  await stage("Build");
  await stage("Test");
  await stage("Deploy");
  await stage("Celebrate");
}

console.log("--- Callback version ---");
runWithCallbacks(async () => {
  console.log("--- async/await version ---");
  await runWithAsyncAwait();
});
