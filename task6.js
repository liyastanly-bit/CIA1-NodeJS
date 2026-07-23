// Task 6: Iterate Over Student Records

let students = [
    { id: 101, name: "Asha", course: "BTech", marks: 85 },
    { id: 102, name: "Rahul", course: "BCA", marks: 72 },
    { id: 103, name: "Liya", course: "BTech AIML", marks: 95 },
    { id: 104, name: "John", course: "BSc CS", marks: 60 }
];

console.log("========== STUDENT RECORDS ==========");

for (let student of students) {
    console.log("----------------------------");
    console.log("ID     :", student.id);
    console.log("Name   :", student.name);
    console.log("Course :", student.course);
    console.log("Marks  :", student.marks);
}

console.log("----------------------------");