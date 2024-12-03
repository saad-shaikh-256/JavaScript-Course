console.log("👉🏼 Loops and Strings");

// Loops

// for Loop
console.log("\n***************************************************************\n");

console.log("👉🏼 for Loop \n");

let number = 7;
for (let loop = 1; loop <= 10; loop++) {
   console.log(number, "*", loop, "=", number * loop);
}

// Infinite Loop : A loop which never ends
console.log("\n***************************************************************\n");

console.log("👉🏼 Infinite Loop \n");

/*
Uncomment this to see the infinite loop in action.
Use Ctrl+C to stop the loop in the console.
for (let i = 1; i >= 0; i++) {
   console.log("Loop Number :", i);
}
*/


// While Loop
console.log("\n***************************************************************\n");

console.log("👉🏼 While Loop \n");

let i = 1;
while (i <= 5) {
   console.log("Loop Number :", i);
   i++;
}

// do-while Loop
console.log("\n***************************************************************\n");

console.log("👉🏼 Do-While Loop \n");

let ii = 1;

do {
   console.log("Loop Number :", ii);
   ii++;
} while (ii <= 5);


// for-of Loop : Helps to loop through strings and arrays
console.log("\n***************************************************************\n");

console.log("👉🏼 For-Of Loop \n");

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let asciiValue = 65;
for (let char of alphabet) { // This will split the string into characters
   console.log(char, "In ASCII is", asciiValue);
   asciiValue++;
}


// for-in Loop : Helps to get Object keys and works with objects and arrays
console.log("\n***************************************************************\n");

console.log("👉🏼 For-In Loop \n");

let student = {
   name: "Alice",
   age: 22,
   city: "Los Angeles",
   isPass: true
};

for (let key in student) {
   console.log("Key =", key, "Value =", student[key]);
}

/* Practice Question 1: Print Even Numbers up to 100

console.log("\n***************************************************************\n");

console.log("👉🏼 Practice Question-1 : Print Even Numbers up to 100 \n");

for (let i = 1; i <= 100; i++) {
   if (i % 2 === 0) {
      console.log("Even number:", i);
   }
} */


/* Practice Question 2: Guess the Number

console.log("\n***************************************************************\n");

console.log("👉🏼 Practice Question-2 : Guess the number \n");

alert("Guess the number Game between 1 to 10")
let userNumber = prompt("Please enter");
let gameNumber = 7;

while (userNumber != gameNumber) { 
   userNumber = prompt("You guessed the wrong number.Guess again");
}

alert("Congratulations! You guessed the correct number.");

*/


// Strings are Immutable in JavaScript

// Create String
console.log("\n***************************************************************\n");

console.log("👉🏼 Create String \n");

let str = "John Doe";

console.log("String is:", str);


// String Length
console.log("\n***************************************************************\n");

console.log("👉🏼 String Length \n");

console.log("Length of", str, "is", str.length);


// String Indices or Index
console.log("\n***************************************************************\n");

console.log("👉🏼 String Indices or Index \n");

console.log(str[3], "is at index 3 in", str);


// Template Literals
console.log("\n***************************************************************\n");

console.log("👉🏼 Template Literals \n");

let specialString = `Template Literals`;
console.log("This is a string created using template literals:", specialString);


// String Methods
console.log("\n***************************************************************\n");

console.log("👉🏼 String Methods \n");

console.log(str, "in UpperCase:", str.toUpperCase());
console.log(str, "in LowerCase:", str.toLowerCase());
console.log(str, "trimmed:", str.trim()); // Removes whitespace from start and end
console.log(str, "sliced (first 4 chars):", str.slice(0, 4));

console.log("1st string:", str, "& 2nd string:", specialString, "& Concatenated:", str.concat(specialString));

// Replace String
console.log(str, "Replaced string (John to Name):", str.replace("John", "Name"));
console.log(str, "Replaced string (all 'o' with 'O'):", str.replaceAll("o", "O")); // Replace all occurrences

console.log(str, "Character at index 5:", str.charAt(5));

/* Practice Question 3

console.log("\n***************************************************************\n");

console.log("👉🏼 Practice Question-3 :Generate a username from users input \n");

let fullName = prompt("Please enter username");
let randomNumber = Math.floor(Math.random() * 100);
let username = `@${fullName.trim()}${randomNumber}`;

alert("Your username is: " + username); */