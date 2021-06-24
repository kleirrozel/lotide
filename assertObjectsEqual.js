// Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // console.log(`Example label: ${inspect(actual)}`);

  if (eqObjects(actual, expected) === false) {
    return console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  } else {
  console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  let objKey1 = Object.keys(object1);
  let objKey2 = Object.keys(object2);

  if (objKey1.length !== objKey2.length) {
    return false;
    // break;
  }
  for (const keys of objKey1) {
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
      if (! eqArrays(object1[keys], object2[keys])) {
      return false;
      }
    } else {
      if (object1[keys] !== object2[keys]) {
        return false;
      }
    }
  }
  return true;
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); 