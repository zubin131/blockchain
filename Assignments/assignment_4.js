// Assignment 4
function matchHouses(step){
  let result = 0;
  if(step===0){
    return 0;
  }
  else if(step===1){
    result = 6;
    return console.log(result);
  }
  else if(step>1){
      result = 6 + (step-1)*5;
      return console.log(result);
    }
  else {
    console.log("Please enter a valid number")
  }
  }

let step = parseInt(prompt("Enter the number of steps: "))
matchHouses(step)
// matchHouses(1)
// matchHouses(4)
// matchHouses(87)
