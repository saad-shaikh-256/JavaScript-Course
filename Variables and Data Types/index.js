console.log("👉🏼 Variable and Data Types");

// Variables and Data Types

// Data Types 

// To Declare String Value
let name = "John Doe";
console.log(name);

// To Declare Number Value
let age = 28;
console.log(age);

// To Declare Boolean Value
let isActive = true;
console.log(isActive);

// To Declare Null Value
let emptyValue = null;
console.log(emptyValue);

// To Declare Undefined Value
let notAssigned;
console.log(notAssigned);

// To Declare Objects
let person = {
   name: "John Doe",
   age: 28,
   occupation: "Software Developer"
};
console.log(person);

// To Declare Array
let hobbies = ["Reading", "Cycling", "Gaming"];
console.log(hobbies);

// To Check Type of Variables
console.log(
   "Type of name:", typeof name,
   "\nType of age:", typeof age,
   "\nType of isActive:", typeof isActive,
   "\nType of emptyValue:", typeof emptyValue,
   "\nType of notAssigned:", typeof notAssigned,
   "\nType of person:", typeof person,
   "\nType of hobbies:", typeof hobbies
);

// Variables

// Variable in (var) can be re-declared & updated. A global Scope Variable
var city = "New York";  // Declared with var
var city = "Los Angeles";  // Redeclared
console.log(city);

// Variable in (let) cannot be re-declared but can be updated. A block Scope Variable
let country = "Canada";
country = "Australia";
console.log(country);

// Variable in (const) cannot be re-declared or updated. A block Scope Variable
const continent = "Europe";
console.log(continent);

/* Practice Question 1: Product Card

const productCard = {
   title: "Smartphone",
   rating: 4.5,
   offer: 20,
   price: 699,
   dealOfTheDay: true
};

console.log(productCard); */

/* Practice Question 2: Instagram Profile Card

const instaProfile = {
   title: "John Doe",
   follow: true,
   message: "Hey, check out my latest post!",
   post: 350,
   followers: 1200,
   following: 150,
   username: "john_doe_28",
   thread: "Tech Enthusiasts",
   creator: true,
   caption: "Exploring new technologies and innovations."
};

console.log(instaProfile); */