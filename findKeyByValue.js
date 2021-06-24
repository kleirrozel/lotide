const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TO DO: Implement the function findKeyByValue which takes in an object and a value. 
// It should scan the object and return the first key which contains the given value. 
// If no key with that given value is found, then it should return undefined.
// TIP: Use for...of loop
// TIP: Use Object.keys

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
};

const findKeyByValue = function(object, value) {
  let keyValues = Object.keys(object);

  for (let item of keyValues) {
    if (object[item] === value) {
      return item;
      break;
    }
  }
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Parks and Recreation"), "comedy");
