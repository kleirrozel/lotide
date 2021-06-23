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
//TO DO: This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
const without = function(source, itemsToRemove) {

  for (let i = source.length - 1; i >= 0; i--) {
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (source[i] === itemsToRemove[x]) {
        source.splice(i, 1)
      }
    }
  }
  console.log(source);
  return source;
};

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
