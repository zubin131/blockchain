// 1. Write a program to find whether a given year is a leap year or not

let year = 2022 //change this variable to experiment
//conditional statement
if(year%4===0){
  console.log(`${year} is a leap year`);
}
else
  console.log(`${year} is not a leap year`);

//-------------------------------------------------------------------------//


// 2. convert temperatures to and from celsius, fahrenheit
//function to convert from F to C
function temp_fc(temp_in_fah){
  temp_in_C = (temp_in_fah - 32)*5/9;
  console.log(`${temp_in_fah}°F is ${temp_in_C}°C`);
}

//calling the function for 100°F conversion
temp_fc(100);

//function to convert C to F
function temp_cf(temp_in_C){
  temp_in_fah = (temp_in_C*9/5) + 32;
  console.log(`${temp_in_C}°C is ${temp_in_fah}°F`);
}

//calling the function
temp_cf(37.777777);

//-------------------------------------------------------------------------//


// 3. Finding factorial of a number
function factorial(n=1){
  let factor = 1
  while(n>1){
    factor = factor*n;
    n--;
  }
  return factor;
}

//calling the function for number 7
let n=7;
console.log(`Factorial of ${n} is ${factorial(n)}`);

//-------------------------------------------------------------------------//

