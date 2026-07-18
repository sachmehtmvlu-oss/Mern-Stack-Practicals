function calculateSalary(product, quantity, price) {
    let total = quantity*price;
    let bill = total+(total*0.18);

    console.log("Product :",product);
    console.log( "Quantity :",quantity);
    console.log("Price per Item  :",price);
    console.log("Total bill :",bill);

}

calculateSalary("Laptop",2,50000);

console.log("Sachin Ramesh Mehta, TY18");