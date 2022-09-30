// 1. Carefully observe this example.
// a) Is the InnerFunction() a closure?
// Yes, InnerFunction() is a closure

// b) What is output of this program
// Output will be 100

//2. What is the difference between a closure and a scope ?
/*
Function along with its lexical scope bundled together forms a closure. In other words, closure is a function that captures variables from its lexical scope whereas Scope means where you can access a particular variable or function in our code.
*/

//3. What is a lexical scope and how is it related to closure?
/*Whereever a execution context is created (into the callstack), a lexical environment is also created. Lexical environment is the local memory along with the lexical environment of it's parent. Lexical means in hierarchy / in sequence. As mentioned above, that a closure is formed when the function is bundled along with its lexical scope. That's how they are related.

Let's try to see it's relation to closure using an example:

e.g.
function a(){
  var b=10;
  c();
  function c(){
  }
}
a();
console.log(b)


When we try to run the above code, a global execution context will be created is put onto the callstack. JS then allocates the memory to all global variables and functions. So firstly, inside global execution context, memory will be allocated to function a along with its lexical environment which will be null in this case. It will then invoke the function a which will create another execution context reserving memory for variable b, function c and will create a lexical environment to its parent i.e. global execution context in this case. It will then invoke function c creating another execution context only have lexical environment to its parent (previous execution context). This chain of lexical environment is called as scope chain. In this case, function c is a closure function.
*/

//4. Output of following closure ?
/*for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
  console.log(i); // What is logged?
  }, 1000);
}
*/


//It will print 3 3 times because of closure behaviour. setTimeout function will wait for 1000ms during which the for loop is continuosuly running so until the setTimeout function is called the value of i is already 3 because of the post-increment i++ and the callback function is referring to the same spot in memory. 
