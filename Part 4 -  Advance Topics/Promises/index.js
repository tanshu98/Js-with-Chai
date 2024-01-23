// Mostly promises are consumed..We do create..but those are quite rare

// Promises is an Object

// const promiseOne = new Promise(function(resolve, reject){
    // Do async Operation
    // Db calls, cryptography, network etc..
    
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve(); // we call the resolve here..to make it connect to the then..
//     }, 1000)
// }) // creates a new Promise Instance. This take a callback function as an paramter..and inside that we have resolve and reject again as a paramter inside the callback function.

// Now after creation..we consume the promise..

// promiseOne.then(function(){
//     console.log('Promise Consumed');
// })  
// Then is having a connection with resolve . This also takes a callback function


// Another way of writing promises is to directly wirte them..without storing them in any variables..

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async Code');
//         resolve();
//     }, 1000)
// }).then(function(){
//     console.log('Promise is resolved!');
// })


// 3rd Eg - 

// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         resolve({name: 'tanshu', age: 25})  // So..inside this we pass in some data..in the form of objects 
        // We know..resolve is connected to then..so resolve also can pass arguments..Now this arguments can be in the form of object..or arrays or function..they can be anything..(Though usually objects are used!)
//     }, 1000)
// }).then(function(user) {
//     console.log(user); // op - { name: 'tanshu', age: 25 }
// })

// 4th Eg:-

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error) {
//             resolve({username: 'tanshu', password: '123'})
//         } else {
//             reject('Error! Something went wrong!')
//         }
//     }, 1000)
// })

// Consume the 4th promise
// We already know..
// promiseFour.then() ['we will take values'], .catch() [ 'if an error comes up we will use .catch here']

// promiseFour.then((user)=>{
    // Lets say..we want to get only username here..not the entire object
//     console.log(user);
//     return user.username;
// })
// .then((username)=> {
//     console.log(username);
    // Since we are also getting some errors..we need to also catch those errors
    // In line 50 we have set error= true..lets make it false..then this will not give error
// })
// .catch((error)=> {
//     console.log(error);
// })
// .finally(()=> {
//     console.log('Promise is either resolved or rejected!');
// })

// // 5th Eg - 

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error) {
//             resolve({username: 'JavaScript', password: '123'})
//         } else {
//             reject('Error! JS went wrong!')
//         }
//     }, 1000)
// })

// We will consume this promise using a different way!

// Async await is also similar to .then and .catch..
// Only issue is we dont handle that catch that gracefully as we do in .then and .catch approach
// Also pls note..Promise is an object..its not a method..its an object!!!

// async function consumePromise() {
//     // If u get response..keep it in try block..
//     try {
//         const response = await promiseFive;
//     console.log(response);
//     } catch (error) { // if error shows up..add that in catch block!!
//         console.log(error);
//     }
    
// } 

// consumePromise();


// Async Await using API's - 

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getAllUsers(); // Pls call the function for exeuction..broooo!!
// Now the reason why..we are getting response so late..is that..response.json() also takes some time to convert..and hence..there always we have to wait for the response..so we apply await there too

// Lets try and convert this into .then and .catch

fetch('https://jsonplaceholder.typicode.com/users').then((response)=> {
    return response.json();
}).then((data)=> { // we are storing the response.json() result in data paramter..we can display it directly!!
    console.log(data);
}).catch((error)=> console.log(error))

// Fetch - 

