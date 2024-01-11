// Node scope and windows wala scope is different!

var a =30;
let b = 45;
const c = 50;

{
    var a = 98;
    let b = 56;
    const c = 87; 
}

console.log(a); // 98 -> So this is a pblm 
console.log(b);
console.log(c);

// So whatever is inside the brackets that beocmes part of blocked scope
// Now the data which we store inside the blocked scope cannot be accessible outside this blocked scope..Unfortunalty var keyword fails in this ascpect..

// Nested Scope

function one() {
    const username = 'tanshu';

    function two() {
        const website = 'youtube';
        console.log(username);
    }
    // console.log(website); // error
    two();
}

one();

// Note: Function two can access the username from function one since..function one is global scope for function two..
// But..function one cant access website from function two..its just not allowed!

// Hence in Nested functions..the child functions can access the parent functions

// Scopes in if-else  ->

if(true) {
    const username = 'Allewar';
    if(username === 'Allewar') {
        const website = ' facebook';
        console.log(username+  website);
    }
    // console.log(website); // error
}
// console.log(username); // error..since variable is called outside of the scope.


// Functions And Its Types - 

function addOne(num) {
    return num + 1
}

addOne(5);


const addTwo = function(num) { 
    return num + 2;
}

addTwo(5);

 // This is called as Function Expression..Since we are declaring function using a variable
//  Note..u cant access funciton Expression before intialising..u have to intialize first and then u can execute the funciton..

// In normal funcitons..there's no such compulsion..u can execute the function even before declaration(order wise)!

