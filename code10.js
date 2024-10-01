// refer html code - simple2.html and css file - simple2.css
// Create 3 divs with common class name - “box”. Access them & add some unique text to each of them.

let divs=document.querySelectorAll(".box");
console.dir(divs);

idx=1;
for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}