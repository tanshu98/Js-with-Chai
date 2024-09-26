// Task 1: Create a promise that resolves with a message after a 2 second timeout and log to the console.

const promise1 = new Promise((resolve,reject)=> {
    setTimeout(()=> {
        resolve('Promise has been resolved');
        
    },2000)
   
})
.then((message)=> {
    console.log(message);
})

// promise1.then((message) => {
//     console.log(message); // Logs after 2 seconds: "Promise has been resolved after 2 seconds"
// });

// console.log(promise1);

// Task 2: Create a promise that rejects with an error message after 2 second delay and handle the error using .catch()

const promise2 = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        reject('This promise has been rejected')
    },2000)
})
.catch((error)=> {
    console.log(error);
})


