function mutiplyBy5(num) {
    return num*5;
};

// I have added a property in this funciton just like we do in an object.
mutiplyBy5.power = 2;  // Behaving like object

console.log(mutiplyBy5(5)); //25
console.log(mutiplyBy5.power); //2
console.log(mutiplyBy5.prototype); // {}

// Conclusion - 

// JavaScript main haar ek chizz basically ek object hi hain..
// Function , is also a Function..It is also an Object
// Funciton ko hum normal funciton k tarah bhi use krr sakte hian..and chahe to ek object k tarah bhi 


// Understanding more on "this keyword" --

// const createUser = (username, score)=> {
//     // This sets the current context
//     this.username = username ;
//     this.score = score;

//    
// }

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

 // Now yeh kind of ek object ch create krte..so aapn ithe properties pan add krru shakto..okk


createUser.prototype.increment = function() {
    score++;
}

// So now we have created a increment funciton.

const chai = new createUser("chai",25);
const tea = new createUser("tea", 40);

// Now the thing is, we have created this increment funciton, abhi haan funciton aapn kontya yala reference krrnar..right..
// Ikde both chai and tea ahe..but aapn reference kasa krna right..he tr bakchodi ch zhali..right..?

// He fix karyla..aapn function madhe this keyword ch use krto..okk

// createUser.prototype.increment = function() {
//     this.score++; // jis bande ne increment funciton ko call kiya..uska value increment krro..
// }

// We can create another funciton if we want..

createUser.prototype.printMe = function() {
    console.log(`Your score is - ${this.score}`); // toh issme bhi..aapn reference krnege..using this keyword..so, jo pan function reference krel..tyachi value print hoil..
    // So jisne bhi score pucha..uska score print krr do 🤩
}


// Now..

// Generally, when we declare an array..and call a method..

// myArray.prototype.map() // this thing happens behined the scenes..
// Js mante ki bhai..yeh prototype wali bakchodi me handle krto..tu normal methods call krr..

chai.printMe();

// /Users/ext-hyd-lap-0093/Desktop/Tanshu/My Projects/Js-with-Chai/Part 5/OOPS CONCEPT/magic of Protytpe.js:49
// createUser.prototype.printMe = function() {
//                              ^

// TypeError: Cannot set properties of undefined (setting 'printMe')
//     at Object.<anonymous> (/Users/ext-hyd-lap-0093/Desktop/Tanshu/My Projects/Js-with-Chai/Part 5/OOPS CONCEPT/magic of Protytpe.js:49:30)
//     at Module._compile (node:internal/modules/cjs/loader:1546:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1691:10)
//     at Module.load (node:internal/modules/cjs/loader:1317:3


// Now this error is because..
// const chai = createUser("chai",25); 
// createUser je function ahe..ikde aapn 2 methods ankhi add kel ahot..but we have not mentioned the chai object..ki bc..addional properties humne add krri hain..Yeh hume batana padhta hain..
// Yeh batane ka sara kaam..new keyword krta hain
// Hence, new keyword is used for this..


// PLS NOTE ----

// In JavaScript, when you use the new keyword with a function, that function needs to be a constructor function. Constructor functions should follow these rules:

// They should not be arrow functions:
// Arrow functions do not have their own this, and they do not work as constructors.

// They should use this correctly:
// The function should assign properties to this so that the newly created object holds the values.