/*
10). Create a function that takes a string, checks if it has the same
number of x's and o's and returns either true or false.

● Return a boolean value (true or false).
● Return true if the amount of x's and o's are the same.
● Return false if they aren't the same amount.
● The string can contain any character.
● When "x" and "o" are not in the string, return true.
Examples
XO("ooxx") ➞ true
XO("xooxx") ➞ false
XO("ooxXm") ➞ true
// Case insensitive.
Notes
● Remember to return true if there aren't any x's or o's.
*/






function XO(string) {
  let count_x = (string.match(/x/gi) || []).length;
  let count_o = (string.match(/o/gi) || []).length;
  return count_x === count_o;
}
console.log(XO("ooxx")); // true
console.log(XO("xooxx")); // false
console.log(XO("ooxXm")); // true
