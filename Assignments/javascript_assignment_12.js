//1. Write a JavaScript program to map Employee Records according to EmployeeIDs. 
//Employee: { id, name, salary }


//employee constructor
function Employee(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
}

//input
let id = [67, 48, 29]
let names = ["Hitanshu", "Ninad", "Amandeep"]
let salary = [75000, 82000, 98000]


let emps = new Employee()
emps.id = id;
emps.name = names;
emps.salary = salary;

//Q1
console.log(emps.id);

//Q2
console.log(emps.id.length)

//Q3
let map = new Map();
map.set(emps.id[0], emps.name[0]);
map.set(emps.id[1], emps.name[1]);
map.set(emps.id[2], emps.name[2]);

map.forEach((v, k) => {
  console.log(k, ":", v);
})

//Q4
let sal = emps.salary;
console.log(sal);

//Q5
const mean = (a, b) => {
  return a + b / 2
}
let mean_sal = sal.reduce(mean)
console.log(mean_sal)


/*2. Write a program in JavaScript to map the student ids, names and scores.
a) Add data for 3 students (use map functions)

b) Get Student Names using map functions
c) Delete Student Scores using map functions
d) Display 1 parameter (only value), 2 parameters (value + key), and 3
parameters (value + key + map) for the student
Sample Input:
"id": [ 1, 2, 3 ]
"name": [ 'Hitanshu', 'Ninad', 'Amandeep' ]
"scores": [ 90, 88, 92 ]
*/
let id_ = [ 1, 2, 3 ]
let name = [ 'Hitanshu', 'Ninad', 'Amandeep' ]
let scores= [ 90, 88, 92 ]



/*3. Write a JavaScript program to iterate over an array inputted by the user using
mapping. Perform the square of all elements in the original array, store the
squares in a new array and make a mapping for the squares and display it.
Sample Input:
[ 1, 2, 3, 4, 5 ]
Explanation:
Original Array = [ 1, 2, 3, 4, 5 ]
New Array = [ 1, 4, 9, 16, 25 ]
Mapping = squares => [ 1, 4, 9, 16, 25 ]
Output:
[ 1, 4, 9, 16, 25 ]
*/


let user_input = [1,2,3,4,5]
let new_array = user_input.map((value)=>{
  return value*value;
});

console.log(new_array)
