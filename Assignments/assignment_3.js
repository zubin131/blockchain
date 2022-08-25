/* 1. Using for loops, write a Javascript program to output the following
pattern -
1
2 3
4 5 6
7 8 9 10*/

let n=4 
let string = "";
let count =1;

for(i=1; i<=n;i++){
  for(let j=1; j<=i; j++){
    string += count;
    count ++;
  }
  string +=" \n"
}
console.log(string)

//-----------------------------------------------------------------------------------------//

/* 2. Write a program to find whether a given number is armstrong number or not-
The Armstrong number is a number that is equal to the sum of cubes of
its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
numbers. Let's try to understand why 153 is an Armstrong number.*/

//let num = "153"

function armstrong_num(num){
  num = num.toString();
  let sum = 0;
  for(i=0;i<num.length; i++){
    sum += num[i]**3;
  }
  //console.log(sum)

  if(sum===parseInt(num)){
    console.log(`${num} is a armstrong number`)
  }
  else{
    console.log(`${num} is not a armstrong number`)
  }
}

armstrong_num(327)

//---------------------------------------------------------------------------------//

/* 3. Write a program to find whether a given number is special number or
not*/

function special_num(num){
    num = num.toString();
    let sum =0;
    for(i=0; i<num.length; i++){
      function factorial(n=1){
        let factor=1
        while(n>1){
          factor = factor*n;
          n--;
        }
        return factor;
      }
      sum += (factorial(parseInt(num[i])));
    }
    if(num==sum){
      console.log(`${num} is a special number`);
      // console.log(sum);
    }
    else{
      console.log(`${num} is not a special number`);
      // console.log(sum);
    }
}

special_num(145)