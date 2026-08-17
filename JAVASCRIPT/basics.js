console.log("Jay Singh")

//  Template Literals
let pencilPrice = 10;
let eraserPrice = 5;
// console.log("The total price is :",(pencilPrice + eraserPrice),"Rupees")
// let output = "The total price is : " + (pencilPrice + eraserPrice) + " Rupees";
// console.log(output)

// back ticks
console.log(`The total price is : ${pencilPrice + eraserPrice} Rupees`)

// Prompt
// let firstName = prompt("Enter Your First Name");
// let lastName = prompt("Enter Your last Name");
// console.log(`Welcome ${firstName} ${lastName}`);

// Operations
let a = 10;
let b = 5;
console.log(a++)  // a++ = 10, a=11
console.log(++a)  // ++a = 12, a=12

// Conditional Statement

console.log("Before my if Statement");

let age = 12;
if (age >= 19){
    console.log("You can vote");
    console.log("You can Drivee");
}
else {
    console.log("You cannot vote");
    console.log("You cannot Drivee");
}
console.log("After my if Statement");

// Practice Question 1

let light = "green";
if (light == "red"){
    console.log("Stop");
} else if (light == "yellow"){
    console.log("Go Slow");
} else{
    console.log("Go");
}

// Practice Question 2
let size = "S";
if (size == "XL"){
    console.log("Price is 250 Rupees")
} else if (size == "L"){
    console.log("Price is 200 Rupees")
} else if (size == "M"){
    console.log("Price is 100 Rupees")
} else{
    console.log("Price is 50 Rupees")
}
// Practice Question 3
let marks = 14;
if (marks >= 33){
    console.log("Pass");
    if (marks >= 80){
        console.log("Outstanding");
    } else {
        console.log("A");
    }
}
else {
    console.log("Better luck Next Time");
}

// Switch Statement
let color = "green";
switch (color) {
    case "red" : 
        console.log("stop");
        break;
    case "yellow" :
        console.log("slow down");
        break;
    case "green" :
        console.log("Go");
        break;
    default :
        console.log("Light is Broken");
        break;
}

let day = 6;
switch (day) {
    case 1 : 
        console.log("Monday");
        break;
    case 2 : 
        console.log("Tuesday");
        break;
    case 3 : 
        console.log("Wednesday");
        break;
    case 4 : 
        console.log("Thursday");
        break;
    case 5 : 
        console.log("Friday");
        break;
    case 6 : 
        console.log("Saturday");
        break;
    case 7 : 
        console.log("Sunday");
        break;
    default : 
        console.log("wrong day");
        break;
}

// Assignment 1
// Question 1
let num = 20;
if (num % 10 == 0){
    console.log("It is divisible by 10")
} else {
    console.log("It is not divisible by 10")
}

// Question 2

// let userName = prompt("Enter your Name");
// let userAge = prompt("Enter Age");
// let alerta = alert (userName + " is " + userAge + " years old.");
// console.log(alerta);
// let alerta = alert (`${userName} is ${userAge} years old.`);
// console.log(alerta);
// console.log(alert (`${userName} is ${userAge} years old.`));

// Question 3
let month = 3;
switch (month) {
    case 1 : 
        console.log("January,February,March");
        break;
    case 2 : 
        console.log("April,May,June");
        break;
    case 3 : 
        console.log("July,August,September");
        break;
    case 4 : 
        console.log("October,November,December");
        break;
    default : 
        console.log("wrong month");
        break;
}
// Question 4
let str = "Aeroplane";
if (str[0]=='a' || str[0]=='A' && str.length>=5){
    console.log("It is a Golden String");
} else {
    console.log("It is not a Golden String");
}
// Question 5
let num1 = 12;
let num2 = 26;
let num3 = 33;
if (num1>num2 && num1>num3){
    console.log(`${num1} is the largest no.`);
} else if (num2>num3){
    console.log(`${num2} is the largest no.`);
} else{
    console.log(`${num3} is the largest no.`);
}

// Question 6 (Important Question)
let n1 = 22;
let n2 = 12;
if (n1 % 10 === n2 % 10){
    console.log("Both the numbers have same last digit");
} else{
    console.log("Both the numbers do not have same last digit");
} 

