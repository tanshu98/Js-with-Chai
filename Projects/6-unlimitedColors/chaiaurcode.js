// Genrate a random Color

const randomColor = function() {
    // Hex Code Color
    const hex = '0123456789ABCDEF'; // 16 combinations
    let color = '#'

    for(let i = 0; i< 6; i++) {
        // color += hex[Math.floor(Math.random() * hex.length)]
        color += hex[Math.floor(Math.random() * 16)]

    }
    return color
}

// Start, Stop button logic
let intervalId;
const startChangingColor = function() {
    // Change the bg-color after every interval - 

    if(!intervalId) {
    intervalId = setInterval(changeColor, 1000);

    }
    // So this is much more cleaner code!!
    function changeColor() {
    document.body.style.backgroundColor = randomColor();

    }
};
const stopChangingColor = function() {
    // Now we want to get the setIntervalid which is currently running and stop that
    clearInterval(intervalId)
    // Now it is a good practice to wirte some clearner Code
    // Here..after this function executes..intervalId is getting overwrited with a new value everytime..Now we can modify our code to make it much better!

    intervalId = null; 
    // Here we are cleaning the variable i.e making it null..saving some memory space etc.

    // Now if we run the code without applying some checks for intervalId if its null or not..the rest of the startbutton wala code wont run..
    // So again to fix that..we write..a check for that too

};


document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
