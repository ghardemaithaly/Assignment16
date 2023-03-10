/*
8). Create a function that determines whether a string is a valid hex
code. A hex code must begin with a pound key # and is exactly 6
characters in length. Each character must be a digit from 0-9 or an
alphabetic character from A-F. All alphabetic characters may be
uppercase or lowercase.
Examples
isValidHexCode("#CD5C5C") ➞ true
isValidHexCode("#EAECEE") ➞ true
isValidHexCode("#CD5C&C") ➞ false
*/

function isValidHexCode(str) {
  // Check if the string matches the hex code pattern
  return /^#[0-9a-fA-F]{6}$/.test(str);
}
console.log(isValidHexCode("#CD5C5C")); // true
console.log(isValidHexCode("#EAECEE")); // true
console.log(isValidHexCode("#CD5C&C")); // false
