const eqObjects = require ("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected) === false) {
    return console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  } else {
  console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

module.exports = assertObjectsEqual;