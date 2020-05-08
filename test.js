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
  it("it removes prepositions of a given phrase in spanish", () => {
    const phrase = "De la casa de Juan a la casa de Pedro";
    const locale = "ES";
    expect(parser({ phrase, locale })).toEqual([
      "LA",
      "CASA",
      "JUAN",
      "LA",
      "CASA",
      "PEDRO",
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
