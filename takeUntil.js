const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = function(array, callback) {
  const element = [];

  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      element.push(array[i]);
    } else if (callback(array[i])) {
      break;
    } 
  }
  return element;
};

module.exports = takeUntil;