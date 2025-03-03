/* 
Promise is an object that represents the completion or failure of an asynchronous operation.
It is used for handling asynchronous operations, such as making API calls or reading files.
It is a solution to callback hell.

A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

then() and catch() functions are executed when pass function to it when promise will be fullfill or rejected.


*/


let promise= new Promise((resolve,reject) => {
      console.log("I am promise");
});


const call = () =>{
  return new Promise((resolve,reject) =>{
    resolve("success..");
  })
};

// let a=call();
call().then((res)=>{
  console.log("call is made..");
});
