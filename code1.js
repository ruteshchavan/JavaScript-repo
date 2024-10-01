/*  
    # get user to input a number using prompt ("Enter a number"). check if number is a multiple of 5 or not. 

    # alert() - it is a function that displays a message in a dialog box. displays as a pop-up. (one time pop-up).
    # prompt() - it is a function that also displays a message and has a additional input functionality. (receive input from user).

*/

let x=prompt("Enter the number");

if(x%5==0) {
    console.log(x,"is multiple of 5");
}
else{
    console.log(x,"is not multiple of 5");
}
