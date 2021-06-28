// // TEST/ASSERTION FUNCTIONS
// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let value = 0; value < array1.length; value ++) {
//     if (array1[value] !== array2[value]) {
//       return false;
//     }
//   }
//   return true;
// };

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