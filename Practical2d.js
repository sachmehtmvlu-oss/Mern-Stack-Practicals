let numbers = [10,20,30,40,50];
let doubled = numbers.map(num => num*2);

let greater25 = numbers.filter(num => num > 25);

let total = numbers.reduce((sum,num) => sum + num,0);

console.log("Original array :",numbers);
console.log("Map :",doubled);
console.log("Filter  :",greater25);
console.log("Reduce :",total);
console.log("Sachin Ramesh Mehta, TY18");