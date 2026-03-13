// DataTypes
// Task 1
const Name = "Sridhar";
console.log(Name); //OutPut:- Sridhar

// Task 2
const lang = "JavaScript";
console.log(typeof lang); //OutPut:- string

// Task 3
let age = 22;
console.log(typeof age); //OutPut:- number

//Task 4
const isStudent = true;
console.log(typeof isStudent); //OutPut:- boolean

// Task 5
const salary;
console.log(salary); //a variable without a value automatically undefined

//Array Tasks
//Task 6
const fruits = ["apple", "orange", "grapes", "banana", "mango"];
console.log(fruits); //OutPut ["apple", "orange", "grapes", "banana", "mango"]
//Task 7
console.log(fruits[0]); //Apple
//Task 8
console.log(fruits[2]);
//Task 9
console.log(fruits[fruits.length - 1]); //Mango
//Task 10
const numbers = [10, 20, 30, 40, 50];
console.log(fruits[1] + ", " + fruits[3]); //orange, banana

//Object Tasks
//Task 11
const person = {
  Name: "sridhar",
  age: 25,
  city: "Salem",
  skills: ["HTML", "CSS", "Js", "DSA"],
};
console.log(person); //OutPut:- {Name: 'sridhar', age: 25, city: 'Salem'}

//Task 12
console.log(person.Name); ////OutPut:- Sridhar

//Task 13
console.log(person.skills[1]); //OutPut:- "CSS"

//Task 14
const carDetails = {
  brand: "audi",
  model: 2026,
  price: 10000000,
};
console.log(carDetails.brand); //OutPut:- audi

//Task 15
const fruitCategory = {
  red: ["apple", "cherry"],
  yellow: ["banana", "mango"],
  green: ["kiwi", "grapes"],
};
console.log(fruitCategory.yellow[0]); //Output:- Banana

//Arithmetic Operators
//Task 16
let a = 8;
let b = 4;
console.log(a + b); //Output: 12

// //Task 17
console.log(a - b); //Output: 4

// //Task 18
console.log(a * b); //Output: 32

// //Task 19
console.log(a / b); //Output: 2

// //Task 20
console.log(a % b); //Output: 0

// // Exponential Operator
// // Task 21
console.log(3 ** 2); //Output: 9

// //Task 22
console.log(2 ** 4); //Output: 16

// Increment / Decrement
//Task 23
let num = 5;
num++;

console.log(num); //Output: 6

//Task 24
let num = 10;
num--;
console.log(num); //Output: 9

//Task 25
let x = 6;
let y = x++;
console.log(x, y); //OutPut: 7,6

//Task 26
let a = 4;
let b = ++a;
console.log(a, b); //OutPut: 5,5

// Assignment Operators
// Task 27
let value = 10;
value += 5;
console.log(value); //OutPut: 15

// Task 28
let value = 20;
value -= 3;
console.log(value); //OutPut: 17

//Task 29
let value = 6;
value *= 2;
console.log(value); //OutPut: 12

//Task 30
let value = 20;
value %= 3;
console.log(value); //OutPut 2

// Comparison Operators
// Task 31
console.log(10 == "10"); //OutPut: true

// Task 32
console.log(10 === "10"); //OutPut: false

//Task 33
console.log(15 > 20); //OutPut: false

//Task 34
console.log(5 <= 5); //OutPut: true

// Logical Operators
// Task 35
console.log(10 > 5 && 5 > 2); //OutPut: true

//Task 36
console.log(10 < 5 || 8 > 2); //OutPut: true

//Task 37
console.log(!(5 === "5")); //OutPut: true

// Ternary Operator
// Task 38
let age = 20 ? console.log("Adult") : console.log("Minor"); //OutPut: Adult

//Task 39
let password = 1 ? console.log("Login success") : console.log("Wrong password"); //OutPut: Login success

//String Operations
// Task 40
let firstName = "Spider";
let lastName = "Man";
console.log(firstName + " " + lastName); //OutPut: Spider Man
console.log(`${firstName} ${lastName}`); //OutPut: Spider Man
