// 1) Make an array of numbers that are doubles of the first array

const arr1 = [2,5,100];

function doubleNumbers(arr1) {
  return arr1.map((d)=> d * 2);
}

console.log(doubleNumbers(arr1)); // [ 4, 10, 200 ]

// 2) Take an array of numbers and make them strings

function stringItUp(arr1) {
    return arr1.map((d)=> d.toString());
}

console.log(stringItUp(arr1)) // [ '2', '5', '100' ]

// 3) Capitalize each of an array of names

const arr2 = ["john", "JACOB", "jinGleHeimer", "schmidt"]
let  days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
function capatalize(arr) {
    return arr.map((d)=> d.charAt(0).toUpperCase() + d.substr(1));
}

console.log(capatalize(days));


// ["John", "Jacob", "Jingleheimer", "Schmidt"] => Output needed!!

// 4) Make an array of strings of the names

function namesOnly(arr){
    // your code here
    return arr.map((d)=> d.name); 
    // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

let arr3 = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
function makeStrings(arr){
    // your code here
    return arr.map((d)=> d.age > 18 ? `${d.name} can go to the matrix` : `${d.name} cannot go to the matrix` );
  }
  
  console.log(makeStrings(arr3)); 
//   Op - 
  // ["Angelina Jolie can go to The Matrix", 
  // "Eric Jones is under age!!", 
  // "Paris Hilton is under age!!", 
  // "Kayne West is under age!!", 
  // "Bob Ziroll can go to The Matrix"]


// 6) Make an array of the names in h1s, and the ages in h2s

function readyToPutInTheDOM(arr){
    return arr.map((d)=>`<h1>${d.name}</h1> <h2>${d.age}</h2>`);
  }

  console.log(readyToPutInTheDOM(arr3));