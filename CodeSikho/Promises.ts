// A kid is given task, to go to market and bring bread..
// And if bread is not available, bring eggs.
// If eggs are also not available, then throw error.

function isBreadAvailable() {
    return false;
}

function isEggAvailable() {
    return false;
}

const  bringBread = ()=> {
    // Create a new Promise
    return new Promise((resolve, reject)=> {
        if(isBreadAvailable()) {
            resolve("Here is your bed");
        } else if(isEggAvailable()) {
            resolve("Here is your egg");
        } else {
            reject("Both bread and egg are un-available");
        }
    })
}

// Whether, promise resolve hoil ki nahi, toh aaplyala kahi tri reeturn krel..

// bringBread().then(data => {
//     console.log(data);
    
// }).catch(err => {
//     console.log(err, "error ahe!!");
// })

// Instead of using .then and .catch, we can use async await to do the same thing


// const final = async() => {
//     const myData = await bringBread(); // This is nothing but .then
//     return myData;
// };


// // Pls note - We can write .then "n" number of times

// final().then(data=> {
//     console.log(data);
    
// });

// final();

// Even if we dont write line 46 - 49 it still works..Okk

// Now its giving us an error that, we have not handled the error scenario..So lets implement that..



const final = async() => {
    try {
    const myData = await bringBread();
    console.log(myData);
    return myData;
    } catch (error) {
        // return error;
        return Promise.reject(error);
    }
};

// Here we can add a .then and .catch condition if we want..else its already working fine
// Now instead of return error like we did in line 65 and 66, we can do the following,



// final();

final().then(data => {
    console.log(data);
    
}).catch(err => {
    console.log(err);
})


