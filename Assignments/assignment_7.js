
// 1 - Input a String S, and check its length and if the length is greater than 4,truncate the input String and output the result

let S = prompt("Input a word: ")
// let S = "Icecream"
if (S.length > 4) {
  return console.log(S.substring(0, 3).concat("..."))
}
else {
  return console.log(S)
}

// 2. Input a String S with multiple words, and remove whitespaces and output the result

let S = prompt("Input a statement: ")
// let S = "Hii Boy"
return console.log(S.replace(" ", ""))

//3. Input a String S with two words, and replace first word with second word and display the result

let S = prompt("Input a 2 words: ")
// let S = "Hii Boy"
return console.log(S.split(" ")[1] + " " + S.split(" ")[0])

// 4. Input a String S with a word, and replace character “a” with “x” and display the result

let S = prompt("Input a word or statement: ")
//let S = "apple"
return console.log(S.replace("a", "x"))

//5. What string method can be used to convert string into array ?

// Array.from method can be used to convert string into array
let S = "apple"
return console.log(Array.from(S))

//6. What string method can be used to check the occurrence of a specified text in a string?

//includes method can be used

let S = "HarryPotter"
return console.log(S.includes("ter"))

//7. How can you break a string to a newline in Javascript ?
//use can use \n

let S = "We are \nrunning late"
console.log(S)

//8. Write a Javascript function to test whether the first character of a string is lowercase.
//let S = "Harry"
function isLower(S) {
  return console.log(Array.from(S.toLowerCase())[0] === Array.from(S)[0] ? "Yes" : "No")
}

isLower("marry")

//9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc (any combination) using string methods. How will you handle that ?

// you can convert to string to either upper, lower or capital case

let S = prompt("Enter correct verict: ")
//let S = "Yes"
console.log(S.toUpperCase())


//10. Given a String S, achieve following tasks 
//let S = prompt("Enter a string:")
let S = "Hello World"
// a) Convert the String into upper case.
console.log(S.toUpperCase());
// b) Convert only the first character to uppercase.
console.log(S.charAt(0).toUpperCase() + S.slice(1).toLowerCase());
// c) Convert the String into lower case.
console.log(S.toLowerCase())
// d) Break the string into two halves and swap them.
console.log(S.split(" ")[1] + " " + S.split(" ")[0])
// e) Count the repeating characters.
function countrepchar(S) {
  let rep_char = [];
  for (let i = 0; i < S.length; i++) {
    let count = 0;
    for (let j = 0; j < S.length; j++) {
      if (S[i] == S[j] && i > j) {
        break;
      }
      if (S[i] == S[j]) {
        count++;
      }
    }
    if (count > 1) {
      rep_char.push(S[i])
    }
  }
  return console.log(rep_char.length)
}
countrepchar(S)

// f) Reverse the string
console.log(S.split('').reverse().join(''))

