const assert = require("chai").assert;
const countLetters = require("../countLetters");
const assertEqual = require("../assertEqual");

describe("#countLetters", () => {
  it("returns the count of each letter within a given string", () => {
    assert.deepEqual(assertEqual(countLetters("lighthouse in the house")));
  });

  it("returns the count of each letter within a given string", () => {
    assert.deepEqual(assertEqual(countLetters("lelvis is a fat rabbit")));
  });
});