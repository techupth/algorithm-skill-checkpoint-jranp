// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
  const maxCharacters = {};
  let maxChar = "";

  for (const cha of str) {
    if (maxCharacters[cha]) {
      maxCharacters[cha].push(cha);
    } else {
      maxCharacters[cha] = [cha];
    }
    if (!maxChar || maxCharacters[cha].length > maxCharacters[maxChar].length) {
      maxChar = cha;
    }
  }
};

getMaxCharacters("twetwetewteweeeee");
