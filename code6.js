/*
create a function that takes string as an argument & returns the number of 
vowels in the string.

creat an arrow function to perform same task.

 */

function vowelsCount(str) {
    let count =0;
    for(const x of str){
        if(x=='a' || x=='e' || x=='i' || x=='o' || x=='u' ){
            count++;
        }
    }
    return count;
}