// Q4: Promise.all and Promise.race
const FAILURE_CHANCE = 0.2;

function deploy(serverName, seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < FAILURE_CHANCE) {
        reject(new Error(`${serverName} failed`));
      } else {
        resolve(serverName);
      }
    }, seconds * 1000);
  });
}

// created once so race and all watch the same servers
const serverA = deploy("Server A", 2);
const serverB = deploy("Server B", 3);

Promise.race([serverA, serverB])
  .then((winner) => console.log("Fastest response:", winner))
  .catch((error) => console.log("Race error:", error.message));

Promise.all([serverA, serverB])
  .then(() => console.log("Deployment completed for all servers"))
  .catch((error) => console.log("Deployment error:", error.message));
