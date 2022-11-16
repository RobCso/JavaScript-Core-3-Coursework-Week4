let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  let arabicNumber = 1;
  let expected = "I"
  // Act
  let output = convertToNewRoman(arabicNumber);
  // Assert
  expect(output).toEqual(expected)
});
