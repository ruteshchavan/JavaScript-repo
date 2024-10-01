/*  Event Object - ( Background Information )
 # It is a special object that has detail's about the event.
 # Event object usally prints the information about the event properties.

 // refer btn2.html file
*/

let button=document.querySelector("button");

button.onclick = (evt)=> {  // created a event
    console.log(evt.type);
    console.log(evt.target);
}

