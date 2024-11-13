console.log("👉🏼 Variable and Data Types");

// Variables and Data Types


// Data Types 

// To Declare String Value
string = "Saad Shaikh";
console.log(string);


// To Declare Number Value
number = 21;
console.log(number);


// To Declare Boolean Value
boolean = true;
console.log(boolean);


// To Declare Null Value
Null = null;
console.log(Null);


// To Declare Undefined Value
Undefined = undefined;
console.log(Undefined);


// To Declare Objects
object = {
   name: "Saad",
   age: 21
};
console.log(object);


// To Declare Array
array = ["Reading", "Traveling", "Coding"];
console.log(array);


// To Check Type of Variables
console.log(
   "Type of string:", typeof string,
   "\nType of number:", typeof number,
   "\nType of boolean:", typeof boolean,
   "\nType of Null:", typeof Null,
   "\nType of Undefined:", typeof Undefined,
   "\nType of object:", typeof object,
   "\nType of array:", typeof array
);



// Variables

// Variable in ( var ) can be re-declared & updated. A global Scope Variable
var age = 30;  // Declared with var
var age = 35;  // Redeclared
console.log(age);

// Variable in ( let ) cannot be re-declared but can be updated. A block Scope Variable

let name = "John";
name = "Jane";
console.log(name);

// Variable in ( const ) cannot be re-declared or updated. A block Scope Variable

const country = "USA";
console.log(country);


// Practice Question 1

const card = {
   title: "Product Name",
   rating: 5,
   offer: 5,
   price: 250,
   dealOfTheDay: true
}

console.log(card);

// Practice Question 2

const InstaCard = {
   title: "Saad Shaikh",
   follow: true,
   message: "Message",
   post: 195,
   follower: 555,
   following: 45,
   username: "Shaikh Saad",
   thread: "threadName",
   creator: false,
   caption: "lorem ipsum dolor sit amet, consectetur adipiscing"
}
console.log(InstaCard);