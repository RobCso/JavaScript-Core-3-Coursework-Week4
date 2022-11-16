let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  let array = ["Irina", "Etza", "Daniel"];
  let expected = ["rn", "tz", "Dnl"];
  // Act
  let output = removeVowelsFromWords(array);
  // Assert
  expect(output).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
