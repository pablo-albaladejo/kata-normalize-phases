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
  it("it removes special characters from string", () => {
    const phrase = "abc's test#s";
    expect(parser({ phrase })).toEqual(["ABCS", "TESTS"]);
  });

  it("it removes special accents from string", () => {
    const phrase = "está águila";
    expect(parser({ phrase })).toEqual(["ESTA", "AGUILA"]);
  });

  it("it uses default spanish locale ", () => {
    const phrase = "está águila";
    const locale = "ARG";
    expect(parser({ phrase, locale })).toEqual(["ESTA", "AGUILA"]);
  });

  it("it works with english words", () => {
    const phrase = "please hurry up";
    const locale = "EN";
    expect(parser({ phrase, locale })).toEqual(["PLEASE", "HURRY"]);
  });

  xit("it transform plural to singular word", () => {
    const phrase = "está águila";
    const locale = "ARG";
    expect(parser({ phrase, locale })).toEqual(["ESTA", "AGUILA"]);
  });

  xit("it parses a phrase string", () => {
    const phrase = "Muchachos no ` me gusta el fondo el blancos.$";
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
