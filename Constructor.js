// In js a constructor function is used to create objects.
// a constructor function should be called only with "new" operator.

function Person(first, last) {
  this.firstname = first;
  this.lastname = last;
}

// two objects created
const a = new Person("Front", "end");
const b = new Person("Cloud", "computing");

console.log(a);
console.log(b);
