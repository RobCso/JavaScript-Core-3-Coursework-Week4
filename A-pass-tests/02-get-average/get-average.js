// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let newArray = [];
  numbers.forEach((element) => {
    if (Number.isInteger(element)) {
      newArray.push(element);
    }
  });
  console.log(newArray);
  let sum = newArray.reduce((a, b) => a + b);
  return sum / newArray.length;
}

module.exports = average;

console.log(average([4, "-", 8, 11, "hello", "57", 0, 2]));
