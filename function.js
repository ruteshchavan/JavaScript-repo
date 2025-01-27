// function - function is a block of code that performs a specific task , can be invoked(call) whenever needed.
// function are used to minimize the redundancy
// fucntion definition

function print () {
    console.log(`my number is 7`);
    console.log("welcome to dypcet")
}

function call (msg) {    // passing parameter in function
    console.log(msg);
}

function sum (x,y) {
    console.log(x+y)
}

function add(x,y){
    s=x+y;
    return s;
}

print();
call("hello");
call(4+3);
sum(11,4); 

let val= sum(15,8);
console.log(val);


// anonymous function - function defined without a name , often assigned to a variable is called anonymous function.
// we can also pass function as arguments to other funtions. 
let cal=function(x,y){
    return x*y;
}
console.log(cal(4,2));

let total=function(x,y,z,mul){   // function is passed as argument.s
    let cal1=mul(x,y);
    return mul(cal1,z);
}
console.log(total(2,3,4,cal));

