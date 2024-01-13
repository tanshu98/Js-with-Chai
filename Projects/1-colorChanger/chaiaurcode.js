// Task - Change the background Color of body when user clicks on any of these buttons.

const buttons = document.querySelectorAll('.button');
// const body = document.body;
const body = document.querySelector('body');

// Now if we wanna loop through these buttons node list.
// Now since its a node list..we can apply for-each loop to these buttons :)

// Next, we have to add something called as event listners..

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);

    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
// This 'e' is a object..
