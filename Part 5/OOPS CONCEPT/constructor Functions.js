// Constructor Function - 

// New keyword - 

// const promise1 = new Promise();
// const date = new Date();

// New keyword is basically a Constructor Function.
// Constructor Function basically creates multiple instances from same object.
// So new keyword basically helps us in creating a new context everytime.

function User(username, loginCount, isLoggedIn) {
    
    // username chi value me ek variable madhe store krnar
    this.username = username; // this pls note is an empty object.
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
        
    }

    // so me yaa empty object madhe value takat aho
    return this;  
    // So even if we dont write return this, it will implicity return this value
}

// console.log(User("tanshu", 50, true));

// const userOne = User("tanshu", 50, true);
// const userTwo = User("allewar",60, false);
// console.log("userOne",userOne);

// Here, userTwo is overwriting the userOne values..This is not expected..But it is happening..
// We have created a function called as User. This is creating instance. Now I'm creating based based on this above function. But when i create multiple objects, what is happening is, it is overwriting previous object values.
// This happens because the object which we are creating doesnt have a new instance. It takes the old values.

// So to prevent this from happening, we use new keyword. .i.e Constructor Function


const userOne = new User("tanshu", 50, true);
const userTwo = new User("allewar",60, false);
console.log("userOne",userOne.constructor);  // UserOne [Function: User]
// console.log("userTwo",userTwo);



// Constructor Function gives us a new instance everytime.

// Constructor Property is nothing but reference hoti hain khud hi k baare main :)


// What is Instanceof?

// The JavaScript instanceof operator is used to check the type of an object at the run time. It returns a boolean value(true or false). If the returned value is true, then it indicates that the object is an instance of a particular class and if the returned value is false then it is not.

console.log(userOne instanceof User); // true

