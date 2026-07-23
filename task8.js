// Task 8: Add Student and Find Highest Marks

let students = [
    { name: "Asha", marks: 85 },
    { name: "Rahul", marks: 72 },
    { name: "John", marks: 60 }
];

console.log("Students Before Adding");
console.log(students);

students.push({
    name: "Liya",
    marks: 95
});

console.log("\nStudents After Adding");
console.log(students);

let highest = students[0];

for (let student of students) {

    if (student.marks > highest.marks) {
        highest = student;
    }

}

console.log("\nHighest Scorer");
console.log("Name :", highest.name);
console.log("Marks:", highest.marks);