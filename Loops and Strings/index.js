console.log("👉🏼 Loops and Strings");

// Loops

// for Loop
console.log("\n***************************************************************\n");

console.log("👉🏼 for Loop \n");

let number = 5;
for (let loop = 1; loop <= 10; loop++) {
   console.log(number, "*", loop, "=", number * loop);
}


// Infinite Loop : A loop which never ends
console.log("\n***************************************************************\n");

console.log("👉🏼 Infinite Loop \n");

/*
for (let i = 1; i >= 0; i++) {
   console.log("Loop Number :",i);
}
*/



// While Loop
console.log("\n***************************************************************\n");

console.log("👉🏼 While Loop \n");

let i = 1;
while (i <= 10) {
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
} while (ii <= 10);



// for-of Loop : Help to put loops on strings and arrays
console.log("\n***************************************************************\n");

console.log("👉🏼 For-Of Loop \n");

let name = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let value = 65;
for (let i of name) { // This will split the name into character
   console.log(i, "In ASCII is ", value);
   value++;
}



// for-in Loop : Help to get Object keys and works on objects and arrays
console.log("\n***************************************************************\n");

console.log("👉🏼 For-In Loop \n");

let student = {
   name: "John",
   age: 20,
   city: "New York",
   isPass: true
};

for (let i in student) {
   console.log("key =", i, "value =", student[i]);
}


/*

Practice Question 1

console.log("\n***************************************************************\n");

console.log("👉🏼 Practice Question-1 : Print Even Number upto 100 \n");


for (let i = 1; i <= 100; i++) {
   if (i % 2 === 0) {
      console.log("num =", i);
   }
   else { }
}

*/


/*
Practice Question 2

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


// Strings are Immutable in JS

// Create String
console.log("\n***************************************************************\n");

console.log("👉🏼 Create String \n");

let str = "Saad Shaikh";

console.log("String is", str);


// String Length
console.log("\n***************************************************************\n");

console.log("👉🏼 String Length \n");

console.log("Length of", str, "is", str.length);



// String Indices or Index
console.log("\n***************************************************************\n");

console.log("👉🏼 String Indices or Index \n");

console.log(str[3], "is at 4 index in ", str);



// Template Literals
console.log("\n***************************************************************\n");

console.log("👉🏼 Template Literals \n");

let specialString = `Template Literals`
console.log("This is String is Made by using ` `", specialString);



// String Methods
console.log("\n***************************************************************\n");

console.log("👉🏼String Methods \n");

console.log(str, "in UpperCase ", str.toUpperCase());
console.log(str, "in LowerCase ", str.toLowerCase());
console.log(str, "in trim ", str.trim()); //removes whitespace from start and end
console.log(str, "in slice ", str.slice(0, 4));

console.log("1st str is", str, "& 2nd str is ", specialString, "& Concat is", str.concat(specialString));

// Replace String
console.log(str, "Replaced str is =", str.replace("Saad", "Name"));
console.log(str, "Replaced str is =", str.replaceAll("a", "A")); // To Replace All

console.log(str, "Character at", str.charAt(7));



/* 

Practice Question 3

console.log("\n***************************************************************\n");

console.log("👉🏼 Practice Question-3 :Generate a username from users input \n");

let fullName = prompt("Please enter username");
let randomNumber = Math.floor(Math.random() * 100);
let username = `@${fullName.trim()}${randomNumber}`;

alert("Your username is: " + username);
*/