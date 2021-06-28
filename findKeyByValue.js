const assertEqual = require("./assertEqual");

const findKeyByValue = function(object, value) {
  let keyValues = Object.keys(object);

  for (let item of keyValues) {
    if (object[item] === value) {
      return item;
      break;
    }
  }
};

module.exports = findKeyByValue;