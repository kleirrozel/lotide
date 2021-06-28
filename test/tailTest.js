const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns array without the first item", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});