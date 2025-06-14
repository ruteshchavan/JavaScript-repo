// creating and working with object literal
let student = {
  name: "Rutesh chavan",
  age: 22,
  college: "DYPCET",
  message() {
    console.log(`Welcome to ${student.college}`);
  },
};
console.log(student);
console.log(student.name);
student.message();

// to print all the property of object
for (let prop in student) {
  console.log(prop + " : " + student[prop]); // true or false
}

//check if property exists - property_name in object_name
console.log("age" in student);

//de-structuring
let { name, age, college } = student;
console.log(name);
console.log(college);

// Destructuring a object
let emp = {
  fname: "Jay",
  lname: "Shah",
  gender: "Male",
};
let { fname, lname, gender: g } = emp; // gender : g is alias
console.log(fname);
console.log(lname);
console.log(g);

// to delete a property of object
// delete  object.property; eg- delete student.age;

// create object with new keyword
const person = new Object();
person.fname = "Elon";
person.lname = "Musk";
person.company = "Tesla";
console.log(person);

/* 
object is collection of variables
to access only particular value form student object - object["key] ( student["name"] )   or  object.name ( student.name )
to update any key - student[name]= "raja singh";
                    student[age] = student[age] + 1
                    note -  constant object key can be changed but not constant variable.

Autoboxing : automatic conversion of primitives to object.  


*/
