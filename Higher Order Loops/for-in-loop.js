// Interating through Objects!!

const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    py: 'python'
}

for (const key in myObj) {
    // console.log(key); // Prints the keys of the object!
    // console.log(myObj[key]); // Print the key's value of the object
    // console.log(`Shortcut for ${myObj[key]} is ${key}`);
}

// Arrays iteration using for-in-loop: 

let programming = ['c++', 'js', 'c', 'java'];

for (const key in programming) {
    // console.log(key); // nos are getting printed! i.e index values get printed
    // console.log(programming[key]); // value[index];
}

// So in for-in Loop....Directly keys are getting printed!
// And if u want values.. object[keys] / array[keys];

// Lets try for-in Loop in Maps!

const map = new Map() // This is also an object!
console.log(typeof map); // object
map.set('IN', 'India');
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('FR', 'France');

for (const k in map) {
    console.log(k);
}
// console.log(map);

// So basically Maps are not interable..and Hence you cant interate them using for-in-loop
// There are ways to iterate over maps..we will see them later!!


// Objects -> for-in-loop
// Arrays => for-of-loop
