// 1) Turn an array of numbers into a total of all the numbers

let arr1 = [1,2,3]

let totalArr = arr1.reduce((acc, num) => {
    return acc += num;
},0);

console.log(totalArr);

// 2) Turn an array of numbers into a long string of all those numbers.

let arr2 = [1,2,3, 4,5,6,7];
let stringConcat = arr2.reduce((acc, num) => {
    let str = acc.toString();
    let strNum = num.toString();
    return str += strNum;
})
 
 console.log(stringConcat); // "12