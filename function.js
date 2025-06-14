// function - function is a block of code that performs a specific task , can be invoked(call) whenever needed.
// function are used to minimize the redundancy.
// recursive function in js is a function that calls itself.

function print() {
  console.log(`my number is 7`);
  console.log("welcome to dypcet");
}

function call(msg) {
  // passing parameter in function
  console.log(msg);
}

function sum(x, y) {
  console.log(x + y);
}

function add(x, y) {
  s = x + y;
  return s;
}

print();
call("hello");
call(4 + 3);
sum(11, 4);

let val = sum(15, 8);
console.log(val);

// anonymous function - Anonymous function in js are functions that are not declared with name.
// we can also pass function as arguments to other funtions. A callback is a function passed as an argument to another function.
// If we pass less argu. then rest of parameters will become undefined.
// If you pass more argu. then additional arguments will be ignored.
let cal = function (x = 1, y = 2) {
  return x * y;
};
console.log(cal(4, 2));

// anonymous function
let total = function (x, y, z, mul) {
  // function is passed as arguments.
  let cal1 = mul(x, y);
  return mul(cal1, z);
};
console.log(total(2, 3, 4, cal));
