//Spread & Rest Operator
// 1
arr1 = [10, 20];
arr2 = [30, 40];
arrRes = [...arr1, ...arr2, 50];
console.log(arrRes);

// 2
arr3 = [1, 2, 3];
nums = [...arr3, 4, 5, 6];
console.log("Original: " + arr3);
console.log("Modified: " + nums);

// 3

const obj1 = {
  name: "Sridhar",
  age: 24,
  Salary: 500,
};
const obj2 = {
  name: "Luffy",
  age: 22,
  Salary: 1000000,
};
const merged = { ...obj1, ...obj2 };
console.log(merged); // OutPut: { name: "Sridhar", salary: 100000, age: 24 } the same key (here salary), the value from the object that comes later overrides the previous one. So salary became 100000 from obj2.

// 4

function unLimited(...nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}
console.log(unLimited(1, 2, 3, 5)); //Output is 11

//5
function twoPara(num1, num2, ...num3) {
  console.log(num1);
  console.log(num2);
  console.log(num3);
}
twoPara(1, 3, 4, 5, 6, 7, 8); //Output: [4,5,6,7,8]

//Destructuring

// 6

const arr4 = [5, 10, 15, 20];
const [first, , , last] = arr4;
console.log("First: " + first, "Last: " + last); //Output: First: 5 Last: 20

// 7
let a = 20;
let b = 30;
console.log("Before--> " + a, b); //Output: Before--> 20 30
[a, b] = [b, a];
console.log("After--> " + a, b); //Output: After--> 30 20

//8
let arr5 = [1, [2, [3, [4]]]];
[first, [second, [third, [fourth]]]] = arr5;
console.log(fourth); //OutPut: 4

//9
const obj3 = { name: "John", age: 25 };
const { name: userName, age } = obj3;
console.log(userName); //Output: john

//10
const obj4 = { name: "John", age: 25 };
const { name, age, salary = 60000 } = obj4;
console.log(name); //OutPut: John
console.log(salary); //Output: 6000

// Basic Array Operations

//11

const arr = [1, 2, 3, 4, 5];
arr.push(6, 7);

console.log(arr); //Output: [1, 2, 3, 4, 5, 6, 7]

// 12

const arr6 = [1, 2, 3, 4, 5];
arr6.pop();
console.log(arr6); //Output: [1, 2, 3, 4]

// 13
let arr7 = [10, 20, 30, 40];

arr7.shift();

console.log(arr7); //Output: [20, 30, 40]

// 14
let arr8 = [10, 20, 30, 40];

arr8.unshift(40);

console.log(arr8); //Output: [40, 10, 20, 30, 40]

//15
const arr9 = [1, 2, 3, 4, 5, 6];
arr9.splice(2, 2);
console.log(arr9); //Output: // [1, 2, 5, 6]

//Slice / Splice / Flat

//16

let arr10 = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
const result = arr10.slice(3, 6);
console.log(result);

//17
const arr11 = [1, 2, 3, 4, 5, 6, 7, 8];
arr11.splice(2, 2, 9, 10);
console.log(arr11); //OutPut: [1, 2, 9, 10, 5, 6, 7, 8]

//18
const arr12 = [1, [2, [3, [4]]]];
const res = arr12.flat();
console.log(res); //Output: [1, 2, Array(2)]

//19
const arr13 = [1, [2, [3, [4]]]];
const res1 = arr13.flat();
console.log(res1); //Output: [1, 2, Array(2)]

//20
const arr14 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr14.splice(3, 0, 11, 12);
console.log(arr14); //Output: [1, 2, 3, 11, 12, 4, 5, 6, 7, 8, 9, 10]

//Searching & Checking

//21

const arr15 = [10, 50, 100, 200];

const exists = arr15.includes(100);

console.log(exists); //Output: true

// 22
const arr16 = [10, 11, 3, 45, 50, 100, 200];
const res3 = arr16.indexOf(3, 2);
console.log(res3);

//23
const arr17 = [1, 5, 3, 5, 2];
const res4 = arr17.lastIndexOf(5);

console.log(res4); //Output: 3

//24
const arr18 = [1, 5, 3, 5, 2];
const res5 = arr18.every((num) => num > 0);
console.log(res5); //Output: true

//25
const arr19 = [10, 30, 50, 60, 30, 20, 80];
const res6 = arr19.some((num1) => num1 > 50);
console.log(res6);

//26
const sorts = [10, 5, 100, 1];
const res7 = sorts.sort((a, b) => a - b);
console.log(res7); //Output: [1, 5, 10, 100]

//27
const sorts2 = [10, 5, 100, 1];
const res8 = sorts2.sort((a, b) => b - a);
console.log(res8); //Output: [100, 10, 5, 1]

//28
const obj5 = [
  {
    name: "sridhar",
    age: 25,
    salary: 300000,
  },
  {
    name: "raju",
    age: 24,
    salary: 100000,
  },
  {
    name: "david",
    age: 28,
    salary: 80000,
  },
  {
    name: "tom",
    age: 29,
    salary: 16000,
  },
];
const res9 = obj5.sort((a, b) => a.salary - b.salary);
console.log(res9); //Output: [{name: 'tom', age: 29, salary: 16000}, {name: 'david', age: 28, salary: 80000}, {name: 'raju', age: 24, salary: 100000}, {name: 'sridhar', age: 25, salary: 300000}]

//29
const arr20 = [1, 5, 10, 100];
const res10 = arr20.reverse();
console.log(res10); //Output: [100, 10, 5, 1]

//30
const numbers = [10, 5, 100, 1];
console.log(numbers.sort());
Output: [1, 10, 100, 5]
Because it converts elements to strings and sorts them lexicographically, not numerically.
For numbers always provide (a, b) => a - b for ascending or (a, b) => b - a for descending.

//31
//Higher Order Functions
//forEach
const numbers = [10, 5, 100, 1];

numbers.forEach((currentElement, index, TotalArray) => {
  console.log(currentElement);
}); //Output: 10, 5, 100, 1

//32
const numbers = [10, 5, 100, 1];
const res11 = numbers.forEach((num) => {
  return num * 2;
});
console.log(res11); // undefined

//Map

//33
const numbers = [1, 2, 3];
const res12 = numbers.map((num) => num * 2);
console.log(res12); //[2, 4, 6]

//34
const names = ["Sridhar", "Vijay", "Shabari", "Suriya"];
const res13 = names.map((name) => name.toUpperCase());
console.log(res13); //['SRIDHAR', 'VIJAY', 'SHABARI', 'SURIYA']

//35
const employees = [
  { name: "Sridhar", age: 24, salary: 1000000 },
  { name: "Luffy", age: 22, salary: 500000 },
  { name: "Nami", age: 25, salary: 1500000 },
];
const salaries = employees.map((emp) => emp.salary);
console.log(salaries); //Output:  [1000000, 500000, 1500000]

//filter

//36

const employees = [
  { name: "Sridhar", age: 24, salary: 1000000 },
  { name: "Luffy", age: 22, salary: 300000 },
  { name: "Nami", age: 25, salary: 1500000 },
];
const res14 = employees.filter((emp) => emp.salary > 300000);
console.log(res14); //[{name: 'Sridhar', age: 24, salary: 1000000},{name: 'Nami', age: 25, salary: 1500000}]

//37
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers1.filter((num) => num % 2 == 0);
console.log(evenNumbers); //[2, 4, 6, 8, 10]

//38
const strings = ["banana", "mango", "jungle", "superCar"];
const strlen = strings.filter((str) => str.length > 5);
console.log(strlen); //['banana', 'jungle', 'superCar']

//39
const numbers = [10, 30, 50, 60, 30, 20, 80];

const res15 = numbers.find((num) => num > 50);

console.log(res15); // 60

//find

//40
const employees = [
  { name: "Sridhar", age: 24, salary: 1000000 },
  { name: "Luffy", age: 22, salary: 300000 },
  { name: "Nami", age: 25, salary: 1500000 },
  { name: "Zoro", age: 28, salary: 150000 },
];

const res16 = employees.find((emp) => emp.salary < 200000);
console.log(res16); //{name: 'Zoro', age: 28, salary: 150000}

//Reduce

//41
const numbers = [10, 20, 30];
const totalSum = numbers.reduce((acc, num) => acc + num, 0);
console.log(totalSum); // 60

//42
const numbers = [10, 20, 30, 5, 100, 50];
const maxNumber = numbers.reduce((max, num) => {
  return num > max ? num : max;
}, numbers[0]);

console.log(maxNumber); // 100

//43
const numbers = [10, 20, 30, 5, 100, 50];
const maxCount = numbers.reduce((count) => count + 1, 0);
console.log(maxCount); //6

//44
const numbers = [10, 20, 30];
const obj = numbers.reduce((acc, num, index) => {
  acc[index] = num;
  return acc;
}, {});

console.log(obj); //{0: 10, 1: 20, 2: 30}

//45
const employees = [
  { name: "Sridhar", salary: 1000000 },
  { name: "Luffy", salary: 300000 },
  { name: "Nami", salary: 1500000 },
];

const totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
console.log(totalSalary); // 2800000

//Conversion

//46

const arr21 = [1, 2, 3];
const str = arr21.toString();
console.log(str); //"1, 2, 3"

//47
const numbers = [1, 2, 3];
const joinedStr = numbers.join(" - ");
console.log(joinedStr); // "1 - 2 - 3"

//48
const str1 = "1,2,3";
const arr23 = str1.split(",");
console.log(arr23); // ["1", "2", "3"]

//49
const arrs = [1, [2, 3], [4, [5, 6]]];
const arr22 = arrs.flat(2);
const str2 = arr22.join(", ");
console.log(str2); // "1, 2, 3, 4, 5, 6"

//50
const words = ["I", "am", "a", "Software Developer"];
const sentence = words.map((word) => word).join(" ");
console.log(sentence); // "I am a Software Developer"

//Bonus (Real-World Tasks)

//51
const cart = [
  { item: "T-shirt", price: 500 },
  { item: "Jeans", price: 1200 },
  { item: "Shoes", price: 2000 },
];

const total = cart.reduce((acc, product) => acc + product.price, 0);

console.log("Total Cart Price:", total); // Total Cart Price: 3700

//52
const cart = [
  { item: "T-shirt", price: 500 },
  { item: "Socks", price: 200 },
  { item: "Jeans", price: 1200 },
  { item: "Pen", price: 50 },
];
const low = cart.filter((product) => product.price < 500);
console.log(low);

//53
const products = [
  { name: "T-shirt", price: 500 },
  { name: "Socks", price: 200 },
  { name: "Jeans", price: 1200 },
  { name: "Pen", price: 50 },
];
const query = "s";
const res17 = products.filter((p) =>
  p.name.toLowerCase().includes(query.toLowerCase()),
);
console.log(res17); //Output: [{ name: "T-shirt", price: 500 },{ name: "Socks", price: 200 }]

//54
const numbers = [1, 2, 2, 3, 4, 3];
const uniqueNumbers = numbers.filter(
  (num, index, arr) => arr.indexOf(num) === index,
);
console.log(uniqueNumbers); //Output: [1, 2, 3, 4]

//55
const employees = [
  { name: "Sridhar", salary: 1000000 },
  { name: "Luffy", salary: 300000 },
  { name: "Nami", salary: 1500000 },
  { name: "Zoro", salary: 70000 },
];

const groupedBySalary = employees.reduce((acc, emp) => {
  let range;

  if (emp.salary < 500000) {
    range = "Low(Basic)";
  } else if (emp.salary <= 1000000) {
    range = "Medium(Normal)";
  } else {
    range = "High";
  }

  if (!acc[range]) acc[range] = [];
  acc[range].push(emp);

  return acc;
}, {});

console.log(groupedBySalary);
