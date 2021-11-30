const assert = require('chai').assert;
const middle = require("../middle");
describe("#middle", () => {
    it("returns [] for [1]", () => {
      assert.deepEqual(middle([1]), []);
    });
    it("returns [] for [1,2]", () => {
        assert.deepEqual(middle([1,2]), []); 
      });     
    it("returns [1,2,3] for [2]", () => {
        assert.deepEqual(middle([1,2,3]),[2]); 
      });
    it("returns [1,2,3,4] for [2,3]", () => {
        assert.deepEqual(middle([1,2,3,4]),[2,3]); 
      });
  });

// assert(middle([1]),[]);
// assertArraysEqual(middle([1, 2]),[]);
// assertArraysEqual(middle([1,2,3]),[2]);
// assertArraysEqual(middle([1,2,3,4,5]),[3,4]);
// assertArraysEqual(middle([1,2,3,4]),[3]);
// assertArraysEqual(middle([1,2,3,4,5,6]),[3]);