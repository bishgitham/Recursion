const { expect } = require("chai");
const sumTotal = require("../recursion/sumTotal");

describe("sumTotal", () => {
  it("returns 1 when passed 1", () => {
    expect(sumTotal(1)).to.eql(1);
  });

  it("adds up all the numbers till passed integer and gives it total sum", () => {
    expect(sumTotal(4)).to.eql(10);
    expect(sumTotal(10)).to.eql(55);
    expect(sumTotal(50)).to.eql(1275);
  });
});
