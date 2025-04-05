// Create a class like this - 

class User {
    // Jaise hi class se ek object initialse hota hain, i.e new keyword ka use hoga..waise hi constructor aapne aap call ho jaata hian
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Lets create on more method --

    encryptPassword() {
        return `${this.password}abc`
    }
}

const chai = new User("chai","chai@gmail.com","pass");

console.log(chai.encryptPassword());

// How this works beihned the scene  ---

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
};


User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

// usecase ---

const tea = new User("tea","tea@gmail.com","tea");

console.log(tea.encryptPassword());
