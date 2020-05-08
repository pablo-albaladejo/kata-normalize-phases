const parser = require("./parser.js");
const config = require("./config.json");

describe("is valid output", () => {
  it("it returns an empty an array if phrase is empty", () => {
    const phrase = "";
    expect(parser({ phrase })).toEqual([]);
  });
  it("it returns a uppercase of a given a string", () => {
    const phrase = "hi";
    expect(parser({ phrase })).toEqual(["HI"]);
  });
  it("it removes special characters from string", () => {
    const phrase = "abc's test#s";
    expect(parser({ phrase })).toEqual([
      "ABCS",
      "TESTS",
    ]);
  });
  xit("it parses a phrase string", () => {
    const phrase = "Muchachos no ` me gusta el fondo el blanco.$";
    expect(parser({ phrase })).toEqual([
      "MUCHACHO",
      "NO",
      "ME",
      "GUSTA",
      "EL",
      "FONDO",
      "EL",
      "BLANCO",
    ]);
  });
});
