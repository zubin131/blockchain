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





