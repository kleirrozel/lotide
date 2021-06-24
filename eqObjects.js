// The function eqObjects will take in two objects and returns true or false, based on a perfect match.
// Meaning the objects have identical keys with identical values
// Otherwise, false

// First, use the Object.keys function on both objects and compare their lengths. If not equal, there's no point in going further: return false
// After that check, loop through the keys returned by Object.keys for one of the objects (not both). Use for..of since the keys are an array. 
// Inside our loop, compare both objects' values for that key. Use === to ensure that the types are the same!
// As soon as there is not a match, we can return false
// Our control flow will therefore only get to the end of the loop if all the keys matched. We can and should thus return true at the end (after the loop)

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
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false