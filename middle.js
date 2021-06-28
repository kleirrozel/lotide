const assertArraysEqual = require("./assertArraysEqual");

const middle = function(array) {
  let mid = [];

  if (array.length === 1 || array.length ===2) {
    return mid;
  } else if (array.length % 2 === 0) {
    let mid1 = array.length / 2;
    let mid2 = mid1 - 1;
    mid.push(array[mid2]);
    mid.push(array[mid1]);
    return mid;
  } else {
    let half = Math.floor(array.length / 2);
    mid.push(array[half]);
    return mid;
  }
};

module.exports = middle;