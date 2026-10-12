// Q1. Personalized Login Greeting

const userName = "Khush";                 // user's name
const currentHour = new Date().getHours(); // current hour (0-23)

let greeting;
if (currentHour < 12) {
  greeting = `Good Morning ${userName}!`;
} else if (currentHour <= 17) {            // 12 to 17
  greeting = `Good Afternoon ${userName}!`;
} else {
  greeting = `Good Evening ${userName}!`;
}

console.log(`Current hour: ${currentHour}`);
console.log(greeting);
