console.log("👉🏼 Operators and Conditional Statements");

// Operators

// Arithmetic Operators
console.log("\n****************************************************************\n");

console.log("👉🏼 Arithmetic Operators");

let num1 = 5;
let num2 = 2;

console.log("Num1 is :", num1, "&", "Num2 is :", num2);
console.log("Addition :", num1 + num2, "Thala For A Reason");
console.log("Subtraction :", num1 - num2);
console.log("Multiplication :", num1 * num2);
console.log("Division :", num1 / num2);
console.log("Module :", num1 % num2); // Module means the remainder of the division
console.log("Exponentiation :", num1 ** num2); //5^2


// Unary Operators
console.log("\n****************************************************************\n");

console.log("👉🏼 Unary Operators");

// 1. Increment which is ++
// 2. Decrement which is --

let num3 = 6;
let num4 = 3;

console.log("Num3 is :", num3, "&", "Num4 is :", num4);

num3++; // Increment
console.log("Incremented Num3 :", num3);

num4--; // Decremented
console.log("Decremented Num4 :", num4);


// Assignment Operators
console.log("\n****************************************************************\n");

console.log("👉🏼 Assignment Operators");

let num5 = 7;
let num6 = 4;

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

let num7 = 8;
let num8 = "5"; // Javascript Will Convert this into a number to compare

console.log("Num7 is :", num7, "&", "Num8 is :", num8);

console.log("8 == 5 :", num7 == num8);

console.log("8 === 5 :", num7 === num8); // This comparison operator is will also check datatype

console.log("8 != 5 :", num7 != num8);
console.log("8 !== 5 :", num7 !== num8); // This comparison operator is will also check datatype

console.log("8 > 5 :", num7 > num8);

console.log("8 < 5 :", num7 < num8);

console.log("8 >= 5 :", num7 >= num8);

console.log("8 <= 5 :", num7 <= num8);


// Logical Operators
console.log("\n****************************************************************\n");

console.log("👉🏼 Logical Operators");

let a = 8;
let b = 5;

console.log("cond1 && cond2 :", a === 5 && a > b); // AND operator

console.log("cond1 || cond2 :", a === 5 || a > b); // OR operator

console.log("!(6>5) :", !(6 > 5)); // NOT operator will turn opposite if true than it will display false and visa versa



// Conditional Statements

// if Statement
console.log("\n****************************************************************\n");

console.log("👉🏼 if Statement");

let age = 18;

console.log("Age :", age);

if (age >= 18) {
   console.log("You are eligible to vote");
}
if (age < 17) {
   console.log("You are not eligible to vote");
}

// if-else Statement
console.log("\n****************************************************************\n");

console.log("👉🏼 if-else Statement");

let c = 74;

console.log("Number :", c);

if (c % 2 === 0) {
   console.log(c, "is Even");
} else {
   console.log(c, "is Odd");
}


// else-if Statement
console.log("\n****************************************************************\n");

console.log("👉🏼 else-if Statement");

let d = "Hello World";

console.log("Word :", d);

if (d === "Hello") {
   console.log("Hello");
}
else if (d === "Hello World") {
   console.log("Hello World");
}
else {
   console.log("Invalid Word");
}



// Ternary Operators
console.log("\n****************************************************************\n");

console.log("👉🏼 Ternary Operators");

let Hello = "Hello"
console.log("Word :", Hello);

Hello === "Hello" ? console.log("Hello World") : console.log("Invalid Word"); // Compact IF Else



// Switch Case
console.log("\n****************************************************************\n");

console.log("👉🏼 Switch Case");

let fruit = "Apple";

console.log("fruit :", fruit);

switch (fruit) {
   case "Apple":
      console.log("Apple is a Fruit");
      break;
   case "Banana":
      console.log("Banana is a Fruit");
      break;
   case "Orange":
      console.log("Orange is a Fruit");
      break;
   default:
      console.log("Invalid Fruit");
}

// Practice Question 1

let userNum = prompt("Enter Number");
userNum = parseInt(userNum);

if (userNum % 5 === 0) {
   alert(userNum +" "+ " is a multiple of 5");
}
else {
   alert(userNum + " " + " is not a multiple of 5");
}


// Practice Question 2

let score = prompt("Enter Marks");
score = parseInt(score);

if (score >= 90 && score <= 100) {
   alert("Your got an A");
}

else if (score >= 70 && score < 89) {
   alert("Your got a B");
}

else if (score >= 60 && score < 69) {
   alert("Your got a C");
}
   
else if (score >= 50 && score < 59) {
   alert("Your got a D");
}

else if (score >= 0 && score < 49) {
   alert("Your got a F");
}
else {
   alert("Invalid Input");
}