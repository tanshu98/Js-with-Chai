// This keyword tells us about the current context.

const user = {
    username: 'tanshu',
    id: 123,

    welcomeUser: function() {
        console.log(`${this.username} , Welcome to the Website!`);
        console.log(this);
    }
};
// user.welcomeUser(); // tanshu , Welcome to the Website!

// Now..whenever u have to refer to current context i.e variables inside this user object.. we have username..id etc..

// SO basically user object k scope k andar jitne bhi varialbes hain..unko access krne k liye..we use this keyword!!

// Now suppose someone changes current context..

// user.username = 'sam';
// user.welcomeUser(); // sam , Welcome to the Website!

// console.log(this); // {}

// Here..we are inside the node env..hence this refers to an empty object..since there's no context inside the global..


// Browser k andar jo global object hain woh hain window object


function chai() {
    console.log(this);  
    let username = 'ash';
    console.log(this.username); // undefined
}

chai();

// When we declare a this keyword inside a function..then it has a lots and lots of things! (line 33);
// When u try to access a property using this keyword inside a function, it returns undefined!


// Arrow Function - 

const chai1 = ()=> {
    const username1 = 'tqans';
    // console.log(`${this.username1} Welcome!`);// undefined
    console.log(this); // {}
}

chai1();


// Basic Arrow Function - 
const addTwo = (num1, num2)=> {
    return num1 + num2;
}

console.log(addTwo(3,5));


// Imlicit Return - 
// const addTwo1 = (num1, num2)=>  num1 + num2; 
// const addTwo2 = (num1, num2)=>  (num1 + num2); // Another way to write the same thing!! (This will be most commonly used in React!)

// If we are using curly braces in a function..we have to write return keyword..else we can skip it!!

// Now if u wanna return object..then
// const addTwo1 = (num1, num2)=>  {username: 'tanshu'}; 
// console.log(addTwo1()); // undefined!


// To make this work..we wrap object inside a parathesis!!!!

const addTwo1 = (num1, num2)=>  ({username: 'tanshu'}); 

console.log(addTwo1()); // { username: 'tanshu' }


// Immediately Invoked Function Expression (IIFE) :->

// An IIFE (Immediately Invoked Function Expression) is a function that runs the moment it is invoked or called in the JavaScript event loop.

// Having a function that behaves that way can be useful in certain situations.IIFEs prevent pollution of the global JS scope.

(function sum () { // Named IFFE
    console.log(`IFFE Function!`);
})();

// Note..after the end of function we have to apply semi-colon to stop the function context..The function actually doesnt know when to stop 🤣

// i.e ()() 

// Global scope k pollution se problem hoti hain kahi baar..so jo bhi global scoped main declared variable vgre hain..unke pollution se bachne k liye humne IFFE ka use kiya 

(()=> {
    console.log(`IFFE FUNCTION 2 `);
})(); // Semi-colon is compulsary here!!

// Arrow Function with IFFE Function!!
// Now in this arow function we can also pass the arguments same as normal function!!

((name)=> {
    console.log(`IFFE FUNCTION 3 ${name} `);
})('Tanshu');


console.log(this);
// Generate random nos between 50 and 60;

const randomNos = Math.floor(Math.random() * (60-50 + 1) + 50);
console.log(randomNos);
