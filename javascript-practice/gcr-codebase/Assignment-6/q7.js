// Q7: Promise.allSettled
function loadProfile() { return new Promise(r => setTimeout(() => r("Profile Loaded"), 2000)); }
function loadPosts() { return new Promise(r => setTimeout(() => r("Posts Loaded"), 1500)); }
function loadMessages() { return new Promise(r => setTimeout(() => r("Messages Loaded"), 1000)); }

const sections = [
  { name: "Profile", load: loadProfile },
  { name: "Posts", load: loadPosts },
  { name: "Messages", load: loadMessages },
];

// pick one section at random to fail
const failingIndex = Math.floor(Math.random() * sections.length);

const promises = sections.map((section, index) =>
  section.load().then((message) => {
    if (index === failingIndex) throw new Error(section.name + " failed to load");
    return message;
  })
);

const startTime = Date.now();

Promise.allSettled(promises).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`${sections[index].name}: success -> ${result.value}`);
    } else {
      console.log(`${sections[index].name}: failed -> ${result.reason.message}`);
    }
  });
  console.log("Total time taken:", Date.now() - startTime, "ms");
});
