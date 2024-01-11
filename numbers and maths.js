const num = 400; 
// Here..js is taking this variable as number datatype..(happens behined the scene!)
const newNumber = new Number(500);
// Here..we are explicitly telling js to create a new variable with number object

// Note: THis new keyword..will create a new object of type number!
// console.log(num, newNumber); // 400 [Number: 500]

// Number Methods - 

// console.log(newNumber.toString()); // Converts number to string! typeof -> string

// const newNumber1 = 2345.345;
// console.log(typeof newNumber1.toFixed(2)); // Returns 2 digits after the decimal point{As specified in the argument} // Note: This also converts number to string
// console.log(newNumber1.toPrecision(3)); // 2.35e+3

// const aNumber = 345.234;
// console.log(aNumber.toPrecision(3)); //345
// console.log(aNumber.toPrecision(4)); // 345.2
// console.log(aNumber.toPrecision(5)); // 345.23
// console.log(aNumber.toPrecision(1)); // 3e+2 -> Displayed 1 value and rest it rounded off!

// const hundreds = 10000000;
// console.log(hundreds.toLocaleString()); // 1,00,00,000 -> Returns string seperated by commas..so as to make the number much more readable.. Note: If we dont specify anything in the argument..it will return as US standard..(commas)
// console.log(hundreds.toLocaleString('en-IN'));


// **************************** Maths ***************************
// Maths library is inbuilt in JavaScript

// console.log(Math.abs(-4)); // op-> Will return positive 4
// console.log(Math.abs(4)); // OP-> Will return positive 4 only..
// console.log(Math.round(5.88)); // 6 .. It will round off the value

// If u wanna control..whether round off main upper limit choose hoga..yaa lower limit..then Math k paas aur 2 functions hote hain..

// console.log(Math.ceil(4.777)); // It will round off the no to the top value // 5
// console.log(Math.ceil(3.2)); // 4

// 2nd round method - Math.floor -> Will round off the number to lower limit..

// console.log(Math.floor(3.9));  // 3
// console.log(Math.floor(6.1));

// console.log(Math.min(2,4,5,6,7)); 

//  Mainly we will be using this library for Math.random purposes...i.e to generate random instances

// console.log(Math.random()); // -> Will always return a random no between 0 and 1

// Now if we want the range greater then zero..then..

// console.log(Math.random() * 10); // 8.69...
// SInce values since between 0 and 1..there are chances ki we will get 0 as a random no
// Like in the above eg..there are chances ki we will get 0.08999. SO to avoid this scenraio, what we do is we add a + 1 to this expression

// console.log(Math.random()*10 + 1); // Now here..min value will be 1
// We can simplify it more as,
// console.log((Math.random()*10) + 1);

// Get random nos from 10 to 20

const min = 10;
const max = 20;

// Now we want no from 10 to 20..
// Since we want a single value..without any decimal point..so we will be using math.floor() to round off
// Now since we want the range values..so instead of multiplying the random no by 10..we multiply by range..and add 1 to it..
// Next to make sure the range is starting from min value..lastly we add min value to the whole expression!
console.log(Math.floor(Math.random() * (max - min + 1) + min));
// console.log(Math.floor(Math.random() * ( max-min + 1)));