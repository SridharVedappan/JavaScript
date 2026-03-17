// Task:- 1
let num = prompt("Enter a number");
num = Number(num);
let res = num + 10;
console.log(res);

// Task:- 2
let num1 = prompt("Enter a number");
let num2 = prompt("Enter a number");
num1 = Number(num1);
num2 = Number(num2);
const res = num1 + num2;
console.log(res);

// Task:- 3
let value = prompt("Enter a value");
let res = Boolean(value);
console.log(res);

// Task:- 4
let num = "123";
num = Number(num);
const res = num * 5;
console.log(res); //Output is "615"

// Task:- 5
let isTrue = Number(true);
let isFalse = Number(false);
console.log(isTrue); //Output is 1
console.log(isFalse); //Output is 0

// Task:- 6
let input = prompt("Enter a value:");
let result = Boolean(input);
console.log(result); //Output is True ("false if input is empty ("")")

// Task:- 7
let num1 = Number("100");
let num2 = Number("50");
const res = num1 - num2;
console.log(res); //Output is 50

// Task:- 8
let num = Number(null);
let num1 = Number(undefined);
let num2 = Number("");
console.log(num); //Output is 0
console.log(num1); //Output is NaN
console.log(num2); //Output is 0

// Task:- 9
let str = "10";
let num1 = 20;
console.log(str + num); ////Output is "1020" Because, "String anything is String"

// Task:- 10
let str = Number("25");
const result = str > 20;
console.log(result); //Output is "true"

//11–20 : If / Else Real-Time Tasks
// Task:- 11
let age = prompt("Enter Your age");
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// Task:- 12
let input = prompt("Enter a number:");

let num = Number(input);

if (num > 0) {
  console.log(num + " is Positive");
} else if (num < 0) {
  console.log(num + " is Negative");
} else {
  console.log(num + " is Zero");
}

// Task:- 13
let input = prompt("Enter a number:");

let num = Number(input);

if (num % 2 === 0) {
  console.log(num + " is Even");
} else {
  console.log(num + " is Odd");
}

// Task:- 14
let num = prompt("Enter a number:");
let num1 = prompt("Enter a number:");
let num2 = prompt("Enter a number:");

let largestNum;

if (num >= num1 && num >= num2) {
  largestNum = num;
} else if (num1 >= num && num1 >= num2) {
  largestNum = num1;
} else {
  largestNum = num2;
}
console.log(largestNum);

// Task:- 15
let degree = prompt("Enter a number:");
if (degree >= 35) {
  console.log("Hot day");
} else if (degree >= 20) {
  console.log("Cold day");
} else {
  console.log("Normal weather");
}

// Task:- 16
let mark = prompt("Enter a number:");
if (mark >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// Task:- 17
let isCorrectUserName = "sridhar";
let isCorrectPassword = "0123456789";

let userName = prompt("Enter User Name");
let password = prompt("Enter Password");

if (isCorrectUserName === userName && isCorrectPassword === password) {
  console.log("Login successful");
} else {
  console.log("Login Failed");
}

// Task:- 18
let year = prompt("Enter a year:");
year = Number(year);

if (year % 4 === 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}

// Task:- 19
let time = prompt("Enter a time:");
let numTime = Number(time);
if (numTime >= 5 && numTime < 12) {
  console.log("Morning");
} else if (numTime >= 12 && numTime < 17) {
  console.log("Afternoon");
} else if (numTime >= 17 && numTime < 21) {
  console.log("Evening");
} else {
  console.log("Night");
}

// Task:- 20
let num = prompt("Enter your monthly salary:");
let salary = Number(num);
if (salary >= 50000) {
  console.log("Tax is " + salary * 0.2);
} else if (salary >= 30000) {
  console.log("Tax is " + salary * 0.1);
} else {
  console.log("No needed to pay Tax");
}

//21–30 : Loop Based Tasks
// Task:- 21
let num = 10;
for (let i = 1; i <= num; i++) {
  console.log(i); //Output is {1,2,3,4,5,6,7,8,9,10}
}

// Task:- 22
for (let i = 10; i >= 1; i--) {
  console.log(i); //Output is {10,9,8,7,6,5,4,3,2,1}
}

// Task:- 23
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Task:- 24
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

// Task:- 25
let num = prompt("Enter a number:");
for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + num * i);
}

// Task:- 26
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// Task:- 27
let n = prompt("Enter a number:");
n = Number(n);

let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(factorial);

// Task:- 28
let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    count++;
  }
}
console.log(count); //Output is 20

// Task:- 29
for (let i = 1; i <= 10; i++) {
  console.log(i * i); //Output is (1, 4, 9, 16, 25, 36, 49, 64, 81, 100)
}

// Task:- 30
let num = 123456;
num = num.toString();
let str = " ";
for (let i = num.length - 1; i >= 0; i--) {
  str += num[i];
}
console.log(Number(str)); //Output is (654321) (Actually, I solved this question on LeetCode using this approach, which is why I converted numbers to strings using the toString() method).

// 31–35 : Array Tasks
// Task:- 31
let arr = ["apple", "banana", "orange"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); //Output is (apple, banana, orange)
}

// Task:- 32
let count = 0;
let arr = ["apple", "banana", "orange"];
for (let i = 0; i < arr.length; i++) {
  count++;
}
console.log(count); //Output is 3 (apple, banana, orange)

// Task:- 33
let nums = [1, 2, 3];
let largest = nums[0];

for (let i = 0; i < nums.length; i++) {
  if (largest < nums[i]) {
    largest = nums[i];
  }
}
console.log(largest); //Output is 3

// Task:- 34
let nums = [1, 2, 3];
let sum = nums[0];

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log("Sum of array numbers: " + sum); //Output is 7

// Task:- 35
let nums = [2, 5, 8, 11, 20];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    console.log(nums[i]); //Output is (2,8,20)
  }
}

//36–40 : Object Tasks
// Task:- 36
let details = {
  name: "John",
  age: 25,
  city: "Chennai",
};
for (let key in details) {
  console.log(key + ": " + details[key]);
}
console.log(details); //Output is (name: 'John', age: 25, city: 'Chennai')

// Task:- 37
let details = {
  name: "John",
  age: 25,
  city: "Chennai",
};
let count = 0;
for (let key in details) {
  count++;
}
console.log(count); //Output is 3

// Task:- 38
let details = { name: "john", age: 25, salary: 5000 };
let contain = false;

for (let key in details) {
  if (key === "salary") {
    contain = true;
  }
}

console.log(contain); //Output is true

// Task:- 39
let details = { name: "john", age: 25, salary: 5000 };
for (let value in details) {
  console.log(details[value]); //Output is [john, age, 5000]
}

// Task:- 40
let employee_details = {
  name: "sridhar",
  role: "Software Developer",
  salary: 5000,
  department: "Software development",
};
for (let key in employee_details) {
  console.log(key + ": " + employee_details[key]); //Output is (name: 'sridhar', role: 'Software Developer', salary: 5000, department: 'Software development')
}
