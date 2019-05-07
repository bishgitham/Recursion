const { expect } = require("chai");
const sumTotal = require("../recursion/sumTotal");

describe("sumTotal", () => {
  it("returns 1 when passed 1", () => {
    expect(sumTotal(1)).to.eql(1);
  });
});
