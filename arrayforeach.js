// callback : callback is a function passed as an argument to another fucntion. 
// foreach in array will pass each element of array to the function.
// higher order function/method - are functions either take another function as a parameter or return another function as output.
/* syntax :
             array_name.forEach(element => {

        })
*/

let arr=[1,2,3,4,5];

arr.forEach(val => {
    console.log(val)
});

let city=['pune','kolhapur','mumbai'];

city.forEach((val , index ,city   ) => {     // 3 parameters value / index  / array (optional)
    console.log(val.toUpperCase() , index , city);
});




