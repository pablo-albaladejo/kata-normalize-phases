module.exports = ({ phrase }) => {
  if (phrase == "") return [];
  return phrase.replace(/[^a-zA-Z ]/g, '').toUpperCase().split(" ");
};
