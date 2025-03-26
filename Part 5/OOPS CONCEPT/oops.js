// Object literal - > This is literally an object

const user = {
    username: 'tanshu',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`); // Here this keyword prints the current object properties.
        // So this means, current context.
        console.log(this); // Prints the current context.
        // {
        //   username: 'tanshu',
        //   loginCount: 8,
        //   signedIn: true,
        //   getUserDetails: [Function: getUserDetails]
        // }
        
    }
};

console.log(user.getUserDetails());
// O/p -> Got user details from database
//        undefined

// Notes - 
// In js, this object(Object Literal) is only called as a Base Unit 
// Object madhe basically kaay aste..Properties and Methods
// Properties -> Values 
// Methods -> Functions

// This keyword ->  Displays the current context

// Now if we print this keyword, outside the object..i.e in the  global context..then what happens -

console.log(this); //global context  ---op - {}  // this gives an empty object. in the node environment

// if u do the same in the browser environment,it prints window object. (because, global context main window object available hota hain)


// Lets say, I want to create a User2..So I'll have to copy the same above object

const user2 = {
    username: 'tanshu',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`); // Here this keyword prints the current object properties.
        // So this means, current context.
        console.log(this); // Prints the current context.
        // {
        //   username: 'tanshu',
        //   loginCount: 8,
        //   signedIn: true,
        //   getUserDetails: [Function: getUserDetails]
        // }
        
    }
};

// So this way of like create almost same objects with slighty diff properties is not really efficent. So for this we use Constructor Functions


// So, in the next slide, lets talk about Constructor Functions 🤩