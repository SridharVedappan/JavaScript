// TASK 1
var age = 23;
console.log("My age is:", age);
age = 24;
console.log("My age is:", age);

// TASK 2
let myName = "Sridhar";
console.log("My Name is:", myName);
myName = "Sridhar V";
console.log("My Name is:", myName);

// TASK 3
const birthYear = 2001;
console.log("Your Birth Year is", birthYear);
//birthYear = 2000;
console.log("Your Birth Year is", birthYear); //"TypeError" because, declare a constant variable its value can be unchangeable.

// TASK 4
var num = 10;
console.log(num);
var num = 20;
console.log(num);

// TASK 5
let msg = "hello";
console.log(msg);
let msg = "hi"; // "Error: Identifier because,let cannot be re-declared in the same scope.
console.log(msg);

//TASK 6
console.log("Sridhar");
console.log("24");
console.log("Salem");
console.log(100);
console.log("JavaScript is fun");

// TASK 7
alert("Welcome to JavaScript");

// TASK 8
var res = confirm("Do You Like Coding?");
console.log(res);

// TASK 9
const userName = prompt("What is your name");
console.log(userName);

// TASK 10
console.warn("This is a warning");

// TASK 11
console.error("This is an error");

// TASK 12
console.log("Hello");
console.clear();

// TASK 13
document.writeln("My name is Sridhar");

// TASK 14
let userName1 = prompt("What is your name?");
2323;
alert("Hello " + userName1);
console.log(userName1);

//TASK 15
var userAge = prompt("Enter user age:");
console.log(userAge);
document.writeln("Your age is: " + userAge);

//TASK 16
const qa = confirm("Have you had breakfast?");
console.log(qa);

//TASK 17
var city = "Mumbai";
let country = "India";
const planet = "Earth";
console.log(city);
console.log(country);
console.log(planet);

//TASK 18
let val = 5;
console.log(val);
val = 10;
console.log(val);
val = 15;
console.log(val);

// TASK 19
console.log("This is a normal message");
console.warn("This is a warning!");
console.error("This is an error!");

// TASK 20
const uName = prompt("What is Your name?");
let uAge = prompt("Enter Your age?");
const q1 = confirm("Are you student?");
console.log("Name", uName);
console.log("Age: ", uAge);
console.log("Student: ", q1);
alert("welcome");

//TASK 21
console.clear();
alert("Hello!");
let userName = prompt("What is your name?");
alert("Welcome " + userName);
document.writeln("Your name is: " + userName);

// TASK 22
{
  var a = 100;
  let b = 200;
  const c = 300;
}
console.log(a); // 100
console.log(b); // Uncaught ReferenceError: b is not defined "let is block-scoped"
console.log(c); // Uncaught ReferenceError: c is not defined "const is also block-scoped"

// TASK 23
var num1 = 10;
let num2 = 20;
const num3 = 30;
console.log(num1);
console.log(num2);
console.log(num3);

// TASK 24
let likesJs = confirm("Do you like JavaScript?");
console.log(likesJs);
console.warn(likesJs);
console.error(likesJs);

// TASK 25
const userName = prompt("What is your name?");
document.writeln("Your name is: " + userName);
console.log("Your name is:", userName);

//TASK 26
let userAge = prompt("What is your age?");
alert("Your age is: " + userAge);
console.log("Your age is:", userAge);
document.writeln("Your age is: " + userAge);

//TASK 27
{
  var x = 100;
  let y = 200;
}
console.log("var x:", x); // Works
console.log("let y:", y); // Error: y is not defined

// TASK 28
let isAdult = confirm("Are you 18+?");
if (isAdult) {
  console.log("Adult");
} else {
  console.warn("Minor");
}

// TASK 29
var fruit = "Apple";
fruit = "Banana";
let vehicle = "Car";
vehicle = "Bike";
console.log("Final fruit value:", fruit);
console.log("Final vehicle value:", vehicle);

// TASK 30
console.clear();
alert("Practice Start");

const userName = prompt("What is your name?");
let userAge = prompt("What is your age?");
var isHappy = confirm("Are you happy?");

console.log("Name:", userName);
console.log("Age:", userAge);
console.log("Happy:", isHappy);

alert("Practice End");
document.writeln("Thank You");
