// Intially..we want to select the form..(Because form main hi submit button hain)

const form = document.querySelector('form');
// console.log(form);

// const height = parseInt(document.querySelector('#height').value);
// The above use case will give u empty value;


// Now..when we hit submit in form..It gets submitted by either post type or get type. And when its submitted..its values go to url or to the server..
// Yeh process ko hume rokhna padega..bcoz hum submit krne pe..kahi bhi kuch bhej nahi rahe hain form..

// SO by default, we have a method..which helps us to prevent this behaviour

form.addEventListener('submit', ((e)=> {
    e.preventDefault();

    // Now we need to get the values..
    const height = parseInt(document.querySelector('#height').value)
    // console.log(height);
    const weight = parseInt(document.querySelector('#weight').value);
    // console.log(weight);
    const results = document.querySelector('#results');
    // console.log(results);
    if(height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid height ${height}`
    } else if(weight === '' || weight <=0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid weight ${weight}`;
    } else {
        // Calcuate BMI - 
        const bmi = weight / ((height * height)/ 10000).toFixed(2);
        console.log(bmi);
        if(bmi < 18.6) {
            results.innerHTML = `<span>You are Under Weight with ${bmi} BMI 😢<span>`;
        } else if(18.6 > bmi > 24.9) {
            results.innerHTML = `<span>You ara a Fit person with ${bmi} BMI 😉<span>`;
        } else {
            results.innerHTML = `<span>You are Overweight with ${bmi} BMI 😶<span>`;
        }
        
    }

}))