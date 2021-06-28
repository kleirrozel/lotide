const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("returns true when [1, 2, 3] and [1, 2, 3] are compared", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false when [1, 2, 3] and [3, 2, 1] are compared", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it("returns true when ['1', '2', '3'] and ['1', '2', '3'] are compared", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it("returns false when ['1', '2', '3'], ['1', '2', 3] are compared", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

});