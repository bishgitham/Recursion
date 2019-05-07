const { expect } = require("chai");
const factorial = require("../recursion/factorial");

describe("factorial", () => {
  it("returns 1 when passed 1", () => {
    expect(factorial(1)).to.eql(1);
  });
  it("returns factorial of passed number", () => {
    expect(factorial(2)).to.eql(2);
    expect(factorial(3)).to.eql(6);
    expect(factorial(5)).to.eql(120);
    expect(factorial(7)).to.eql(5040);
  });
});
