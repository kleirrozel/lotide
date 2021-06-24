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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TO DO: Return all the indices (zero-based positions) in the string where each character is found.

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

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").t, [3]); // => should say not equal
assertArraysEqual(letterPositions("elvisbun").b, [5]);