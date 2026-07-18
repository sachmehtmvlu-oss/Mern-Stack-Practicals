//array of objects
let students = [
{
    rollNo: 101,
    name : "Sachin",
    marks : 85
},
{
    rollNo: 102,
    name : "Rahul",
    marks : 90
},
{
    rollNo: 103,
    name : "Rohit",
    marks : 95
}];
//function  to display Student details
function display(s){
    console.log("Student Details");
    console.log("-------------------------");
    for(let stud of s)
    {
        console.log(`Roll No :${stud.rollNo}`);
        console.log(`Name :${stud.name}`);
        console.log(`Marks :${stud.marks}`);
        console.log(`--------------------------`);
    }
}
//function call
display(students);
console.log("Sachin Ramesh Mehta, TY18");