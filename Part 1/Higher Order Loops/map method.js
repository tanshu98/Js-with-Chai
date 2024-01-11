const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const num = numbers.map((n)=> n+ 10);
// console.log(num);

// numbers.forEach((n)=> console.log(n+ 10)); // Adding 10 in individual array elements..

// Chaning -

const newNummbs = numbers
  .map((n) => n * 10)
  .map((n) => n + 1)
  .filter((n) => n > 40);

console.log(newNummbs);
