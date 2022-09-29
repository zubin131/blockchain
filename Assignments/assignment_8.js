// 1. Can we put duplicate values in the set object ?
// No

// 2. Write the syntax for
// a) Creating new set object
let obj = new Set()
// b) Adding new element to set object
obj.add(5)
obj.add(5)
obj.add(1)

// c) Deleting element from set object
obj.delete(1)
console.log(obj)


// 3. Create a set object with four random numbers from 0 to 10. Check if this newly created set object has 8 in it. Use set object methods.
let obj2 = new Set();
obj2.add(4);
obj2.add(5);
obj2.add(9);
obj2.add(3);
console.log(obj2)

//check if it has 8
console.log(obj2.has(8));