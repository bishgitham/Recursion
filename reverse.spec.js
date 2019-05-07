const { expect } = require("chai");
const reverse = require("../recursion/reverse");

describe("Reverse", () => {
  it("gives a same result if a string has less than two letters", () => {
    expect(reverse("a")).to.eql("a");
  });

  it("reverses the alphabet of given word", () => {
    expect(reverse("ab")).to.eql("ba");
    expect(reverse("on")).to.eql("no");
    expect(reverse("cat")).to.eql("tac");
    expect(reverse("london")).to.eql("nodnol");
  });

  it("reverses the alphaets exactly as passed, it is canse sensitive", () => {
    expect(reverse("God")).to.not.eql("god");
    expect(reverse("God")).to.eql("doG");
  });

  it("reverses passed numbers only when it is in string", () => {
    expect(reverse("12")).to.eql("21");
  });
});
