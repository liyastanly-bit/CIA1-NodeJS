// Task 7: Skip Students who scored below 40

let students = [
    { name: "Asha", marks: 85 },
    { name: "Rahul", marks: 32 },
    { name: "Liya", marks: 95 },
    { name: "John", marks: 28 },
    { name: "David", marks: 75 }
];

console.log("Students Eligible (Marks >= 40)");

for (let student of students) {

    if (student.marks < 40) {
        console.log(student.name + " skipped (Failed)");
        continue;
    }

    console.log(student.name + " - " + student.marks);
}