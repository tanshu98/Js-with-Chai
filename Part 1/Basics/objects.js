// Object.create() => Objects are created using Constructor in this way!

const symb1 = Symbol('key1'); // Symbol declaration
// console.log(symb1);

// Object Literals - 

const obj = {
    name: 'tanshu',
    city: 'Hyderabad',
    isLoggedIn: true,
    isLoggedInDays: ['Mon', 'Tue', 'Sun'],
    'full-user-name': 'Tanshu Allewar',
    // symb1: 'myKey' // This is not a valid syntax to declare symbol in a object
    [symb1]: 'myKey'

};


// Ek symbol lo..uske object k key main add krke,,object print krro!! (Interview Question!)

// console.log(typeof obj.symb1); // string
// We declare symbol using [ ] notations and also call to access it using bracket notation only!




// Keys are usually not written in strings becoz, the js compiler behined the scenes converts them into a string..
// Values-> We can use any kind of datatypes for declaring values in objects

// How to Acess an Object - 
// DOt and Square Notation

// console.log(obj.name);
// console.log(obj['city']);
// If key is in string format..then obv u will have to access it using only square notation!!
// console.log(obj["full-user-name"]);

// We can also change the object values

obj.city = 'Pune';
// console.log(obj);
// WE can freeze the object, if we dont want its vlaue to be changed
// Object.freeze(obj);
obj.name = 'Akshay';
// console.log(obj);

// We can also add a function in an object

obj.greetings = function() {
    // console.log('Hello World!');
}
// console.log(obj);
// console.log(obj.greetings); // [Function (anonymous)]
// console.log(obj.greetings()); // Hello World!

// Lets create one more function -

obj.greetingsTwo = function() {
    // console.log(`Hello World, ${this.city}`); // Currently..we are accessing our orignal object props using the this keyword!
}
// console.log(obj.greetingsTwo()); // Hello World, Pune


// Some more on Objects

const flipkart = new Object(); // Declaring the object using constructor!
// console.log(flipkart); // {}

// Adding values

flipkart.id = '123abc';
flipkart.user = 'Samay';
flipkart.isLoggedIn = true;

// console.log(flipkart); // { id: '123abc', user: 'Samay', isLoggedIn: true }

const user = {
    
    fullName: {
        userFullName: {
            firstName: 'Tanshu',
            lastName: 'Allewar'
        }
    },
    city: 'Hyderabad',
    isLoggedIn: true
}

// console.log(user.fullName.userFullName.firstName);

// Merging Objects - 

const obj1 = {1: 'a',2: 'b'};
const obj2 = {2: 'c', 3: 'd'};

// const obj3 = {obj1, obj2};
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'c', '3': 'd' } }

// To fix this issue..we can use some great object methods!!

// 1. OBJECT.ASSIGN() ->

//The Object.assign() method is used to copy the values and properties from one or more source objects to a target object. It invokes getters and setters since it uses both [[Get]] on the source and [[Set]] on the target.

const obj3 = Object.assign({},obj1,obj2); // This curely braces acts as a target object..and hence the rest objects beocme sources
// console.log(obj3); // { '1': 'a', '2': 'c', '3': 'd' }

// 2. SPREAD OPERATOR IN OBJECTS - 

const obj6 = {...obj1, ...obj2};
// console.log(obj6); // { '1': 'a', '2': 'c', '3': 'd' }

// Now, when we get data from Database, they will come in the form of Array of Objects!!

const users = [
    {
        id:1,
        email: 'tallewar@entrib.com',
        role: 'software developer'
    },
    {
        id:1,
        email: 'tallewar@entrib.com',
        role: 'software developer'
    },
    {
        id:1,
        email: 'tallewar@entrib.com',
        role: 'software developer'
    }
]

// console.log(users[0].email);

// Something Intresting -

// console.log(flipkart);

// console.log(Object.keys(flipkart)); // [ 'id', 'user', 'isLoggedIn' ]
// Note: Here, the object got converted into Arrays!!
// console.log(Object.values(flipkart)); // [ '123abc', 'Samay', true ]

// console.log(Object.entries(flipkart)); // [ [ 'id', '123abc' ], [ 'user', 'Samay' ], [ 'isLoggedIn', true ] ]

// Sometimes we wanna check..from the api data..if in the object..certain prop exists or not..
// In that case we can use this..

// console.log(flipkart.hasOwnProperty('isLoggedIn')); //true

// Object Destructuring - 

const course = {
    courseName: 'Js Masterclass',
    amountPaid: 100,
    courseInstructor: 'Hitesh Choudhary'
}

// const {courseName, amountPaid, courseInstructor} = course;


// We can even change the prop name..using destructuring

const {courseName, amountPaid, courseInstructor: instructor} = course; // Here we are changing the prop name!
console.log(instructor);


// API'S ->

// Intially..data from backend used to come in the form of xml structure.
// But nowdays..mostly the values which we get is in the form of Json

// {
//     'name': 'tanshu',
//     'course': 'js Mstercalsss',
//     'price': 'free'
// }

// So json is kind of an object only..

// Sometimes..we also get data in the form of arrays too from the backened

[
    {},
    {},
    {},
    {}
]