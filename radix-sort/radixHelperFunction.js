//Radix Sort Helper Function
//In order to implement radix sort, it's helpful to build a few helper functions first:

// getDigit(num, place) - returns the digit in num at the given place value

function getDigit(num, i) {
  //Absolute Value for positive or negative numbers
  //Divide by 10 by the power of i
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log(`Get Digit ${getDigit(7234, 0)}`)

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

console.log(mostDigits([23,567,890,12234324,900,720]))