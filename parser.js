const config = require("./config.json");

module.exports = ({ phrase, locale = "ES" }) => {
  if (phrase == "") return [];

  const { prepositions, pluralsRegx } = config[locale] || config["ES"];

  const localePrepositions = prepositions;

  const removePrepositions = (word) => !localePrepositions.includes(word);

  const fromPluralToSingular = (word) => {
    const removeS = new RegExp(pluralsRegx, "g");
    return word.replace(removeS, "");
  };

  const removeAccents = (word) => word.normalize("NFD");

  return removeAccents(phrase)
    .replace(/[^a-zA-Z ]/g, "")
    .toUpperCase()
    .split(" ")
    .filter(removePrepositions)
    .map(fromPluralToSingular);
};
