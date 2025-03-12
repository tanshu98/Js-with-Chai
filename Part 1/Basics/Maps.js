// A Map holds key-value pairs where the keys can be any datatype.

// A Map remembers the original insertion order of the keys.


// create a Map

// You can create a Map by passing an Array to the new Map() constructor:

const fruits = new Map([
    ["apples", 500],
    ["grapes", 200],
    ["pinapple", 400]
])

console.log(fruits);

// Create a Map and use Map.set() to add the new elements

const vegetables = new Map();

vegetables.set("ladies finger",600);
vegetables.set("cauliflower", 800);

console.log(vegetables);

// The get() Method
// The get() method gets the value of a key in a Map:

console.log(vegetables.get("cauliflower"));


// Note: Type of returns an object

