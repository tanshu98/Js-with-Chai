// Activity 1: Template Literals

// Task 1: Use T.L to create a string that includes variables for person's name,age and log it into the console.

const personName = 'Jonas';
const personAge = 26;

console.log(`${personName} age is ${personAge}`);

// Activity 2: Destructing - 

// Task 3: Use array destructuring to extract the 1st and 2nd element from array of nos and log them into console

const arrNumbers = [1,2,3];

const [arr1,arr2] = arrNumbers;
console.log(arr1, arr2);

// Task 4: Use Object Destructing to extract title and author from the book object

const book = {
    author: 'J.K Rowling',
    bookTitle: 'Harry Potter Series',
    bookYear: '1990',
    isPopular: true
}

const {author, bookTitle} = book;
console.log(author, bookTitle);

// Activity 3: Spread And Rest Operators

// Task 5: Use the spread Operators to create a new array that includes all the elements of previous array plus addtional elements and log it to console

const arrNames = ['Sam','Jonas','John','Katy'];

const combineArrays = [...arrNames , ...arrNumbers];
console.log(combineArrays);

