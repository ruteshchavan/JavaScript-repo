/* prompt user to enter their full name. generate a username for them based on their input. start username with @ , followed 
   by their full name and ending with the fullname.
*/

let user=prompt("enter the input to create username");
let id='@'+ user + user.length;
console.log(id)