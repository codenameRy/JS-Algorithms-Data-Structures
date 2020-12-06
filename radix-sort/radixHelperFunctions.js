//Radix Sort Helper Function
//In order to implement radix sort, it's helpful to build a few helper functions first:

// getDigit(num, place) - returns the digit in num at the given place value

function getDigit(num, i) {
  //Absolute Value for positive or negative numbers
  //Divide by 10 by the power of i
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log(`Get Digit ${getDigit(7234, 1)}`)

//digitCount(num) - returns the number of digits in num
//10 to power of n 
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(`Digit Count ${digitCount(7234)}`)

//mostDigits(nums) - Given an array of numbers, returns the number of 
//digits in the largest numbers in the list

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {

    //Setting maxDigits as the largest number between the current value of maxDigits and the digitCount of nums[i]
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

console.log(`Most Digits in the data set ${mostDigits([23,567,890,12234324,900,720])}`)