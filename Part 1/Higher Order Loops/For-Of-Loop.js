// Higher Order Loops - Array Specific Loops

// ["", "", ""];
// [{},{},{}];


// For-of Loop :- 
let arrOfNumbers = [1,2,3,4,5];

for (const num of arrOfNumbers) {
    // console.log(num);
}

// Here we dont have to provide any interator declaration, then increment or decrement..All this is done by for of loop behined the scenes

// We can apply this loop in strings and objects also!

const greetings = 'Hello World!';
for (const greet of greetings) {
    // console.log(greet);
}

// Map - The Map object holds unique key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

// Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration. Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the set() method (that is, there wasn't a key with the same value already in the map when set() was called).

const map = new Map() // This is also an object!
console.log(typeof map); // object
map.set('IN', 'India');
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('FR', 'France');
// console.log(map)c;
// Op - Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'FR' => 'France'
// }

// Note: Maps are known for their unique values..hence..u can see India is not repeated here again!! Also the order is also mainted!

// Interating over Maps - 

for (const key of map) {
    // console.log(key); 
    // Op -  [ 'IN', 'India' ]
    // [ 'USA', 'United States of America' ]        
    // [ 'FR', 'France' ]
}

// In line 42..it has printed the entire map..But since we wont single values..we can apply a trick!!

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
// SO to get the single values what we do is..we do destructuring of Array here..
//  A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration.

// Lets try the same in Objects - 

let gameObj = {
    'game1': 'NFS',
    'game2': 'Spiderman 2'
}

// for (const [key, value] of gameObj) {
    // console.log(key ,':-', value); // gameObj is not iterable
// }