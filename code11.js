// create a new button element.Give it a text "click me" , background color of red & text color of white .
// insert the button as the first element inside the body tag.

// refer html file cd11 and 

let bt=document.createElement("button");
bt.innerText="Click me";

bt.style.color="white";
bt.style.backgroundColor="red";

document.querySelector("body").prepend(bt);

