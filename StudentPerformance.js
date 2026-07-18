let name = "Sachin Ramesh Mehta"; let rollNo = "T018";
let subject = [80, 90, 95];

function calculateTotal(subject) { let total = 0;
for (let i = 0; i < subject.length; i++) { total += subject[i];
}
return total;
}
function calculatePercentage(total, subject) {
let percentage = (total / (subject.length * 100)) * 100; return percentage;
}

// Call the functions
let total = calculateTotal(subject);
let percentage = calculatePercentage(total, subject); let grade;
if (percentage >= 90) { grade = "A+";
} else if (percentage >= 80) { grade = "A";
} else if (percentage >= 70) { grade = "B";
} else if (percentage >= 60) {

grade = "C";
} else if (percentage >= 50) { grade = "D";
} else {
grade = "Fail";
}
console.log("Name:", name); console.log("Roll No:", rollNo); console.log("Total Marks:", total); console.log("Percentage:", percentage + "%"); console.log("Grade:", grade);
