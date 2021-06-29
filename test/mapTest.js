const assert = require("chai").assert;
const map = require("../map");

const words = ["Elvis", "is", "a", "fat", "rabbit"];

const numbers = [23, 45, 1, 2];

describe("#map", () => {
  it("returns ['E', 'i', 'a', 'f', 'r'] for ['Elvis', 'is', 'a', 'fat', 'rabbit']", () => {
    assert.deepEqual(map(words, word => word[0]), ["E", "i", "a", "f", "r"]);
  });

  it("returns [23, 45, 1, 2] for [23, 45, 1, 2]", () => {
    assert.deepEqual(map(numbers, number => number), [23, 45, 1, 2]);
  });

});