let removeVowels = require("./remove-vowels");

function removeVowelsFromWords(words) {
  let result = words.map(function (word) {
    return removeVowels(word);
  });

  return result;
}

module.exports = removeVowelsFromWords;

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]
*/

console.log(removeVowelsFromWords(["Irina", "Etza", "Daniel"]));

// changed the helper function removeVowels, changing the input vowels to lowercase
