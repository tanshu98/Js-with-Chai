// Lets say we have a string - 

// let myName = "tanshu";

// console.log(myName.length); // 6

// Now what if we have multiple spaces in this myName string..like so --

let myName = "tanshu   ";

console.log(myName.length); // 9

// Now after adding the spaces, u can see, the length changed to 9 i.e its adding spaces in the length..

// Obvisously, we can use trim to fix this thing, but we want to create a new lets say method..to deterine true length of the string..
// So we are trying to add a default string method as true length..okk

// SO lets create something like this..

// console.log(myName.trueLength);


// Lets try to undestand this..

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidey has ${this.spiderman} power`);
    }
}

// Lets create a method, like --

Object.prototype.tanshu = function() {
    console.log("Tanshu is present in all objects");
    
}

// heroPower.tanshu() // Tanshu is present in all objects

// What we are doing here this that, we are adding this tanshu method in the object itself, so technically, it will be accessible to all the functions, arrrays and string too..right?

// So this kind of works..alright

// myHeros.tanshu() 

// So,humne basically object k andar k new property add ki hain,,tanshu bolke..just buss tanshu print krti hain..okk..Yeh humne prototype k help se krra hian..
// So abh yeh property ko arrays, strings sabhi log access krr sakte hian..as we can see form line 49.



// Abhi lets say, hume method Array main hi first inject krenge, so what do u think..Protytpe k hirerachy k hisab se..woh property object k pass bhi jayegi..??

// Lets see ---


Array.prototype.heyTanshu = function() {
    console.log("Tanshu says hello");
    
}

// SO now, array k pass yeh heyTanshu wali method toh present hogi..but not  sure about objects..

myHeros.heyTanshu() // Tanshu says hello -- It works..

// Lets try object now..

heroPower.heyTanshu() // TypeError: heroPower.heyTanshu is not a function

// So, Object k paas yeh method pass nahi hui hain..

// It simply means, down se top pe methods and all pass nahi hote hain in prototype okk

