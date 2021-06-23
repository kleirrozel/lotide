// TEST/ASSERTION FUNCTIONS
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let value = 0; value < array1.length; value ++) {
    if (array1[value] !== array2[value]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) { 
    console.log(`✅✅✅Equal: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌NOT Equal: ${array1} !== ${array2}`);
  }
};

// TO DO: Implement middle which will take in an array and return the middle-most element(s) of the given array.
// One or two elements: Return an empty array
// Odd number of elements: A single middle element should be returned
// Even number of elements: Two elements in the middle should be returned

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
}

// TEST CODE
console.log(middle([1])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]