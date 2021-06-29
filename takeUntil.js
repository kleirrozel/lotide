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

// TO DO: the callback should only be provided one value: The item in the array.

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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // Expected Output: [ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // Expected Output: [ 'I\'ve', 'been', 'to', 'Hollywood' ]

console.log('---');

const data3 = ["Elvis", "is", "a", "fat", "rabbit", ",", "Elvis", "is", "a", "funny", "bunny"];
const results3 = takeUntil(data3, x => x === ',');
console.log(results3); // Expected Output: [ 'Elvis', 'is', 'a', 'fat', 'rabbit' ]

assertArraysEqual(results1, [1, 2, 5, 7, 2]); //should pass
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']); //should pass
assertArraysEqual(results3, ['Elvis', 'is', 'a', 'funny', 'bunny']); //should fail