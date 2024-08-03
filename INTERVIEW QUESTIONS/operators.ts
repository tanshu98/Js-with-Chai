// Task 1 -

const sumOfTwoNos = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(sumOfTwoNos(2, 4));

// Same with the rest of the operators.. -, / , *

// Task 5 ->

const findRemainder = (n1: number, n2: number) => {
  return n2 % n1;
};

console.log(findRemainder(2, 7));

// Task 6 ->

let z = 5;
let assignmentSum: number = 0;

assignmentSum += z;
console.log(assignmentSum);

let x = 10;
let assignmentDiff = 0;
assignmentDiff -= x;
console.log(assignmentDiff);

// Feature Request -

// Write a script that performs a basic airthematic operations -

const calcuate = (x: number, y: number, operator: string): number | string => {
  let result;

  switch (operator) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;

    case "*":
      result = x * y;
      break;

    case "/":
      if (y === 0) {
        return "Division by Zero is not allowed";
      }
      result = x / y;
      break;
    case "%":
      result = x % y;
      break;
    default:
      return "Error!! Pls enter valid operators!!";
      break;
  }

  return result;
};

// const numb1 =Number( prompt("Enter the first number:"));
// const numb2 = Number(prompt("Enter the second number:"));
// const operator = prompt("Enter the operator (+, -, *, /):");

const operationResult = calcuate(2, 4, "%");
console.log(`Result ${operationResult}`);

// Task 11 -

let personAge = 18;
let hasDrivingLicense = true;

const eligibleToVote =
  personAge >= 18 && hasDrivingLicense
    ? "Eligible to Vote"
    : "Not Eligible to Vote";
console.log(eligibleToVote);

// Positve and Negative --

let numbs = 1;

const whatsTheNumber =
  numbs > 0
    ? "Number is Positive"
      : numbs < 0
      ? "Number is negative"
    : "Number is Zero";
console.log("whatsTheNumber", whatsTheNumber);
