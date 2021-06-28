const assert = require("chai").assert;
// const assertEqual = require("../assertEqual");
const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
};

describe("#findKeyByValue", () => {
  it("returns The Wire for drama", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns Brooklyn Nine-Nine for Comedy", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });

  it("returns The Expanse for Sci-Fi", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });
});

