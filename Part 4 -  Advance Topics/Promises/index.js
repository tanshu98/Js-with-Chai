// Mostly promises are consumed..We do create..but those are quite rare

// Promises is an Object

const promiseOne = new Promise(function(resolve, reject){
    // Do async Operation
    // Db calls, cryptography, network etc..
    
    setTimeout(function(){
        console.log('Async task is completed');
        resolve(); // we call the resolve here..to make it connect to the then..
    }, 1000)
}) // creates a new Promise Instance. This take a callback function as an paramter..and inside that we have resolve and reject again as a paramter inside the callback function.

// Now after creation..we consume the promise..

promiseOne.then(function(){
    console.log('Promise Consumed');
})  
// Then is having a connection with resolve . This also takes a callback function


// Another way of writing promises is to directly wirte them..without storing them in any variables..

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Code');
        resolve();
    }, 1000)
}).then(function(){
    console.log('Promise is resolved!');
})


// 3rd Eg - 

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({name: 'tanshu', age: 25})  // So..inside this we pass in some data..in the form of objects 
        // We know..resolve is connected to then..so resolve also can pass arguments..Now this arguments can be in the form of object..or arrays or function..they can be anything..(Though usually objects are used!)
    }, 1000)
}).then(function(user) {
    console.log(user); // op - { name: 'tanshu', age: 25 }
})

// 4th Eg:-

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error) {
            resolve({username: 'tanshu', password: '123'})
        } else {
            reject('Error! Something went wrong!')
        }
    }, 1000)
})