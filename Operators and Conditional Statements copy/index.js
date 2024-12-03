console.log("👉🏼 Operators and Conditional Statements");

// Operators

// Arithmetic Operators
console.log("\n****************************************************************\n");

console.log("👉🏼 Arithmetic Operators");

let num1 = 10;
let num2 = 3;

console.log("Num1 is :", num1, "&", "Num2 is :", num2);
console.log("Addition :", num1 + num2);
console.log("Subtraction :", num1 - num2);
console.log("Multiplication :", num1 * num2);
console.log("Division :", num1 / num2);
console.log("Modulus (Remainder) :", num1 % num2); // Modulus means the remainder of the division
console.log("Exponentiation :", num1 ** num2); // 10^3


// Unary Operators
console.log("\n****************************************************************\n");

console.log("👉🏼 Unary Operators");

// 1. Increment which is ++
// 2. Decrement which is --

let num3 = 7;
let num4 = 4;

console.log("Num3 is :", num3, "&", "Num4 is :", num4);

num3++; // Increment
console.log("Incremented Num3 :", num3);

num4--; // Decrement
console.log("Decremented Num4 :", num4);


// Assignment Operators
console.log("\n****************************************************************\n");

console.log("👉🏼 Assignment Operators");

let num5 = 9;
let num6 = 6;

console.log("Num5 is :", num5, "&", "Num6 is :", num6);

num5 += num6; // num5 = num5 + num6
console.log("Num5 after += :", num5);

num5 -= num6; // num5 = num5 - num6
console.log("Num5 after -= :", num5);

num5 *= num6; // num5 = num5 * num6
console.log("Num5 after *= :", num5);

num5 /= num6; // num5 = num5 / num6
console.log("Num5 after /= :", num5);

num5 %= num6; // num5 = num5 % num6
console.log("Num5 after %= :", num5);

num5 **= num6; // num5 = num5 ** num6
console.log("Num5 after **= :", num5);


// Comparison Operators
console.log("\n****************************************************************\n");

console.log("👉🏼 Comparison Operators");

let num7 = 15;
let num8 = "15"; // Javascript Will Convert this into a number to compare

console.log("Num7 is :", num7, "&", "Num8 is :", num8);

console.log("15 == '15' :", num7 == num8); // Loose equality comparison (checks value only)

console.log("15 === '15' :", num7 === num8); // Strict equality comparison (checks both value and type)

console.log("15 != '15' :", num7 != num8); // Loose inequality comparison

console.log("15 !== '15' :", num7 !== num8); // Strict inequality comparison

console.log("15 > '10' :", num7 > num8);

console.log("15 < '20' :", num7 < num8);

console.log("15 >= '15' :", num7 >= num8);

console.log("15 <= '20' :", num7 <= num8);


// Logical Operators
console.log("\n****************************************************************\n");

console.log("👉🏼 Logical Operators");

let a = 10;
let b = 5;

console.log("a === 5 && a > b :", a === 5 && a > b); // AND operator (both conditions must be true)

console.log("a === 5 || a > b :", a === 5 || a > b); // OR operator (either condition must be true)

console.log("!(a > b) :", !(a > b)); // NOT operator (reverses the condition)


//// Conditional Statements

// if Statement
console.log("\n****************************************************************\n");

console.log("👉🏼 if Statement");

let age = 20;

console.log("Age:", age);

if (age >= 18) {
   console.log("You are eligible to vote");
} else {
   console.log("You are not eligible to vote");
}

// if-else Statement
console.log("\n****************************************************************\n");

console.log("👉🏼 if-else Statement");

let number = 57;

console.log("Number:", number);

if (number % 2 === 0) {
   console.log(number, "is Even");
} else {
   console.log(number, "is Odd");
}


// else-if Statement
console.log("\n****************************************************************\n");

console.log("👉🏼 else-if Statement");

let greeting = "Good Evening";

console.log("Greeting:", greeting);

if (greeting === "Good Morning") {
   console.log("Good Morning");
}
else if (greeting === "Good Evening") {
   console.log("Good Evening");
}
else {
   console.log("Unknown Greeting");
}


// Ternary Operators
console.log("\n****************************************************************\n");

console.log("👉🏼 Ternary Operators");

let timeOfDay = "Morning";
console.log("Time of day:", timeOfDay);

timeOfDay === "Morning" ? console.log("Good Morning!") : console.log("Good Evening!");


// Switch Case
console.log("\n****************************************************************\n");

console.log("👉🏼 Switch Case");

let season = "Winter";

console.log("Season:", season);

switch (season) {
   case "Spring":
      console.log("It's Spring, time for new beginnings!");
      break;
   case "Summer":
      console.log("It's Summer, enjoy the sunshine!");
      break;
   case "Fall":
      console.log("It's Fall, the season of harvest!");
      break;
   case "Winter":
      console.log("It's Winter, time to cozy up!");
      break;
   default:
      console.log("Unknown season");
}


/* Practice Question 1: Check if number is multiple of 5
let userNum = prompt("Enter Number for Question 1"); // Replace this with a dynamic prompt if required

if (userNum % 5 === 0) {
   console.log(userNum + " is a multiple of 5");
} else {
   console.log(userNum + " is not a multiple of 5");
}
*/


/* Practice Question 2: Grade Based on Marks
let score = prompt("Enter Number for Question 2"); // Replace this with a dynamic prompt if required

if (score >= 90 && score <= 100) {
   console.log("You got an A");
} else if (score >= 70 && score < 89) {
   console.log("You got a B");
} else if (score >= 60 && score < 69) {
   console.log("You got a C");
} else if (score >= 50 && score < 59) {
   console.log("You got a D");
} else if (score >= 0 && score < 49) {
   console.log("You got an F");
} else {
   console.log("Invalid Input");
}
*/