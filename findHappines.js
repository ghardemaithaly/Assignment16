/*
2.) Create a function that finds the word "happiness" in the given
string (not case sensitive). If found, return "Hurray!", otherwise
return "There is no happiness.".
Example
findHappiness(“Work makes me happy”) -> There is no happiness.
findHappiness(“You give me the feeling of happiness”) -> Hurray

*/
function findHappiness(str) {
  if (str.toLowerCase().includes('happiness')) {
    return 'Hurray!';
  } else {
    return 'There is no happiness.';
  }
}

