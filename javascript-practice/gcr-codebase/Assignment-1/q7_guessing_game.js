

const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25;                                    

console.log(`Your guess: ${userGuess} (secret: ${secretNumber})`);

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else {
  
  if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
    console.log("Very close!");
  } else if (userGuess > secretNumber) {
    console.log("Too high");
  } else {
    console.log("Too low");
  }
}
