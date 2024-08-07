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



