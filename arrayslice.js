// slice()- returns a peice of array.   
// slice(start_index,end_index)

//splice()- change orignal array(add,remove,replace).    
//splice(start_index,delete_count,new_element)


let arr=[10,20,30,40,50,60,70];
console.log(arr.slice(1,3)); // prints between index 1 to 3 but dose not print element of index 3.
console.log(arr.slice(3));  // prints elements from index 3 to last index.

arr.splice(1,0,25,30);  // add 25 and 30 from index 1.    
console.log(arr);

arr.splice(1,2);  // deletes 2 elements starting from index 1.
console.log(arr);

arr.splice(1,2,15,25);  // replaces 2 elements starting from index 1.
console.log(arr);
