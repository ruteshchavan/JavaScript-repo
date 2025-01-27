// arrow function - compact way of writing function. i.e writing function in smaller way.

function sum(a,b) {
    return a+b;
}

function mul(c,d) {
    return c*d; 
}

const ArrowSum= (a,b)=> console.log(a+b) ;
ArrowSum(4,5)

const ArrowMul= (c,d) => console.log(c*d);
ArrowMul(4,5)


// a concise way to write anonymous function using arrow function.
let a = (x,y) => x+y;
console.log(a(5,10));

let square=(num) => num*num;
console.log(square(10));    

