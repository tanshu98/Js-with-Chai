function setUsername(username) {
    this.username = username;
    console.log("Called");
}

function CreateUser(username, email, password) {
    setUsername.call(username);
    this.email = email;
    this.password = password;
} 

const chai = new CreateUser("chai", "chai@fb.com", "123");
console.log("chai----",chai);
