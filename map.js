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


// Our map function will take in two arguments:
// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.

const map = function(array, callback) {
  const result = [];

  for (item of array) {
    result.push(callback(item));
  }
  return result;
};

const words = ["Elvis", "is", "a", "fat", "rabbit"];
assertArraysEqual(map(words, word => word[0]), ["E", "i", "a", "f", "r"]); // should pass/true

const numbers = [11, 22, 02, 03, 05];
assertArraysEqual(map(numbers, number => number), [23, 45, 1, 2]); // should fail/false