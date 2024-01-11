function myFunction() {
    console.log('hello world!');
}

// myFunction -> Function Reference
// myFunction() -> Function Execution

// Function to add two nos

function addTwoNos(number1, number2) { // Paramters
    // console.log(number1 + number2);
    // return number1 + number2;
}

console.log('REsult:',addTwoNos(3,4)); // Arguments  -> Here..we will get console log as undefined..bcoz we are not returning anything!

function subTwoNos(number1, number2) { // Paramters
    return number1 - number2;
}

console.log('sub result: ',subTwoNos(4,2));

function userLoggedIn(username) {
    return `${username} has logged in!`
}

console.log(userLoggedIn('tanshu'));
console.log(userLoggedIn()); // undefined has logged in!
// Whenver..u dont pass an argument in a function..the function returns undefined!

// How to pass mutiple paramters in a funciton - 

// Many a times.we dont know..how many paramters or arguments are needed..in a function.
// So to fix this pblm..we use Rest Paramter
// Rest Paramter - The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

function calCartPrice(...num1) {
    return num1;
}

console.log(calCartPrice(2000,4555,3224,345345));

// So basically rest Paramter..packgaes..n no of arguments into an array..
// SO whatever arguments user passes into the funciton those are displayed as arrays!

function calCartPrice1(val1,val2,...num1) {
    return num1;
}

console.log(calCartPrice1(2000,4555,3224,345345)); // here val1 = 1value i.e 2000, val2 = 2nd value i.e 4555 and num1 = has rest of the values inside it in the form of array!!

// Lets use objects as paramters for a function!!

const user = {
    name: 'tanshu',
    price: 45
};

function handleObj(anyObj) {
    console.log(`Username is ${anyObj.name} and price is ${anyObj.price}`);
}

// handleObj(user);

// Its not neccessary to pass the obj by creating a new object seperately..
// wE can direclty pass it like this also..

handleObj({
    name: 'Sam Wilson',
    price: 199
});

// In the above obj we have performed destructring and directly passed the object props as arguments in a function

// Similarly,,we can pass arrays also!!

const myNewArray = [123,345,567];

function returnSecondValue(getArray) {
    return getArray[1];
};

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 545]));