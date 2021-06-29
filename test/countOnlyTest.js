const assert = require("chai").assert;
const countOnly = require("../head");
const assertEqual = require("../assertEqual");

describe("#countOnly", () => {
  it("returns an object containing counts of everything that the input object listed", () => {
    assert.deepEqual(countOnly["Jason"]);
  });

  it("returns undefined", () => {
    assert.deepEqual(countOnly["Karima"]);
  });

});