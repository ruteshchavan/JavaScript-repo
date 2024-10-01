/* array methods :
    push()- add elements in array at end
    pop() - delete element from end and return 
    toString()- convert an array to string
    shift()- delete element at start of array.
    unshift()- add element start of an array
    map()-creates new array with the reults of some operation.
          value its callback returns are used to form new array. 
    filter()-creates a new array that give true for a condition/filter.
    reduce()-performs some operations & reduce the array to a single
             value.It returns the single value.
*/

//push()
let food=["potato","apple","tomato"];
food.push("banana","cherry","melon");

//pop()
let del=food.pop();
console.log(del);

//toString()
console.log(food.toString());

//unShift()
food.unshift("pineapple");
console.log(food);

//shift()
let y=food.shift();
console.log(food);

//map()
let x=[10,20,30];
let k=x.map((value) => {
   return value;
})
console.log(k);

//filter()
let a=[1,2,3,4,5,6];
let p =a.filter((val)=>{
   return val%2===0
})
console.log(p)

//reduce()
let z=[11,22,33,44];
let output=z.reduce((result,value) => {
        return result + value;
})
console.log(output);

