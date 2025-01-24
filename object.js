let student= {
    name:"Rutesh chavan",
    age:22,
    college:'DYPCET',
    message(){
        console.log(`Welcome to ${student.college}`);
    }
};
console.log(student);
console.log(student.name);
student.message();

//de-structuring
let{name,age,college}=student;
console.log(name);
console.log(college);

/* 
object is collection of variables
to access only particular value form student object - object[key] ( student["name"] )   or  object.name ( student.name )
to update any key - student[name]= "raja singh";
                    student[age] = student[age] + 1
                    note -  constant object key can be changed but not constant variable.

Autoboxing : automatic conversion of primitives to object.  


*/