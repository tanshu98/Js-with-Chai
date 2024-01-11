// const str1 = 'Hello';
// const str2 = 'World!'
// console.log(str1 + " "+   str2); // Adding space between strings
// // This is called as string conatenation (Outdated Technique to use string)

// // Better Way - 

// // String Interpolation - 

// let str3 = 'Virat';
// let str4 = 'Sachin';
// console.log(`Greatest cricketors ever produced by India are ${str3} and ${str4}`);

// let str5 = new String('shimla', 'manali', 'pune');
// console.log(str5[0]);

// // We can also use prototype to acess string methods..(this prototype is avalaible in console)
// console.log(str5.__proto__); // {} 

// // Normally, strings like "John Doe", cannot have methods or properties because they are not objects. But with JavaScript, methods and properties are also available to strings, because JavaScript treats strings as objects when executing methods and properties.

// // String Methods - 

// const newString = 'lucknow is a famous city';

// console.log(newString.length); // Returns the length of a String object.
// console.log(newString.toUpperCase()); //Converts all the alphabetic characters in a string to uppercase.
// console.log(newString.toLowerCase()); //Converts all the alphabetic characters in a string to lowercase.
// console.log(newString.charAt(2)); // Returns the character at the specified index.
// // Reverse of charAt -> indexOf
// console.log(newString.at(3)); // same as charAt. It allows the use of negative indexes while charAt() do not.
// console.log(newString.indexOf('f')); // Returns the position of the first occurrence of a substring.
// console.log(newString.lastIndexOf('t')); //The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

// // Both indexOf(), and lastIndexOf() return -1 if the text is not found:
// // Both methods accept a second parameter as the starting position for the search:




// // Break string into multiple substring(small strings)

// // console.log(newString.substring(0,5)); //luckn
// // console.log(newString.slice(-24,4)); // slice() extracts a part of a string and returns the extracted part in a new string.

// // The method takes 2 parameters: start position, and end position (end not included).
// let text = "Apple, Banana, Kiwi";
// // console.log(text.indexOf('B'));
// let part = text.slice(7, 13);
// // console.log(part); // Banana
// // If you omit the second parameter, the method will slice out the rest of the string:
// // console.log(text);
// let part1 = text.slice(7); 
// // console.log(part1); // Banana, Kiwi

// // -ve paramter - Here string counting is done from the end
// let part2 = text.slice(-12);
// console.log(part2); // Banana, Kiwi -> i (-1), w(-2), i(-3), k(-4) etc

// // Slice -> Can take -ve values, substring()-> Takes only +ve values

// let part3 = text.substr(7,6);
// console.log(part3); //Banana
// // substr() is similar to slice().
// // The difference is that the second parameter specifies the length of the extracted part.

// // Trim - The trim() method removes whitespace from both sides of a string:
// let text1 = "      Hello World!      ";
// console.log(text1.trim());
// // trimStart() -> The trimStart() method works like trim(), but removes whitespace only from the start of a string.
// // trimEnd() -> The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

// // Replace - The replace() method replaces a specified value with another value in a string:

// let text3 = "Please visit Microsoft!";
// console.log(text3.replace('Microsoft', 'Google'));

// // replaceAll() ->
// let text4 = "I love cats. Cats are very easy to love. Cats are very popular.";
// // console.log(text4.replaceAll(/cats/g,'dogs'));
// // console.log(text4.replaceAll( /Cats/g, 'Dogs'));
// // console.log(text4);

// // Split - A string can be converted to an array with the split() method:

// console.log(text3.split(''));  // If the separator is omitted, the returned array will contain the whole string in index [0].
// /* [
//   'P', 'l', 'e', 'a', 's',
//   'e', ' ', 'v', 'i', 's',
//   'i', 't', ' ', 'M', 'i',
//   'c', 'r', 'o', 's', 'o',
//   'f', 't', '!'
// ]*/

// console.log(text3.split(' ')); // [ 'Please', 'visit', 'Microsoft!' ]

// With Split and without split - 
let str = 'tanshu allewar'
console.log(str.split()); // [ 'tanshu allewar' ]
console.log(str.split(''));
// [
//     't', 'a', 'n', 's',
//     'h', 'u', ' ', 'a',
//     'l', 'l', 'e', 'w',
//     'a', 'r'
//   ]
console.log(str);



// // Concat - concat() joins two or more strings:

// let text10 = "Hello";
// let text2 = "World";

// // let concatString = text10 + text2;
// // console.log(concatString); // HelloWorld


// let concatString = text10.concat('', text2);
// console.log(concatString); // HelloWorld

const arr = [1,3,5.6];

const d = new Date('02/12/2024');
console.log(d.toDateString());