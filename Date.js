// Date - Note Date is an OBJECT!!

// In Js we get dates in milliseconds

const myDate = new Date(); // Create a Date object
// console.log(myDate); // 2024-01-06T18:13:24.485Z

// Convert date to string - 

// console.log(myDate.toString()); //Sat Jan 06 2024 23:46:15 GMT+0530 (India Standard Time)
// Returns a string representation of a date. The format of the string depends on the locale.
// console.log(myDate.toDateString()); // Sat Jan 06 2024 -> Returns a date as a string value.
// console.log(myDate.toISOString()); // 2024-01-06T18:17:34.732Z -> Returns a date as a string value in ISO format.
// console.log(myDate.toLocaleString()); // Converts a date and time to a string by using the current or specified locale. Eg: 6/1/2024, 11:50:06 pm
// console.log(myDate.toLocaleDateString()); // Converts a date to a string by using the current or specified locale. Eg: 6/1/2024

// There are no of way with which we can create date..we can add more like hours mins..etc

let myCreatedDate = new Date(2024, 0, 22);
console.log(myCreatedDate.toLocaleString()); // 22/1/2024, 12:00:00 am
let myCreatedDate2  = new Date(2024, 0, 22, 4, 30, 45);
console.log(myCreatedDate2.toLocaleString()); // 22/1/2024, 4:30:45 am

// Sometimes u may want dates to be in some format..

let d = new Date('1998-01-22');
console.log(d.toLocaleString()); // 22/1/1998, 5:30:00 am
const d1 = new Date("03/25/2015");
console.log(d1.toLocaleString()); // 25/3/2015, 12:00:00 am

// Timestamp - 

let myTimeStamp = Date.now(); // Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).
console.log(myTimeStamp); // 1704568169184

// When we want to compare 2 dates..what we do is..we convert them into timestamp and then..its becomes easier to compare both the timestamps

console.log(myCreatedDate2.getTime()); // Will convert the date into a timestamp // 1705878045000

// Now how to convert a  timestamp into a seconds

let newTime = Math.floor(Date.now()/ 1000);
console.log(newTime);

// Date Methods - 

let newDate = new Date().getDate();
let newDate1 = new Date().getMonth();


console.log(newDate);
console.log(newDate1);