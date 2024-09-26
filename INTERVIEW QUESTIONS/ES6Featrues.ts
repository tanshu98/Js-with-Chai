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

// Task 6: Use the Rest Operators in a function to accept an arbitary number of arguments,sum them and return the result

const arbitaryFunc = (...numbers:any)=> {
    return numbers.reduce((acc:any,curr:any)=> acc+curr,0);
}

const sumAll  = arbitaryFunc(1,2,3,4,5);
console.log(sumAll);


// Activity 4: Default Parameters - 

// Task 7: 

const defPara = (n1: number,n2=3)=> {
    return n1 + n2;
};

console.log(defPara(2,5));
