// Activity 1: Array Creating and Acess

// Task 1: Create an array of nos from 1 to 5 and log the array to the console

const arrOfNos = [1,2,3,4,5];
console.log(arrOfNos);

// Task 2: Access the first and Last element of the array and log them to the console

const firstElement = arrOfNos[0];
const lastElement = arrOfNos[arrOfNos.length-1];

console.log(firstElement, lastElement);

// Activity 2: Array Methods(Basic)

// Task 3: Use the push method to add a new no at the end of the array..

arrOfNos.push(34);

console.log(arrOfNos); // [ 1, 2, 3, 4, 5, 34 ]

// Task 4: Remove the lastElement from the array using pop method

arrOfNos.pop();

console.log(arrOfNos); // [ 1, 2, 3, 4, 5 ];

// Task 5: Use unshift to add the new element at the begining of array

arrOfNos.unshift(90);

console.log(arrOfNos); // [ 90, 1, 2, 3, 4, 5 ]


// Task 6: Use Shift to remove the frist element at the begining of array

arrOfNos.shift(); 

console.log(arrOfNos); // [1, 2, 3, 4, 5 ]


// Activity 3: 

// Task 7: Use the map method to create a new array where each no is dobbled and logged into array.

const navinArr = [2,4,56,32,67];

const doubleArr = navinArr.map((n:any)=> n*2);
console.log(doubleArr);

// Task 7: Use the filter method to create a new array with only even nos..

const ajunekNewArr = [1,2,3,4,5,6,7,8,9,10];
const evenNosArr = ajunekNewArr.filter((n)=> n%2===0);
console.log(evenNosArr);

const sumOfArrElements = ajunekNewArr.reduce((total, currVal)=> total + currVal,0)
console.log(sumOfArrElements);


// FILTER METHOD QUESTIONS - 

// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const arr = [3, 6, 8, 2,5,12,1];
const noGreaterThenOrEqualToFive = arr.filter((num)=> num >=5);
console.log(noGreaterThenOrEqualToFive);

// 2) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

const arrStr = ["dog", "wolf", "by", "family", "eaten", "camping"];
const strOfFiveChar = arrStr.filter((str)=> str.length <=5);
console.log(strOfFiveChar);

// 3) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

const peopleArr = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
];

// const peopleWhoBelongToTheIlluminati = peopleArr.filter((people)=> people.member=== true);

// console.log(peopleWhoBelongToTheIlluminati);

// Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

const arrOfMovieWatchers = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
];

const EigtheenPlus = arrOfMovieWatchers.filter((e)=> e.age > 18);
console.log(EigtheenPlus);


// Activity 4: Array Iteration - "I'm Skipping this"

// Task 10: Use a for loop to iterate over the array and log each element to the console.
// Task 11: Use the forEach method to iterate over the array and log each element to the console.

// Activity 5: Multi-Dimensional Arrays - 

// Task 12: Create a 2D Array(Matrix) and log it to console.

// MAP CODING QUESTIONS

// 1. Example 2: Uppercasing Strings

const words = ['apple', 'banana', 'cherry'];
const wordsUpperCase = words.map((w)=> w.toUpperCase());
console.log(wordsUpperCase);

// 2. First Element upperCase and rest lower case

const capitalLetters = words.map((w)=> w.charAt(0).toUpperCase() + w.slice(1))
console.log(capitalLetters);

// 3.  Extracting Object Properties

const users = [

    { name: 'Alice', age: 25 },
  
    { name: 'Bob', age: 30 },
  
    { name: 'Charlie', age: 22 }
  
  ];

  const names = users.map((u)=> u.name);
  console.log(names);
  




