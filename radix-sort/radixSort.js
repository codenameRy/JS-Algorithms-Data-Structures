const { performance } = require('perf_hooks');

//Radix Sort Pseudocode

function getDigit(num, i) {
    //Absolute Value for positive or negative numbers
    //Divide by 10 by the power of i
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  
//   console.log(`Get Digit ${getDigit(7234, 12)}`)
  
  //digitCount(num) - returns the number of digits in num
  //10 to power of n 
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
//   console.log(`Digit Count ${digitCount(7234)}`)
  
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

  //Solution 1
/*Define a function that accepts list of numbers
Figure out how many digits the largest number has
Loop from k = 0 up to this largest number of digits
For each iteration of the loop:
Create buckets for each digit (0 to 9)
place each number in the corresponding bucket based on its kth digit
Replace our existing array with values in our buckets, starting with 0 and going up to 9
return list at the end!*/

  function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < nums.length; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i]);
        }
        console.log(digitBuckets)
    }
  }



  console.log(`Radix Sort ${radixSort([280,42, 8421, 200383, 12,102])}`)