// 1. Write a Javascript function to check whether a triangle is equilateral, isosceles or scalene

function triangle_type(a,b,c){
  if (a===b && b===c && a===c){
    console.log("Equilateral");
  }
  else if (a===b || b===c || a===c){
    console.log("Isosceles");
  }
  else{
    console.log("Scalene")
  }
}


//--------------------------------------------------------------------------------------//

/* 2.Write a function using switch case to find the grade of a student based
on marks obtained
a. “S grade” if the marks are between 90 and 100.
b. “A grade” if the marks are between 80 and 90.
c. “B grade” if the marks are between 70 and 80.
d. “C grade” if the marks are between 60 and 70.
e. “D grade” if the marks are between 50 and 60.
f. “E grade” if the marks are between 40 and 50.
g. “Student has failed” if the marks are between 0 and 40.
h. Else output “Invalid marks”.*/

function student_grade(marks){
  if (marks>100 || marks<0){
    console.log("Invalid marks")
  }
  else{
    switch (Math.ceil(marks/10)*10){
      case 100:
        console.log("S grade")
        break
      case 90:
        console.log("A grade")
        break
      case 80:
        console.log("B grade")
        break
      case 70:
        console.log("C grade")
        break
      case 60:
        console.log("D grade")
        break
      case 50:
        console.log("E grade")
        break
      case 40:
      case 30:
      case 20:
      case 10:
      case 0:
        console.log("Student has failed")
        break
      default:
        console.log("Invalid marks")
    }
  }
}
student_grade(78)

//--------------------------------------------------------------------------------------//

//3. Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000

let sum = 0;

for (let i=1; i<1000; i++){
  if(i%3===0 || i%5===0){
    sum+=i
  }
}

console.log(sum)

//--------------------------------------------------------------------------------------//


/* 4. Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100).*/

function prime_numbers_factorial(low, high){
  for (let i=low; i<=high; i++){
    let flag = 0;

    for (let j=2; j<i;j++){
      if(i%j==0){
        flag=1;
        break;
      }
    }

    if(i>1 && flag==0){
      //console.log(i);
      function factorial(n=1){
        let factor=1
        while(n>1){
          factor = factor*n;
          n--;
        }
        return factor;
      }
      console.log(`${i} factorial is ${factorial(i)}`);
    }
  }
}

prime_numbers_factorial(1,10)