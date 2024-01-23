// Create a Promise - 

// In JavaScript, a Promise is an object that will produce a single value some time in the future. If the promise is successful, it will produce a resolved value, but if something goes wrong then it will produce a reason why the promise failed. The possible outcomes here are similar to that of promises in real life.

// const promise = new Promise((resolve, reject)=> {
    // Condition to resolve or reject a promise
// })

// For example, assume you want a promise to resolve after a timeout of two seconds. You can achieve this by writing it into the parameter of the constructor function

const promise = new Promise((resolve, reject)=> {
    setTimeout(function() {
        console.log('This is completed!');
        resolve();
    }, 2000)
})

// Promise based on the conditions - 

// const promiseOne = new Promise((resolve, reject)=> {
//     const math = Math.random();
//     if(math > 0.5) {
//         resolve('Promise is resolved')
//     } else{
//         reject('Promise is rejected!')
//     }
// })

// How to Attach Callbacks!!

// To create a callback for a promise, you need to use the .then() method. This method takes in two callback functions. The first function runs if the promise is resolved, while the second function runs if the promise is rejected.

const promiseTwo = new Promise((resolve, reject)=> {
    const math = Math.random();
    if(math > 0.5) {
        resolve('Promise is resolved')
    } else{
        reject('Promise is rejected!')
    }
})

const handleResolve = function(value) {
    console.log(value);
}

const handleReject = function(reason) {
    console.error(reason);
}

promise.then(handleResolve, handleReject);

// We can use resolve and reject methods too!

const promise1 = Promise.resolve(123);
promise1.then((value)=>{
    console.log('promise1', value);
})

// const promise2 = Promise.reject('Task not completed!');
// promise2.then((value)=> {
//     console.log('Promise2', value);
// }).catch((val)=> {
//     console.log(val);
// })

// Shorthand Method - 

const promise2 = Promise.reject('Task is not successful')
.then((value)=> {
    console.log(value);
}).catch((value)=> {  // Handling error!
    console.log(value);
})