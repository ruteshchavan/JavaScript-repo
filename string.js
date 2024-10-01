let a="hello";
let b='welcome to js';

// template literals
// using backtiks
// template literal is special type of string.
// in template literals we can write string with variable.

let str=`template literal`;
console.log(str);

//inside string literal we can also print variable
let obj= {
    item:"pen",
    price:10
}

let output=`cost of ${obj.item} is ${obj.price}`;
console.log(output)

console.log(`my number is ${1+2+3}`);

//escape character
console.log(`my number is \n${1+2+3}`);

//str_name.toUpperCase - converts string to uppercase
//str_name.toLowerCase - converts string to lowercase
//str_name.trim() - removes whitespaces of starting and end.

str.toUpperCase()
console.log(str) // output - 'template literal' this will not change the orignal string 
let string=str.toUpperCase();  // we can create new variable that will store new string with new value
console.log(string)

str=str.toUpperCase();   // note- strings are immutable (cannot be changed) and orignal string is immutable.code
console.log(str);

str.slice(1,5); // it will slice the string always mention start and end index.
let str2="js";
let s="hello" + 123;  // string concatination
console.log(s)
let res=str.concat(str2);  // it will concate 2 string.
console.log(res)
