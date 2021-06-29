const assertArraysEqual = require("./assertArraysEqual");

const without = function(array1, array2) {
  let itemsToKeep = [];

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      itemsToKeep.push(array1[i]);
    }
  }
  return itemsToKeep;
}

module.exports = without;