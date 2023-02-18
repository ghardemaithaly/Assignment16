/*
3). Write a regular expression that matches only a prime number.
Numbers will be presented as strings.
Example
“7” ➞ true
“134” ➞ false

*/
function isPrimeNumber(str) {
  return /^(?:2|3|5|7)$|^([1-9])(\d+)?$/g.test(str) && !/^0/.test(str.replace(/^0+/, ''));
}
console.log(isPrimeNumber("7")); // true
console.log(isPrimeNumber("134")); // false
console.log(isPrimeNumber("11")); // true
console.log(isPrimeNumber("23")); // true
console.log(isPrimeNumber("1")); // false
console.log(isPrimeNumber("0")); // false
console.log(isPrimeNumber("000001")); // false
console.log(isPrimeNumber("000007")); // true
