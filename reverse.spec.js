const { expect } = require("chai");
const reverse = require("../recursion/reverse");

describe("Reverse", () => {
  it("it gives a same result if a string has less than two letters", () => {
    const actual = reverse("manchester");
    const expected = "retsehcnam";
    expect(actual).to.eql(expected);
  });
});
