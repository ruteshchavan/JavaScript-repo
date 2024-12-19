// guess the number
// create a game where user enters a random number. Ask user to guess the game number until user enters the correct value.

let getnumber=25;
let usernumber=prompt("Guess the number");


while(usernumber!=getnumber) {
    usernumber=prompt("you entered wrong number..guess again");
}

console.log("congrats you have guess the correct number...");
