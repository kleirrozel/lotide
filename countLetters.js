const assertEqual = require("./assertEqual");

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

module.exports = countLetters;