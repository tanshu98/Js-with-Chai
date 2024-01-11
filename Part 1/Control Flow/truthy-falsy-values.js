// When js assumes on its own..whether a value is truthy or falsy value in evaluation..!

// const userEmail = 'tanshu@google.com';
// const userEmail = ''; // Empty String
const userEmail = []; // Empty String

if(userEmail) {
    console.log('Got User email');
} else {
    console.log('Didnt get email');
}

// Here..you can see..eventhough we havnt compared the email..with any value..since there;s some value..it is assumed..that..the value is a truthy value..
// Similarly when its an empty string..its assumed that its a falsy value

// Falsy Values - 
// false, 0, -0, "", BigInt 0n, null, undefined, NaN 

// truthy values - 
true, '0', 'false', ' ', [], {}, function() {};

// How do we compare an empty array?

if(userEmail.length === 0) {
    console.log('User Email is empty!');
}

// How do we compare an empty object?

const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log('Your Object is empty!');
}
// Note: Object.keys(emptyObj) will return an array..hence we are compare its array length and checking if its empty or not

// Also imp things!!

false == 0; // true
false == ''; // true
0 == ''; // true 

// Nullish Coalescing Operator (??) - null , undefined


// This operator is made to handle cases of undefined and null..
// So when we get null or undefined..it will run another value or method
let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 24; // 24
// val1 = undefined ?? 56;
val1 = null ?? 10 ?? 34; // 10
console.log(val1);


// Ternary Opeator
// condition ? true : false
const iceCreamPrice = 100;
iceCreamPrice <=80 ? console.log('Price is less then 80'): console.log('Price is more then 80');