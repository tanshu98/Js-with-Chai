// // Arrays are resizable . They can be mixed datatypes in Arrays
// // Whenever you create copies of Arrays it creates SHallow Copies

// const newArr = [1,4,5,6]; // Array Declaration
// const newArr2 = new Array(4,5,6,7); // 2nd way to declare array!

// // Array Methods - 

// newArr.push(7); // Appends new elements to the end of an array, and returns the new length of the array.
// newArr.push(9);
// newArr.pop() // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// newArr.unshift(10) // Inserts new elements at the start of an array. Since array elements is getting at the start, whole array structure has to get shifted to the next indices..hence unshift
// newArr.shift() // Removes the first element from an array and returns it. 

// console.log(newArr);
// console.log(newArr.includes(10)) // Determines whether an array includes a certain element, returning true or false as appropriate. // false
// console.log(newArr.indexOf(10)); // Returns the index of the first occurrence of a value in an array, or -1 if it is not present.  -1

// let myArr = newArr.join(); // Adds all the elements of an array into a string, separated by the specified separator string.

// Slice and Splice - 

// Slice -> Returns a copy of a section of an array.
const arr1 = [3,5,6,7,8,9,10];

const arr2 = arr1.slice(2,5);  
// console.log(arr2); // [6,7,8] 
// console.log(arr1); // [3,5,6,7,8,9,10]

// Splice -> Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
const arr3 = arr1.splice(2,5);
// console.log(arr3); // [ 6, 7, 8, 9, 10 ]
// console.log(arr1); // [ 3, 5 ] 

const numbers = [12,34,56,34,67,8,9,45,2,43,6,7,5,63,53,7,45,45,56,5,6,6,456];
console.log('orignal array',numbers);
const numbersSplice = numbers.splice(2,5, 'number', 'number2');
console.log('spliced Array',numbersSplice);
console.log('numbered Array', numbers);

// @param start — The zero-based location in the array from which to start removing elements.
// @param deleteCount — The number of elements to remove.
// @returns — An array containing the elements that were deleted.
// @param added elements - It will replace the orignal removed elements with the new Added elements in the orignal array



const marvel = ['Spiderman', 'Iron-man', 'Captain America', 'Doctor Strange'];
const dc = ['Superman', 'Batman', 'Wonder Woman', 'Flash']
// console.log(marvel);
// console.log(dc);

// marvel.push(dc);
// console.log(marvel); //  ['Spiderman', 'Iron-man', 'Captain America', 'Doctor Strange', ['Superman', 'Batman', 'Wonder Woman', 'Flash'] ]
// Here..u will find..that the 2 arrays have not merged together! Infact the dc array itself has become the 4th element of Marvel array..

// And if we wanna access..suppose flash..then
// console.log(marvel[4][3]); // Flash

//  We can use concat method for this!

const allHeros = marvel.concat(dc);
console.log(allHeros); /*[
    'Spiderman',
    'Iron-man',
    'Captain America',
    'Doctor Strange',
    'Superman',
    'Batman',
    'Wonder Woman',
    'Flash'
  ]*/

//   Note - concat method returns data in a new array!
//   But there's a more better way!

// SPREAD OPERATOR!!!

const allNewHeros = [...marvel, ...dc];
console.log(allNewHeros); // Combines both the arrays..and displays individual elements

const compicatedArray = [1,2,3, [4,5, [6,7,8, [9,10,11]]]];

//Since this array looks way to complicated, we can use a method to make this array spread out..

// We use something know as flat method!

// Flat - Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Here we have to specify how much depth(Complicated) the array is..As u can see our array has almost 4 depths..
// But since many a times..it can get little confusing to count the depths and all..so instead we can put infinity inside the method as a paramter. The method then..itself will figure out the depth and  all!!
const notSoComplicatedArray = compicatedArray.flat(Infinity);
console.log(notSoComplicatedArray);
//  [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10,
//    11
//  ]

// Many a times we dont know..if the data we are dealing is an array or not,,and also we want to suppose also convert that unknown data type into an array..
// Note:typeof Array -> returns an Object!!

console.log(Array.isArray(notSoComplicatedArray)); // true
// So with this method..we can check if a datatype is an array or not

const newData = 'tanshu';
console.log(Array.from(newData)); // returns in array format

// We can convert an object also into array..

console.log(Array.from({name: 'tanshu'})); // []
// Unfortunatly..this returns an empty array,,bcoz we need to pass in some additonal details to help the mehtod..

// Another interesting method is Array.of
// Array.of -> Returns a new array from a set of elements.
let score1 = 199;
let score2 = 201;
let score3 = 202;
console.log(Array.of(score1, score2, score3)); // [ 199, 201, 202 ]

