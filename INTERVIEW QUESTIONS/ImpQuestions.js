// const occurrencesOfEachChar = (str)=> {
//     let freqMap = new Map();

//     for(let char of str) {
//         freqMap.set(char, (freqMap.get(char) || 0) + 1);
//     }

//     // return freqMap;
//     return Object.fromEntries(freqMap); // converts Map into object
// }

// console.log(occurrencesOfEachChar("hello"));


// Reverse a string without using Reverse

// const str = "Hello";

// let reversedStr = "";


// for(let i=str.length -1; i>=0; i--) {
//   reversedStr += str[i]
// }

// console.log(reversedStr);

// Palindorme of string


// const pallindromeStr = (str)=> {

// }

// No of occurrences - 

// 

const kitiOccurence = (str)=> {
    const emptyObj = {};
    for(char of str) {
        emptyObj[char] = ( emptyObj[char] || 0 ) + 1;
        console.log(emptyObj, "This is empty Obj");
        
    }
    // return emptyObj;
}

console.log(kitiOccurence("Hello"));

