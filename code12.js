/* 
Qs. Create a toggle button that changes the screen to dark-mode when clicked &light-mode clicked again.
# refer code toggle.html
*/

let bt=document.querySelector("button");
let mode="white";  // variable created to check the mode.

bt.addEventListener("click", () =>{
    if(mode==="white"){
        mode="dark";
        document.querySelector("body").style.backgroundColor="black";
        
    }
    
    else{
        mode="white";
        document.querySelector("body").style.backgroundColor="white";
        
    }

    console.log(mode);
});

