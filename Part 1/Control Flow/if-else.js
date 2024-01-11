// if

// if(conditon) {
    // statement...
// }
const isUserloggedIn = true;
const temp = 40;
if(temp   <= 40) {
    console.log('Temperature is less 40!');
} else {
    console.log('Temp is not 40!');
}

// <, > , <=, >=, ==, ===, !=, !==

// Scope in if statements -

const score = 200;
if(score > 100) {
    const power = 'fly';
    console.log(`User has Power: ${power}`);
}
// console.log(`User has Power: ${power}`); // This will give error!

// Shorthand if-else

const marks = 100;
if(marks > 50) console.log('Student has passed in the exam!');
// This has implicit scope..Means yaha pe scope maan liya jaata hain..we generally skip curely braces in this shorthand!

// Checking Mutliple conditons - 

const balance = 1000;

if(balance < 500) {
    console.log('less then 500');
} else if (balance < 750) {
    console.log('less then 750');

} else if (balance < 900) {
    console.log('less then 900');
    
}else {
    console.log('less then 1200');
    
}

const userHasLoggedIn = true;
const userHasDebitCard = true;

const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(userHasLoggedIn && userHasDebitCard){
    console.log('User can do shopping!');
}
// If any one of the condition fails..we wont go inside this console.log !!

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User can do some shopping!");
}