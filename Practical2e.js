let student = {
    rollNo: 101,
    name : "Sachin",
    marks : 85
}
//orginal data calling
console.log("Original Object :");
console.log(student);

//Accessing
console.log("\nAccessing Properties :");
console.log("Name :", student.name);
console.log("Marks :", student.marks);

//Updating 
student.marks = 90;
console.log("\nAfter Updating marks :");
console.log(student);

//Adding
student.city ="Mumbai";
console.log("\nAfter adding city :");
console.log(student);

//deleting
delete student.rollNo;

console.log("\nAfter deleting Roll Number :");
console.log(student);

console.log("Sachin Ramesh Mehta, TY18");