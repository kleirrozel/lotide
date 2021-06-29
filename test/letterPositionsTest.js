const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("returns 1 as the index of the letter 'e' in the string 'hello'", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("returns 1 as the index of the letter 'e' in the string 'hello'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").t, [4, 14]);
  });

  it("returns 1 as the index of the letter 'e' in the string 'hello'", () => {
    assert.deepEqual(letterPositions("elvisbun").b, [5]);
  });
});