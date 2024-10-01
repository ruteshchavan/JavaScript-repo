/* 
Qs. Create a toggle button that changes the screen to dark-mode when clicked &light-mode clicked again.
# refer code toggle.html
*/

let bt=document.querySelector("button");
let mode="light";  // variable created to check the mode.

bt.addEventListener("click", () =>{
    if(mode==="light"){
        mode="dark";
        document.querySelector("body").style.backgroundColor="black";
        // document.querySelector("button").style.backgroundColor="black";
        // document.querySelector("button").style.color="white";


    }
    else{
        mode="light";
        document.querySelector("body").style.backgroundColor="white";
        // document.querySelector("button").style.backgroundColor="white";
        // document.querySelector("button").style.color="black";
    }

    console.log(mode);
});

