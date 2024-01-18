// setTimeout() => This is a method..which also calls an api..This expects a handler(Basically..its just function with no name or sometimes..we may be referencing some other function and then call it here as handler!!)..Next is timeout which we get in number

setTimeout(function () {
  console.log("New Task1");
}, 2000);


// We can also reference a funciton in this setTimeout..Eg:- 
const cityName = function() {
    console.log('this is a new city');
}

setTimeout(cityName, 2000); // Here we reference the function..execution is done by setTimeout method!

// We can apply this function in dom also - 

const changeText = function() {
    document.querySelector('h1').innerHTML = 'Learning Async JavaScript!'
}

const changeSetTimeOut = setTimeout(changeText, 10000);

// Now lets say for some reason we wanna stop this setTimeout funciton..So there's a method for that also..

// clearTimeout => Now this method..Basically requires a reference of the setTimeout which u wanna stop..otherwise it wont work..
// Why reference..? Becoz..there can be n no of setTimeouts in a file..so we need a reference as to which one u wanna stop from executing..!

// clearTimeout(changeSetTimeOut);

// Its much better to use this function inside a event..rather then like this..

document.querySelector('#stop').addEventListener('click', function() {
    clearTimeout(changeSetTimeOut);
    console.log('Stop button is clicked');
})



