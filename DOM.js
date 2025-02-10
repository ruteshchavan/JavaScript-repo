// DOM is tree like structure where we can access html code.
// we use js to make dynamic changes into our webpage.
// js helps in animating and functioning the webpage and also adds interactivity.
// DOM is used to make dynamic changes into our webpages.

console.log(document.location)    // returns the file location of file , url etc..

console.log(document.title)    // returns title of page
// document.title="Hello";   // changes the title of document

console.log(document.domain)   // returns the domain

console.log(document.querySelector('h1'));

console.log(document.querySelector('button').classList);  // returns the classname 
// console.log(document.querySelector('button').classList.add('btn2'));  // add another class
console.log(document.querySelector('button').classList.remove('btn'));  // removes the class

let a=document.createElement('h2');   // create new element 
console.log(a);


