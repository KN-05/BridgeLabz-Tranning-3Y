// Q4. Academic Performance Evaluator

const marks = [78, 85, 90, 66, 72];        // 5 subjects, each out of 100
const maxMarksPerSubject = 100;

let totalMarks = 0;
let anyFailedSubject = false;

for (const mark of marks) {
  totalMarks += mark;
  if (mark < 35) anyFailedSubject = true;  // validation: any subject < 35
}

const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * maxMarksPerSubject)) * 100;

console.log(`Average    : ${average.toFixed(2)}`);
console.log(`Percentage : ${percentage.toFixed(2)}%`);

if (anyFailedSubject || percentage < 50) {
  console.log("Detained");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else {                                   // 50% to below 85%
  console.log("Promoted");
}
