// Section 1: Basic Functions (1–8)
// 1
function greeting() {
  console.log("Hello World");
}
greeting(); // Hello World

// 2
function greeting1(name) {
  console.log("Welcome " + name);
}
greeting1("sridhar"); // Welcome sridhar

//3
function addition(num, num1) {
  return num + num1;
}
let add = addition(11, 12);
console.log(add); //123

//4
function oddOrEven(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(oddOrEven(3)); // odd

//5
function addition(num) {
  return num * num;
}
console.log(addition(4)); //16

//6
function largestOfThree(num, num1, num2) {
  if (num > num1 && num > num2) {
    return num;
  } else if (num1 > num2 && num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(largestOfThree(2, 4, 5)); //5

//7
function user(age = 18, role) {
  console.log(age);
}

user(24); // 24
user(); // default age is 18

//8
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(fullName("Sridhar", "Vedappan")); // Sridhar Vedappan

 Section 2: Return & Scope (9–14)
9
function multipleOf3Nums(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log(multipleOf3Nums(20, 40, 60)); //48000

//10
function demonstrateVarLetConst() {

  var a = 10;
  console.log(a); // 10
  if (true) {
    var a = 20; 
    console.log(a); // 20
  }
  console.log(a); // 20 "changes outside too"

  let b = 30;
  console.log(b); // 30
  if (true) {
    let b = 40; // new block-scope b
    console.log(b); // 40
  }
  console.log(b); // 30 "original b unchanged"

  const c = 50;
  console.log(c); // 50
  if (true) {
    const c = 60; // new block-scope const c
    console.log(c); // 60
  }
  console.log(c); // 50 "original c unchanged"
}

demonstrateVarLetConst();

// 11
function f1(a) {
  function f2(a) {
    console.log(a); // "Hi"
  }
  f2(a);
}
f1("Hi");

//12
var globalVar = "Hello Sri";
function globalVariable() {
  console.log(globalVar);
}
globalVariable(); //Hello Sri

//13
function blockScope() {
  if (true) {
    let blockVar = "Hi";
    const blockConst = "Hello";
    console.log(blockVar); // Works
    console.log(blockConst); // Works
  }
  console.log(blockVar); // Error: blockVar is not defined
  console.log(blockConst); // Error: blockConst is not defined
}

blockScope();

//14
console.log(a); //Output: undefined (hoisted, but not initialized)
var a = 10;
console.log(b); //ReferenceError: Cannot access 'b' before initialization
let b = 20;

//Section 3: Function Types (15–20)
//15
let anonymousFunction = function (a) {
  console.log("hi");
};
anonymousFunction();

//16
const fun1 = (a) => {
  console.log("Hi, How are you");
};
fun1(); //Output: Hi, How are you

//17
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

//18
let greet = function () {
  console.log("Hello, Sridhar!");
};
greet(); //Hello, Sridhar!

//19
const person = {
  name: "Sridhar",

  // Normal function
  greetNormal: function () {
    console.log("Normal Function: " + this.name);
  },
  // Arrow function
  greetArrow: () => {
    console.log("Arrow Function: " + this.name);
  },
};
person.greetNormal(); // Normal Function: Sridhar
/* this refers to the object calling the function (person)")*/
person.greetArrow(); // Arrow Function: undefined
/* Arrow functions do not have their own this.
They inherit this from the surrounding 
 scope (here, global scope so undefined) */

//20
(function () {
  console.log("hi");
})(); //hi

//Section 4: Callback & Higher Order Functions (21–25)
//21
function function1(Callback) {
  console.log("Hello Sridhar");
  Callback();
}
function function2() {
  console.log("Welcome");
}
function1(function2);

// 22
const calculator = (operation, a, b) => operation(a, b);
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multiple = (a, b) => a * b;
console.log(calculator(add, 10, 20)); // 30
console.log(calculator(sub, 10, 20)); // -10
console.log(calculator(multiple, 10, 20)); // 200

// 23
function message(callback) {
  callback();
}
function customMessage() {
  console.log("Hello Sridhar! This is my custom message.");
}
message(customMessage);

//24
function delaysExecution(callback) {
  callback();
}
function timeOut() {
  setTimeout(() => {
    console.log("hi");
  }, 1000);
}

delaysExecution(timeOut); //hi

//25
function customMap(array, callback) {
  let result = new Array(array.length);

  for (let i = 0; i < array.length; i++) {
    result[i] = callback(array[i]);
  }
  return result;
}
const names = ["zoro", "luffy", "sanji"];
const greetings = customMap(names, (name) => "Hello " + name);
console.log(greetings); // Output: ['Hello zoro', 'Hello luffy', 'Hello sanji']

// Section 5: Currying (26–28)
// 26
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(add(2)(3)(4)); // 9

//27
function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
console.log(multiply(2)(3)(4)); // 24

//28
function greeting(greet1) {
  return function (greet2) {
    return function (greet3) {
      return `${greet1} ${greet2} ${greet3}`;
    };
  };
}
console.log(greeting("Hello")("Sridhar")("Good Morning")); // Hello Sridhar Good Morning

//Section 6: Generator Function (29–31)
//29
function* messageGenerator() {
  yield "Hello";
  yield "How are you?";
  yield "Goodbye";
}

const res = messageGenerator();
console.log(res.next().value); // Hello!
console.log(res.next().value); // How are you?
console.log(res.next().value); // Goodbye!

//30
function* generator() {
  yield "Hello";
  yield "How are you?";
  yield "Goodbye";
}
const gen = generator();
for (const message of gen) {
  console.log(message);
}

//31
function* infiniteNumbers() {
  let num = 1;
  while (true) {
    yield num;
    num++;
  }
}
const numbers = infiniteNumbers();

console.log(numbers.next().value); // 1
console.log(numbers.next().value); // 2
console.log(numbers.next().value); // 3
console.log(numbers.next().value); // 4
console.log(numbers.next().value); // 5

//Section 7: Spread Operator (32–34)
//32
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
const res = [...arr1, ...arr2];
console.log(res); // Output: [1, 2, 3, 4, 5, 6]

//33
const original = {
  name: "Sridhar",
  age: 25,
  city: "Chennai",
};

const updated = { ...original, age: 26 };

console.log(updated); // Output: { name: 'Sridhar', age: 26, city: 'Chennai' }
console.log(original); // Output: { name: 'Sridhar', age: 25, city: 'Chennai' }

//34
let fruits = ["apple", "banana", "orange"];
let vegetables = ["carrot", "cucumber", "potato"];

const res = [...fruits, ...vegetables, "chicken", "fish"];
console.log(res); //Output: ['apple', 'banana', 'orange', 'carrot', 'cucumber', 'potato', 'chicken', 'fish']

//Section 8: Rest Operator (35–37)
//35
function add(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log(add(1, 2, 3)); // Output: 6
console.log(add(10, 20, 30, 40)); // Output: 100
console.log(add(5)); // Output: 5

//36
function extraArgs(first, second, ...extra) {
  console.log(first);
  console.log(second);
  console.log(extra);
}

extraArgs(1, 2, 3, 4, 5, 6); //Output 1, 2 "extra arguments[3, 4, 5, 6]"

//37
function maxNum(...numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

console.log(maxNum(10, 5, 20, 8, 15)); // Output: 20
console.log(maxNum(1, 2, 3)); // Output: 3

//Section 9: Switch Case (38–40)
function printDay(dayNumber) {
  let dayName;

  switch (dayNumber) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    case 7:
      dayName = "Sunday";
      break;
    default:
      dayName = "Invalid day number";
  }

  console.log(dayName);
}

printDay(1); // Monday
printDay(3); // Wednesday

//39
function calculate(operation, a, b) {
  let result;

  switch (operation) {
    case "add":
      result = a + b;
      break;
    case "sub":
      result = a - b;
      break;
    case "multiply":
      result = a * b;
      break;
    case "divide":
      result = a / b;
      break;
    default:
      result = "Invalid operation";
  }

  console.log(result);
}

calculate("add", 2, 4); // 6
calculate("sub", 10, 3); // 7
calculate("multiply", 3, 5); // 15
calculate("divide", 20, 4); // 5
calculate("mod", 10, 3); // Invalid operation

//40
function getGrade(score) {
  let grade;

  if (score >= 90) {
    grade = "A";
  } else if (score >= 75) {
    grade = "B";
  } else if (score >= 50) {
    grade = "C";
  } else {
    grade = "Fail";
  }

  console.log("Score:", score, "Grade:", grade);
}
getGrade(95); // Score: 95 Grade: A
getGrade(80); // Score: 80 Grade: B
getGrade(60); // Score: 60 Grade: C
getGrade(40); // Score: 40 Grade: Fail
