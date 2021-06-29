const takeUntil = require("../takeUntil");

describe("#takeUntil", () => {
  it("returns [ 1, 2, 5, 7, 2 ]", () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
  });

  it("returns [ 'I've', 'been', 'to', 'Hollywood' ]", () => {
    assert.deepEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ","), [ "I\'ve", "been", "to", "Hollywood" ]);
  });

  it("returns [ 'Elvis', 'is', 'a', 'fat', 'rabbit' ]", () => {
    assert.deepEqual(takeUntil(["Elvis", "is", "a", "fat", "rabbit", ",", "Elvis", "is", "a", "funny", "bunny"], x => x === ","), ['Elvis', 'is', 'a', 'fat', 'rabbit']);
  });
});