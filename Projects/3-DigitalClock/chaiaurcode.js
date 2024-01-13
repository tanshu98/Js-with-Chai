const clock = document.querySelector("#clock");
// console.log(clock);

// Display Local Time

// Now we want to display this date..contniously in every 1 second..
// So there's a method in js called as setInterval. This is just perfect for this kind of tasks!!

setInterval(function () {
  const date = new Date().toLocaleTimeString();
//   console.log(date);
clock.innerHTML = date;
}, 1000);
