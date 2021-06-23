const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// This should take in a sentence (as a string) and return the count of each of the letters in the sentence
// TIP: You can use for...of loops with strings.
const countLetters = function(strings) {
  const letters = {};

  for (let string of strings) {
    if (string !== "") {
      if (letters[string]) {
        letters[string] += 1;
      } else {
        letters[string] = 1;
      }
    }
  }
  return letters;
};

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("elvis is a fat rabbit"));