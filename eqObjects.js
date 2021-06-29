const eqArrays = require ("./eqArrays");

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

module.exports = eqObjects;