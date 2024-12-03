console.log("👉🏼 Arrays");

// Arrays Section

console.log("\n***************************************************************\n");

console.log("👉🏼 Creating Arrays \n");

let name = [
   "Iron Man", "Captain America", "Thor", "Black Widow", "Hawkeye",
   "Spider-Man", "Black Panther", "Doctor Strange", "Ant-Man",
   "Captain Marvel", "Scarlet Witch", "Vision", "Hulk", "Star-Lord", "Rocket Raccoon"
];

let age = [45, 105, 1500, 35, 49, 17, 43, 45, 40, 35, 30, 30, 40, 38, 10];

console.log("Names in Array:", name);
console.log("Ages in Array:", age);

// Array is a type of object.
// Strings are immutable, but Arrays are mutable.

console.log("\n***************************************************************\n");

console.log("👉🏼 Array Indices \n");

console.log("Length of 'name' Array:", name.length);
console.log("Name at 2nd position is:", name[1]);  // Remember, array indices start from 0

// Looping over arrays

console.log("\n***************************************************************\n");

console.log("👉🏼 Looping over Arrays \n");

// Loop using index
console.log("Using index:");
for (let index = 0; index < name.length; index++) {
   console.log("Name:", name[index], "Age:", age[index]);
}

// Loop using for...of (iterating directly over the elements)
console.log("\nUsing 'for...of' loop:");
for (let hero of name) {
   console.log("Name:", hero);
}

// Practice Question 1: Calculating sum and average of marks

console.log("\n***************************************************************\n");

console.log("👉🏼 Practice Question 1 \n");

let arrayMarks = [90, 100, 100, 100, 90];
let sum = 0;

// Calculate sum using a for...of loop
for (let marks of arrayMarks) {
   sum += marks;
}

let avg = sum / arrayMarks.length;

console.log("Sum of Marks:", sum);
console.log("Average Marks:", avg);

// Practice Question 2: Applying discount to price array

console.log("\n***************************************************************\n");

console.log("👉🏼 Practice Question 2 \n");

let price = [100, 200, 300, 400, 500];
console.log("Price Array before discount:", price);

// Apply discount (10% off) to each price
for (let i = 0; i < price.length; i++) {
   let discount = price[i] / 10;  // 10% discount
   price[i] -= discount;          // Subtract discount from the original price
}

console.log("Price Array after applying discount:", price);

// Array Methods

console.log("\n***************************************************************\n");

console.log("👉🏼 Array Methods \n");

// Push() is used to add a new item at the end of an array

console.log("\n***************************************************************\n");

console.log("👉🏼 Push() \n");

let foodItems = ["Pizza", "Burger", "Salad", "Pasta", "Sushi", "Ice Cream", "Apple", "Orange", "Fries", "Tacos"];

console.log("Array before Push():", foodItems);

foodItems.push("Chocolate");

console.log("Array after Push():", foodItems);

// Pop() is used to delete the last item from the array

console.log("\n***************************************************************\n");

console.log("👉🏼 Pop() \n");

console.log("Array before Pop():", foodItems);

foodItems.pop();

console.log("Array after Pop():", foodItems);

// toString() is used to convert an array into a string

console.log("\n***************************************************************\n");

console.log("👉🏼 toString() \n");

console.log(foodItems.toString());

// Concat() is used to join multiple arrays into a single array

console.log("\n***************************************************************\n");

let marvelHeroes = ["Spider-Man", "Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Doctor Strange", "Black Panther", "Ant-Man", "Scarlet Witch", "Vision", "Captain Marvel", "Hawkeye", "Deadpool", "Wolverine", "Silver Surfer", "Luke Cage", "Daredevil", "Jessica Jones", "Star-Lord"];
let dcHeroes = ["Superman", "Batman", "Wonder Woman", "The Flash", "Green Lantern", "Aquaman", "Cyborg", "Green Arrow", "Shazam", "Martian Manhunter", "Hawkman", "Black Canary", "Plastic Man", "Doctor Fate", "Jonah Hex", "Batgirl", "Nightwing", "Red Hood", "Zatanna", "The Atom"];

let concatHeroes = marvelHeroes.concat(dcHeroes);

console.log("Concat of 2 Arrays:", concatHeroes);

// unshift() is used to add an item at the start of the array like push()

console.log("\n***************************************************************\n");

console.log("👉🏼 unshift() \n");

console.log("Array before unshift():", marvelHeroes);

marvelHeroes.unshift("Venom");

console.log("Array after unshift():", marvelHeroes);

// shift() is used to delete the first item from the array like pop()

console.log("\n***************************************************************\n");

console.log("👉🏼 shift() \n");

console.log("Array before shift():", marvelHeroes);

marvelHeroes.shift();

console.log("Array after shift():", marvelHeroes);

// slice() is used to return a portion of the array

console.log("\n***************************************************************\n");

console.log("👉🏼 slice() \n");

console.log("Array using slice():", marvelHeroes.slice(1, 5));

// splice() is used to change the original array (add, remove, and replace elements)

console.log("\n***************************************************************\n");

console.log("👉🏼 splice() \n");

let spliceArray = ["a", "b", "c", "d", "e", "g", "h", "i"];

console.log("splice syntax: splice(index, delCount, newItems)");

console.log("Array before splice():", spliceArray);

spliceArray.splice(2, 4, "newValue1", "newValue2");

console.log("Array after splice():", spliceArray);

/* Practice Question 3: Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

1. Remove the first company from the array
2. Remove Uber & Add Ola in its place
3. Add Amazon at the end
*/

console.log("\n***************************************************************\n");

console.log("👉🏼 Practice Question 3 \n");

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log("Companies Array:", companies, "\n");

companies.shift();
console.log("First Answer:", companies);

companies.splice(1, 1, "Ola");
console.log("Second Answer:", companies);

companies.push("Amazon");
console.log("Third Answer:", companies);
