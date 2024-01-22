// Create a Promise - 

let promiseOne = new Promise(function(resolve,reject) {
    setTimeout(function() {
        resolve('run after some time');
        // resolve();
    }, 1000);
}).then(()=> {
    console.log();
})