const config = require("./config.json");

module.exports = ({ phrase, locale = "ES" }) => {
  if (phrase == "") return [];

  const localePrepositions = config[locale] && config[locale].prepositions;

  const removePrepositions = (word) => !localePrepositions.includes(word);

  return phrase
    .replace(/[^a-zA-Z ]/g, "")
    .toUpperCase()
    .split(" ")
    .filter(removePrepositions);
};
