// Protytpe Inheritance ---

const User = {
    name: "chai",
    email: "chai@google.com"
}


const Teacher = {
    isVideo: true
}

const TeachingSupport = {
    isAvaible: false
}

const TASupport = {
    makeAssingment: "Js Assigments",
    fullTime: true,
    __proto__: TeachingSupport // WE are telling the prototype to take the properties of TeachingSupport object and add those properties into this TASupport Object okk..
}

// Note: Haar ek object aapne aap main ek aalag instance hain, so note,, these guys are not sharing anything with each other..okk
// Sabk objects k aapne aapne properties hain okk..(default properties toh sabhi k hi common hote hain brooo 🥰)


// We can do the same with Teacher oBject too..

Teacher.__proto__ = User;

// Pls note - The above apporach is an outdated apporach..

// Modern Syntax ---

Object.setPrototypeOf(TeachingSupport, Teacher);

// So TeachingSupport is able to access all the properties of Teacher Object..using this modern Syntax okk



let anotherUsername = "ChaiAurCode      ";

// I want to add a method called trueLength as discuused in prev slide..

String.prototype.trueLength = function() {
    console.log(this); 
    console.log(`True Length is ${this.trim().length}`); // True Length is 11
}

anotherUsername.trueLength()

// So now this trueLength Method is available to all the string as we have declared..

"tanshu".trueLength();
"allewar".trueLength();

Object.prototype.NakliLength = function() {
    console.log("Chuitya banaya tumko ☠️");
    
}

"rimii".NakliLength();