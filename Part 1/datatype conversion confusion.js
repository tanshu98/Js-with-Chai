// let score = 123;
// let score = '123abc';
// console.log(typeof score); // string
// console.log(typeof (score)); // string

// If u wanna convert string to a number we use Number method

// let scoreNumber = Number(score);
// console.log(scoreNumber); //NaN
// console.log(typeof (scoreNumber)); // number


// let score2 = null;
// console.log(typeof score2); // object
// console.log(typeof (score2)); // object

// // If u wanna convert string to a number we use Number method

// let scoreNumber2 = Number(score2);
// console.log(scoreNumber2); //0
// console.log(typeof (scoreNumber2)); // number

// let score3 = undefined;
// console.log(typeof score3); // undefined
// console.log(typeof (score3)); // undefined

// // If u wanna convert string to a number we use Number method

// let scoreNumber3 = Number(score3);
// console.log(scoreNumber3); //NaN
// console.log(typeof (scoreNumber3)); // number

// let score = true;
// console.log(typeof score); // boolean
// console.log(typeof (score)); // boolean

// // If u wanna convert string to a number we use Number method

// let scoreNumber = Number(score);
// console.log(scoreNumber); //1
// console.log(typeof (scoreNumber)); // number


// Boolean conversions

// let isLoggedInn = 'dsfs';
// let booleanIsLoggedIn = Boolean(isLoggedInn);
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

// true =>1 and false=> 0
// '' => false, 'tanshu' => true


// Number to String Conversions

// let val = 123;
// let valStr = String(val);
// console.log(valStr); //123
// console.log(typeof valStr); // string


// /***********************OPERATIONS********************* */


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); // 2 raised to the power 2
// console.log(2**3); // 2 raised to the power 3
// console.log(2/2);
// console.log(2%2); // modulo operator for reminder 


// const str1 = 'Hello';
// const str2 = ' Tanshu';
// const str3 = str1 + str2;
// console.log(str3);

// console.log('1' + 2);
// console.log(1 + '2');
// console.log('1' + 2 +  3);
// console.log(1 + 2 + '3');

// Note: If string is in 1st everything is converted into string and vice versa

// Study about Prefix and Postfix operators!

// Comparisions in Js

// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);


// console.log('2' >1); // js will convert this string to number // true
// console.log('02'>1); // true
// Due to this..js doesnt give us the ans which we expect..SO thats why during conversions and all..typescript is preferred..
// Typescript yeh sabh chutiapye krne nahi deta hain
// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true
// The reason is that equality check and conparisions work differently
// Comparisions convert null to a number treating it as 0

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
// Undefined will always return a false value

// ===  => strict comparision

// console.log('2' === 2); // false


// Datatypes Summary

// There are 2 types of Datatypes in Js
// Primitive and Non-Primitive
// These 2 datatypes are catagorized based on how we can access them..and how we can store them in the memory

// Primitive - String, Number , Boolean, null, undefined, Symbol, BigInt
// Yeh datatypes ki values aapko copy k form main milengi..orignal nahi :)

// Boolean - True , False
// Null - Empty Value (it is not 0 or empty string..its just empty);
// Undefined - U have declared a variable..but there's no value stored in it..So if u log in the variable in console..it will come as undefined
// Symbol -> It is used to make any component unique..(More so used in react)
// BigInit -> Big number Values

// Reference Type (Non Primitive DataType) ->
// Yeh datatypes ki values aapko memory k thorugh direct allocate kiya jaata hain..Orignal Values

// Array, Objects, Functions

// Also note: Js is Dynamically types language

const score = 100; // Number
const scoreValue = 103.3; // Number

const isLoggedIn = true;
const outsideTemp = null;
let userEmail; // undefined

const id = Symbol('123');
const uniqueId = Symbol('123');

// Note - Symbol always has unique values..

console.log(id === uniqueId); // op - Not equal!

// BigInt - 
const bigNumber = 1234567834567834567892345678n // last m we write n for rep bigInt datatype
console.log(typeof bigNumber);


// *************************************************************


// ! Memory in Javascript - 


let name = 'Tanshu';
let anotherName = name;
console.log(anotherName); // Tanshu

anotherName = 'Allewar';
console.log(anotherName); // Allewar
console.log(name); // Tanshu


const userOne = {
    userName: 'Akshay',
    email: 'akshay@google.com'
}

const userTwo = userOne;
console.log(userTwo);

userTwo.email = 'tanshu@google.com';

console.log(userTwo.email, userOne.email); // tanshu@google.com , tanshu@google.com