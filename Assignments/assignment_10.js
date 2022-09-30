//1. Are Higher Order functions and Call back functions the same ? If not, briefly explain about both functions.

/*
No, higher order functions and call back functions are not the same. 
Higher order functions are functions that accepts functions as parameters and/or returns a function. Whereas callback functions are a function which is to be executed after another function has finished execution or will be called later. 
*/

//2. Is filter a Higher Order function in Javascript ? If yes, why ?
/*
Yes, filter is a higher order function as it takes another function as a parameter. 

e.g.
*/
let arr = [45, 23, 21, 0, 3, 5]
let a2 = arr.filter((any) => {
  return any < 10
})
console.log(a2)


//3. Give an example of a Higher Order function and a call back function used in the same program.
function add(a, b, handle) {
  let result = a + b;
  handle(result);
}

function print(result) {
  console.log(result);
}

add(4, 5, print)

// In the above case, add is a higher order function and handle is a call back function.

//4. Carefully check the example below:
//a) What will be the output of this program ?
/*
Hello John
Hello Tina
Hello Kale
Hello Max
*/
//b) Which function is a Higher Order function here ?
/*
useFunction is a higher order function in this case and fn is a call back function.
*/

const names = ['John', 'Tina', 'Kale', 'Max']
function useFunction(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}
function argFn(name) {
  console.log("Hello " + name);
}
useFunction(names, argFn);