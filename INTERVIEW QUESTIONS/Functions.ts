
// Activity 1: Function Declaration:

// Task 1: WAP to check if a number is even or odd

function checkEvenOdd(n: number) {
 return n%2 ===0 ? "Its an Even Number" :"Its an Odd Number" ;
}

console.log(checkEvenOdd(2345));

function squareOfNos(num:number) {
    return num**2;
}

console.log(squareOfNos(10));

// Activity 2: Function Expression:

// Task 3: WAP to find Max of Two nos

const maxNumber = function(n1:number,n2:number){
    return n1>n2 ? `${n1} is greater than ${n2}` : `${n2} is greater than ${n1}`
}

console.log(maxNumber(3,4));

// Task 4: WAP to concatenate two strings and return the result

const concatenateTwoStrings = function(str1:string, str2:string) {
    return str1 + str2;
}

console.log(concatenateTwoStrings('Tanshu', 'Allewar'));

// Activity 3: Arrow Functions:

// Task 5: WAP using Arrow Functions to calculate the sum of 2 nos

const sumOfNos = (n1:number,n2:number)=> {
    return n1+n2;
}

console.log(sumOfNos(3,4));


// Task 6: WAP to check if the string cotains specific charactor and return a boolean value;

// Multiple ways to do this..



const characterCheck = (str:string)=> {
    const char = "o";

    // // includes - 
    // if(str.includes(char)) { // returns true or false..
    //     console.log(`The charactor ${char} is present in the string`);
    // } else {
    //     console.log(`The charactor "${char}" is not present in the string`);
    // }

    // indexOf - 
    if(str.indexOf(char) !==-1) {
       console.log(`The charactor ${char} is present in the string`);
    } else {
            console.log(`The charactor "${char}" is not present in the string`);
        }
}

characterCheck('tanshuo')

// Using regular expression - 

const regularExpCharCheck = (str:string)=> {
    const char = 'i';
    const regEx = new RegExp(char);

    if(regEx.test(str)) {
       console.log(`The charactor ${char} is present in the string`);
    } else {
        console.log(`The charactor "${char}" is not present in the string`);
    }
}

regularExpCharCheck('punei')

// Higher Order Functions - 

// Higher-order functions in JavaScript are functions that can take other functions as arguments, return a function, or both. 

// Eg - 

const greet = (greetingName:string)=> {
    return `Hello ${greetingName}`;
}

const displayGreeting = (greetFunction:Function, personName:string)=> {
    return greetFunction(personName);
}

console.log(displayGreeting(greet, "Nishant"));


// Task 9: Write a Higher Order Function that takes a function and a number and calls that function that many number of times..

const normalFunction = ()=> {
    return 'Something';
}

const hocFunc = (normalFunction:Function, num:number)=> {
    for(let i=1; i<=num; i++) {
       console.log(normalFunction());
    }
}

(hocFunc(normalFunction, 5));


// Task 10: Write a HOF that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

const newHOC = (f1:any,f2:any,value:any)=> {
    console.log(func1(12),func2(20),value);
    
}

const func1 = (value:any)=> {
    return value;
}

const func2 = (result:any)=> {
    return result;
}

newHOC(35,40,45);