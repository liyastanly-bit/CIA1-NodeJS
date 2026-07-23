// Task 9: Remove and Sort Students

let students = [
    { name: "Asha", marks: 85 },
    { name: "Rahul", marks: 72 },
    { name: "John", marks: 60 },
    { name: "Liya", marks: 95 }
];

console.log("Original List");
console.log(students);

let removedStudent = students.pop();

console.log("\nRemoved Student");
console.log(removedStudent);

students.sort((a, b) => a.marks - b.marks);

console.log("\nSorted Students (Ascending Marks)");

for (let student of students) {
    console.log(student.name + " - " + student.marks);
}