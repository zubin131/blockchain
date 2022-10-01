//1. Write a JavaScript program to take an array as input from the user and calculate the sum of numbers in odd places and the sum of numbers at even places.

let arr = prompt("Enter array of numbers:")
// let arr = [1, 2, 3, 4, 5]
let odd = [];
let even = [];
for (let i = 0; i < arr.length; i += 2) {
  odd.push(arr[i]);
}
for (let i = 1; i < arr.length; i += 2) {
  even.push(arr[i]);
}
let odd_sum = odd.reduce((a, b) => {
  return a + b;
})
let even_sum = even.reduce((a, b) => {
  return a + b;
})

let diff = odd_sum - even_sum
let avg = (arr.reduce((a, b) => {
  return a + b
})) / arr.length

let gcdfn = (a, b) => {
  if (!b) {
    return a;
  }
  return gcdfn(b, a % b);
}

let gcd = gcdfn(odd_sum, even_sum)


// console.log(odd_sum)
// console.log(even_sum)

// a) Print the difference between the two sums
console.log(diff)

//b) Print the number of elements in odd places
console.log(odd.length)

//c) Print the number of elements in even places
console.log(even.length)

//d) Print the average of all elements in the array
console.log(avg)

//e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even Places
console.log(gcd)



//-----------------------------------------------------------------------------------------------
//2. Write a JavaScript program to take 2 arrays from the user and check if the number 4 exists in any of the arrays, or both of the arrays.

let arr1 = prompt("Enter array 1: ")
let arr2 = prompt("Enter array 2: ")


//let arr1 = [1, 2, 3, 5]
//let arr2 = [6, 1, 8, 2]

if (arr1.includes(4) && arr2.includes(4)) {
  console.log("4 in both arrays")
}
else if (arr1.includes(4) && !arr2.includes(4)) {
  console.log("4 in array 1")
}
else if (!arr1.includes(4) && arr2.includes(4)) {
  console.log("4 in array 2")
}
else {
  console.log("4 in none")
}


//-----------------------------------------------------------------------------------------------------

//3. Write a JavaScript program to flatten the array, ie, turns a deep array into a plain array.

let arr3 = [1, 2, [3, 4, [5]]]

function* flatten(array, depth) {
  if (depth === undefined) {
    depth = 1;
  }

  for (const item of array) {
    if (Array.isArray(item) && depth > 0) {
      yield* flatten(item, depth - 1);
    } else {
      yield item;
    }
  }
}

let new_arr = [...flatten(arr3, Infinity)];
console.log(new_arr)

//--------------------------------------------------------------------------------

//4.Write a JavaScript program to take an array as input from the user

let arr4 = prompt("Enter a array: ")
//let arr4 = [1, 2, 3, 2, 3, 4, 5]

//console.log(arr4.every())
let nw = []
let dp = []
for (let i = 0; i < arr4.length; i++) {
  if (nw.includes(arr4[i])) {
    dp.push(arr4[i])
  }
  else {
    nw.push(arr4[i])
  }
}
//a) Store all duplicate elements in a separate array
console.log(dp)

//b) Remove the duplicate elements from the original array
console.log(nw)

//--------------------------------------------------------------------------------

//5. Debug the given JavaScript program and execute the correct code.

function thirdLargest(arr, arr_size) {
  /* There should be
  at least three elements */
  if (arr_size < 3) {
    return document.write(" Invalid Input ");
  }
  let first = arr[0];
  for (let i = 0; i < arr_size; i++) {
    if (arr[i] > first) {
      first = arr[i];
    }
  }

  let second = Number.MIN_VALUE;
  for (let i = 0; i < arr_size; i++) {
    if (arr[i] < first && arr[i] > second) {
      second = arr[i];
    }
  }

  let third = Number.MIN_VALUE;
  for (let i = 0; i < arr_size; i++) {
    if (arr[i] > third && arr[i] < second) {
      third = arr[i];
    }
  }
  document.write("The third Largest " + "element is ", third);
  // console.log(third)
}

let arr = [12, 13, 1, 10, 34, 16]; let n = arr.length;
thirdLargest(arr, n);

