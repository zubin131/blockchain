// Assignment 4

function matchHouses(step){
  let result = 0;
  if(step===1){
    result = 6;
    return console.log(result)
  }
  else{
      result = 6 + (step-1)*5;
      return console.log(result);
    }
  }

matchHouses(1)
matchHouses(4)
matchHouses(87)