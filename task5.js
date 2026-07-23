// Task 5: Check Pass or Fail

let student = {
    name: "Liya",
    age: 20,
    course: "BTech AIML",
    marks: 72
};

// Display student details
console.log("------ Student Details ------");
console.log("Name   :", student.name);
console.log("Age    :", student.age);
console.log("Course :", student.course);
console.log("Marks  :", student.marks);

// Check result
if (student.marks >= 40) {
    console.log("Result : PASS");
} else {
    console.log("Result : FAIL");
}