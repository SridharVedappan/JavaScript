//Task 1: Username Formatter
const userName = prompt("Enter User name:");

console.log(userName.trim().toLowerCase().replace(" ", "_")); //Output: "NAVEEN_KUMAR"

//Task 2: Email Validator (Basic)
const gmail = prompt("Enter Your gmail:");

if (gmail.includes("@") && gmail.endsWith(".com")) {
  console.log("Valid Email");
} else {
  console.log("Invalid Email");
}

//Task 3: Word Counter
let text = "javascript is very powerful language";

let count = text.split(" ").length;

console.log(count); //Output: 3

// Task 4: Replace Second Word Only
let str = "python python developer";

let secondWords = str.split(" ");

secondWords[1] = "javascript";

let result = secondWords.join(" ");

console.log(result); // "python javascript developer"

// Task 5: Password Strength Checker
function checkPassword(password) {
  if (password.length < 8) return "Weak";

  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;

  for (let i = 0; i < password.length; i++) {
    const char = password[i];

    if (char >= "A" && char <= "Z") hasUpper = true;
    else if (char >= "a" && char <= "z") hasLower = true;
    else if (char >= "0" && char <= "9") hasNumber = true;
  }

  return hasUpper && hasLower && hasNumber ? "Strong" : "Weak";
}
console.log(checkPassword("Sridhar12")); // Strong
console.log(checkPassword("sridhar12")); // Weak

// Task 6: Reverse a String
let str1 = "hello";
let reversed = "";

for (let i = str1.length - 1; i >= 0; i--) {
  reversed += str1[i];
}

console.log(reversed); // "olleh"

// Task 7: Find Day of Birth
function findDayOfBirth(year, month, date) {
  const dob = new Date(year, month - 1, date);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `You were born on ${days[dob.getDay()]}`;
}
console.log(findDayOfBirth(2001, 4, 27)); // "You were born on Friday"

//Task 8: Live Digital Clock
function showClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  console.log(`${hours}:${minutes}:${seconds}`);
}
setInterval(showClock, 1000);

//Task 9: Date Difference Calculator
let date1 = new Date("2026-03-01");
let date2 = new Date("2026-03-26");

let diff = date2 - date1;

let diffDays = diff / (1000 * 60 * 60 * 24);

console.log(diffDays); // 25

//Task 10: Character Frequency Counter
let str2 = "javascript";

let freq = {};

for (let char of str2) {
  if (freq[char]) {
    freq[char] += 1;
  } else {
    freq[char] = 1;
  }
}
console.log(freq);
// Output: { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
