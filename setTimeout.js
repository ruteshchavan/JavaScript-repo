// Functions for executing code asynchronously after a delay.

//   setTimeout : setTimeout runs once.
// • Syntax: setTimeout(function, time)  time in milliseconds.
// • Cancel: clearTimeout(timerID)

//   setInterval : setInterval runs repeatedly.
// • Syntax: setInterval(function, time)
// • Cancel: clearInterval(intervalID)

let a = () => console.log("Hello Everyone");
setTimeout( a , 2000);

let time=setTimeout(() => {
  console.log("Code Executed...");
}, 3000);

// console.log(`${time}`);  // prints timerID
// clearTimeout(time,8000); 

setInterval((a), 5000);
setInterval((time), 7000);
 