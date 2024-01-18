// console.log("Hello");

// // Now this setTimeout will execute only once..here..in this code..this function wil execute after 2 seconds..but just only once..

// // There's also Another function which is kind of similar yet different..

// // setInterval => This executes after every time interval..so user defines..like after what time break u want the task to be executed and it will keep on executing the task!!

// // setInterval(function() {
// //     console.log('Print Hello World!', Date.now());
// // }, 1000);

// // This will print after every 1 secs

// // We can also reference a function like setTimeout too!

// // const sayName = function() {
// //     console.log('Print Tanshu', Date.now());
// // }

// // setInterval(sayName, 1000);

// // We can have a 3rd parameter in the setInterval..

// const sayCity = function (str) {
//   console.log(str, Date.now());
// };

// // Similarly..when we wanna stop this setInterval funciton we have a clearInterval method which helps us to do just that!!
// document.querySelector("#start").addEventListener("click", function () {
//   const startInterval = setInterval(sayCity, 1000, "Kolkata");
// });

// document.querySelector("#stop").addEventListener("click", function () {
// //   const stopSayCity = setInterval(sayCity, 1000, "Kolkata");

//   clearInterval(setInterval(sayCity, 1000, "Kolkata")); // now the setInterval method wont run
//   console.log("setInterval has stopped!");
  
// });

