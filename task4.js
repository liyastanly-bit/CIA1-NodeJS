// Task 4: Calculate Average Marks

let student1 = {
    name: "Asha",
    marks: 80
};

let student2 = {
    name: "Rahul",
    marks: 90
};

let student3 = {
    name: "Liya",
    marks: 95
};

// Display student details
console.log("------ Student Marks ------");
console.log(student1.name + " : " + student1.marks);
console.log(student2.name + " : " + student2.marks);
console.log(student3.name + " : " + student3.marks);

// Calculate average
let average = (student1.marks + student2.marks + student3.marks) / 3;

console.log("---------------------------");
console.log("Average Marks =", average.toFixed(2));