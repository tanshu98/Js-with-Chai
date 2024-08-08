// // Activity 1: Object Creation and Acess

// // Task 1: Create an object representing a book with its properties like author,year and log the object to the console.

// const book = {
//     author: 'J.K Rowling',
//     bookName: 'Harry Potter Series',
//     bookYear: '1990',
//     isPopular: true,
//     // bookTitleAuthor: ()=> {
//     //     return ` ${book.author} has written wonderful novel series named ${book.bookName}`
//     // }
//     // We can improve the above code by using this keyword
//    bookTittleAuthor() {
//         return `${this.author} has written wonderful novel series named ${this.bookName}`
//    },
//    changeBookYear(year:string) {
//     this.bookYear = year;
//    }
// }

// console.log(book);
// console.log(book.author, book.bookYear);


// // We can destructure this..

// const {author, bookName,bookYear,isPopular} = book;
// console.log(author, bookName, bookYear,isPopular);

// // Task 3: 
// console.log(book.bookTittleAuthor());

// // Pls Note - 

// // While you can change the method inside an object to an arrow function, it's important to understand that arrow functions do not have their own this context. Instead, they inherit this from the surrounding non-arrow function or the global scope. This can lead to issues when you expect this to refer to the object the method belongs to.

// // Task 4: 

// console.log(book);


// Task 5: 

const library = {
    libraryName:'Heavenly Readers',
    booksCollection: ['LoTR', 'Harry Potter', 'Narnia','The Hobbit','The Sherlock Holmes'],
    noOfReaders: 256,
    location: 'Hyderabad'
}

console.log(library);

// Task 2: 
console.log(library.libraryName, library.booksCollection);



