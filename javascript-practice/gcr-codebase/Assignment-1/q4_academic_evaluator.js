const marks = [78, 85, 90, 66, 72];       
const maxMarksPerSubject = 100;

let totalMarks = 0;
let anyFailedSubject = false;

for (const mark of marks) {
  totalMarks += mark;
  if (mark < 35) anyFailedSubject = true;  
}

const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * maxMarksPerSubject)) * 100;

console.log(`Average    : ${average.toFixed(2)}`);
console.log(`Percentage : ${percentage.toFixed(2)}%`);

if (anyFailedSubject || percentage < 50) {
  console.log("Detained");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else {                                 
  console.log("Promoted");
}
