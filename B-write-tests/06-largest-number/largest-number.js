function getLargestNumber(array) {
  let largestNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNumber) {
      largestNumber = array[i];
    }
  }
  return largestNumber;
}

module.exports = getLargestNumber;

console.log(getLargestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(getLargestNumber([10, 9, 8, 7, 6]));
console.log(getLargestNumber([-100, -21, 9, -12, 10]));
