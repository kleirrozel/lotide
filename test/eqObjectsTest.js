const assert = require("chai").assert;
const eqObjects = require("../head");


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

describe("#eqObjects", () => {
  it("returns true when { a: '1', b: '2'} and { b: '2', a: '1' } are compared", () => {
    assert.deepEqual(eqObjects(ab, ba));
  });

  it("returns false when { a: '1', b: '2'} and { a: '1', b: '2', '3'} are compared", () => {
    assert.deepEqual(eqObjects(ab, abc));
  });
});