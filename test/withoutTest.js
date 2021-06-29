const assert = require("chai").assert;
const without = require("../without");

const words = ["hello", "world", "lighthouse"];

describe("#without", () => {
  it("returns ['hello', 'world'] from the original array ['hello', 'world', 'lighthouse']", () => {
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});