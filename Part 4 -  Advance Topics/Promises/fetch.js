// A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.
// Fetch has a special queue known as micro task queue/Priority queue. This is a fast queue

// So this Priority queue is given 1st Priority..Even if there's any Operation to be done in callback queue ..p.Q IS given Priority..

// Fetch works in 2 ways..
// Data memory allocation, After that we have OnFulfilled Array, and  On Rejection Array. Now these are obviously..promises wale hi hain..onresolve and onrejct..
// Abhi hum yeh 2 arrays main value push krna allowed nahi hain. These are not accessible to us..Yeh sabh private fields hote hain


// Next..we have 2nd Part..which is webApis/NodeAPis And Network Request


// Async function with a fetch

// async function logMovies() {
//     const response = await fetch("http://example.com/movies.json");
//     // console.log(response);
//     // This does not return the response data dierctly..instead it returns a promise..
//     const movies = await response.json();
//     console.log(movies);
// }
// logMovies();

// async function logMovies() {
//     const response = await fetch("http://example.com/movies.json");
//     const movies = await response.json();
//     console.log(movies);
//   }
//   logMovies();

// API for get requests
let fetchRes = fetch(
    "https://jsonplaceholder.typicode.com/todos/1");
        
    // FetchRes is the promise to resolve
    // it by using.then() method
    // fetchRes.then(res =>
    //     res.json()).then(d => {
    //         console.log(d)
    //     })
    fetchRes.then(res => res.json()).then(data => console.log(data));
    
    
