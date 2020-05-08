module.exports = ({ phrase }) => {
  if (phrase == "") return [];
  return phrase.toUpperCase().split(" ");
};
