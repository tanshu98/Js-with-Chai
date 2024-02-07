// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function fiveAndGreaterOnly(arr) {
    return arr.filter((n)=> n > 5);
  }
  // test
  console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

// 2) Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(arr) {
    return arr.filter((n)=> n %2 ==0);
  }
  // test
  console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

let charactorsArr = ["dog", "wolf", "by", "family", "eaten", "camping"];
function fiveCharactersOrFewerOnly(arr) {
  // return arr.map((n)=> n.length < 5) // [ true, true, true, false, false, false ]
  return arr.filter((n)=> n.length <= 5); // [ 'dog', 'wolf', 'by' ]
}
// test
console.log(fiveCharactersOrFewerOnly(charactorsArr)); // ["by", "dog", "wolf", "eaten"]

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club. 

function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter((a)=> a.member === true);
  }
  // test
  console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]

  // 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

  function ofAge(arr){
    return arr.filter((a)=> a.age > 18)
  }
  // test
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ])); 
  // => 
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]