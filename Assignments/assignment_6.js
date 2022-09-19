
// 1. implementation of rectangle class


class Rectangle{
  constructor(length, breath){
    this.length = length;
    this.breath = breath;
  };

  area(){
    return console.log(this.length*this.breath);
  }
}

class Square extends Rectangle{
  constructor(size){
    super(size,size);
  }
}
let objS = new Square(5);
objS.area();

let objR = new Rectangle(4,5);
objR.area();



// 2. function to find nth largest number

let array = [3,45,6,7,23,5,7,8]
function find_largest(n){
  let arr = array;
  arr.sort((a,b)=> b-a);
  return arr[n-1];
}
console.log(find_largest(3));




// 3. dash function between each 2 even numbers

function computeDash(str){
  let result = [str[0]];
for (let i=1; i<=str.length; i++){
  if(str[i-1]%2===0 && str[i]%2===0){
    result.push('-', str[i]);
  }
  else{
    result.push(str[i]);
  }
}
console.log((result.join('')));
}

computeDash(prompt("Enter your number: "))