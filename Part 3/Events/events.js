// Events in js run sequentially!!
// But as everything has an exception..so here's also an exception!

// There are also browser events which can deviate from their natural path..
// Eg..Mouse Events, Keyboard Events ..etc..

// IN pure Js..its not advisable to add inline events..like onClick inside the inline itself..its not a good approach!!..
// Though we do this in react..but for Pure Js..pls dont do this

// Instead we can use onClick here in js..direclty..

// document.getElementById('owl').onclick = function() {
//     alert('Owl is clicked!')
// }

// But again..this approach is also not that good..becoz..here we can only use click functionality..iske alwaa hum kuch bhi nahi krr skate hain.. i.e it doesnt give us much features

// Its advisable to use Event Listners..Yeh hume propogation ki bhi abbility dete hain

// EVENT LISTNERS!!

// Event Listners can listen to multiple events

// document.querySelector('#owl').addEventListener('click', function() {
//     alert('owl clicked again!')
// })

// Event Listners also has a 3rd parameter..i,e true or false..By default it is false..so we dont generally write it..

// THere are few more ways we can write events in js

// attachEvent
// jQuery - ITs has a on method for events

// Event Object -

// document.querySelector("#owl").addEventListener("click", function (e) {
//   console.log(e);
  // SO here mostly we get browser events and evirnoment events(eg: mouse click kaha pe hua..uski position kaha thii etc..)
// });

// Study topics - Type of Events, Timestamp(presnet in e object), default prevented(Prevents default behaviour of any html tag), target, toElement, srcElement, currentTarget, clientX, clientY, screenX, screenY
// altkey, ctrlKey, shiftKey, KeyCode

// True / False in addEventListener(3rd Parameter) -

// document.querySelector('#images').addEventListener('click', function(e) {
//     console.log('clicked inside the ul');
// }, false);

// document.querySelector('#owl').addEventListener('click', function(e) {
//     console.log('owl clicked');
// }, false);

// Event Propogation - Has two things.

// i. Event Bubbling
// ii. Event Capturing

// Now the defualt one is..Event bubbling which is always false..as a 3rd paramter

// Now in line 48..we are selecting imageid..and added a eventListner..
// Now in line 53..we are selecting owl..and added a eventListner..

// So note..the owl is inside the ul..

// So the question is what will happen if we click on owl..which event will get triggerred..How all this works..??

// So by default what happens in Event Bubbling..
// Means..the event will first work on owl and then on parent div i.e ul..with imageid..so from bottom to top

// Event Capturing - From Top to Bottom

// document.querySelector('#images').addEventListener('click', function(e) {
//     console.log('clicked inside the ul');
// }, true);

// document.querySelector('#owl').addEventListener('click', function(e) {
//     console.log('owl clicked');
// }, true);

// Here..when we click on owl..the ul gets clicked first..and then the owl..i.e from top to bottom..This is called as Event Capturing

// Many a times we might want to stop this event bubbling..since we might not want to propogate the event from child to parent..

// So then we use something called as e.stopPropogation() - Stops event Propogation
// This is same as e.preventDefault..

// document.querySelector("#images").addEventListener(
//   "click",
//   function (e) {
//     console.log("clicked inside the ul");
//   },
//   false
// );

// document.querySelector("#owl").addEventListener(
//   "click",
//   function (e) {
//     console.log("owl clicked");
//     e.stopPropagation();
//   },
//   false
// );

// Prevent Default -

// Lets change the defualt setting of google href which we have added in html..

// document.querySelector("#google").addEventListener("click", function (e) {
//   console.log("Google is clicked!");
//   e.stopPropagation();
//   e.preventDefault();
// });



// Task  -  Remove iamges on click..(entire ul should be removed!!)

// Slect the entire ul..also we wanna remove ul along with the imgae when user clicks on the image

document.querySelector('#images').addEventListener('click', function(e) {
    console.log(e.target);
    if(e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeImage = e.target.parentNode;
        removeImage.remove();

    }

    // Another way to remove - 
    // removeImage.parentNode = ul..uska child i.e li..and usme kyaa..toh removeImage
    // removeImage.parentNode.removeChild(removeImage);
} )