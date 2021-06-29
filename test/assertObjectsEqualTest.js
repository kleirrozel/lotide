const assert = require("chai").assert;
const assertObjectsEqual = require("../assertObjectsEqual");
const eqObjects = require("../eqObjects");

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

describe("#assertObjectsEqual", () => {
  it("returns true when the keys in object ab and object ba are compared", () => {
    assert.deepEqual(assertObjectsEqual(eqObjects(ab, ba), true));
  });

  it("returns false when the keys in object ab and object abc are compared", () => {
    assert.deepEqual(assertObjectsEqual(eqObjects(ab, abc), false));
  });

});