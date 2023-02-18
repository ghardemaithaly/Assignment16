/*
6). Create a function that takes a word and returns true if the word
has two consecutive identical letters.
Examples
doubleLetters("loop") ➞ true
doubleLetters("yummy") ➞ true
*/


function doubleLetters(word) {
  // Loop through the characters in the word, comparing each to the one before it
  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i-1]) {
      return true;
    }
  }
  return false;
}
console.log(doubleLetters("loop")); // true
console.log(doubleLetters("yummy")); // true
console.log(doubleLetters("hello")); // true
console.log(doubleLetters("world")); // false
