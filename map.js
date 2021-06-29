const assertArraysEqual = require("./assertArraysEqual");

const map = function(array, callback) {
  const result = [];

  for (item of array) {
    result.push(callback(item));
  }
  return result;
};

module.exports = map;