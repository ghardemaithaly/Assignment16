/*
4). Create a function that will return an integer number
corresponding to the amount of digits in the given integer num
Examples
num_of_digits(1000) ➞ 4

num_of_digits(12) ➞ 2
num_of_digits(1305981031) ➞ 10
*/
function num_of_digits(num) {
  return num.toString().length;
}
console.log(num_of_digits(1000));   // Output: 4
console.log(num_of_digits(12));     // Output: 2
console.log(num_of_digits(1305981031));  // Output: 10
