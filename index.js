// Write a function that accepts two numbers as parameters, and returns the sum.
function sum(i, j){
    return i + j
}
console.log(sum(1, 3))
console.log(sum(20, 54))

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function numbers(i, j, k){
    return Math.max(i, j, k)
}
console.log(numbers(10, 20, 500))
console.log(numbers(2, 3, 5))

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. 
// (Return the string "even" or "odd");
function number(i) {
    if( i % 2 === 0 ) {
        return("even")
    }
    else {
        return("odd")
    }
}
console.log(number(1))
console.log(number(2))

// Write a function that accepts a string as a parameter. 
// If the length of the string is less than or equal to twenty characters long, 
    // return the string concatenated with itself (string + string). 
// If the string is more than twenty characters long, return the first half of the string. 
// You will need to use a string method or two:
// -slice()
// -concat() (optional)
function stringfunction(string) {
    if (string.length <= 20) {
      return string.concat(string)
    } 
    else {
      var half = string.length / 2;
      return string.slice(0, half);
    }
  }
console.log(stringfunction("Hello, how are you?"));
console.log(stringfunction("I am doing great! I ate pie today!"));

// Write a function that accepts a number ‘n’ as a parameter. 
// Then print the first ‘n’ Fibonacci numbers and return their sum.
// The first numbers are:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// So if n were 6, the sum of 1+1+2+3+5+8 would be 20.
// Don't hardcode the sequence.
let n = 12;
var fibonacci_series = function (n) { 
  if (n===1) {
    return [1];
  } 
  else if (n===2) {
    return [1, 1];
  }
  else {
    var series = fibonacci_series(n - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
  } 
}
console.log(fibonacci_series(n));
const array = fibonacci_series(n);
let sumFib = 0;
for (let i = 0; i < array.length; i++) {
    sumFib += array[i];
}
console.log(sumFib);

// Write a function that accepts a string as a parameter. 
// Return the most frequently occuring letter in that string. 
// ( White spaces count as a letter )
function checkString(string) {
  let stringLength = string.length;
  let stringArray = string.toLowerCase().split("");
  let mainLetter = "";
  let mainCount = 0;
  for( let i = 0; i < stringLength; i++ ) {
      if( mainCount < string.toLowerCase().split( stringArray[i]).length - 1 ) {
          mainCount = string.toLowerCase().split( stringArray[i]).length - 1;
          mainLetter = stringArray[i];
      }
  }
  if( mainLetter === " ") {
      mainLetter = "Spaces";
  }
  const str = mainLetter + " is the most frequently occuring letter in the string.";
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  console.log(str2)
}
checkString("Busy Bumble Bees");