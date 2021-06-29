const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function(sentence) {
  const result = {};
    for (let i = 0; i < sentence.length; i++) {
      if (result[sentence[i]]) {
        result[sentence[i]].push(i);
      } else {
        result[sentence[i]] = [i];
      }
    }
  console.log(result);
  return result;
};

module.exports = letterPositions;