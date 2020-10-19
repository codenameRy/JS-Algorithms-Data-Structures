const {
    performance
} = require('perf_hooks');

//Coding Exercise 3: Frequency Counter - sameFrequency
//Write a function called sameFrequency. Given two positive 
//integers, find out if the two numbers have the same frequency of digits

//Solution 1 - Time Complexity O(N)
function sameFrequency(num1, num2) {
    //Change convert numbers to strings 
    let newNum1 = num1.toString();
    let newNum2 = num2.toString();
    //Check length. Return false if different
    if (newNum1.length !== newNum2.length) return false;
    //Create 2 counter variables
    let counter1 = {};
    let counter2 = {};
    //Loop through 2 arrays with "For Of" Assign counter
    for (let num of newNum1) {
         if (counter1[num] = (counter1[num] || 0) + 1);
    }
    for (let num of newNum2) {
        counter2[num] = (counter2[num] || 0) + 1;
    }
    //Check two counters with "For In"
    for (let key in counter1) {
        //Check if key doesn't not compare between counter
        if (!(key in counter2)) {
            return false
        }
        //Check if frequency of counters are the same
        if (counter1[key] !== counter2[key]) return false;
        
    }
    console.log(counter1);
    console.log(counter2);
    return true
}

number1 = 182;
number2 = 821;

//Performance Test
let t6 = performance.now();
console.log(`Same frequency check #2 ${sameFrequency(number1,number2)}`);
let t7 = performance.now();
console.log(`Time Elapsed: ${(t7 - t6) / 1000} seconds.`)

//Coding Exercise 4: Frequency Counter / Multiple Pointers - Are There Duplicates

//Solution 1 - Frequency County
function areThereDuplicates(arr) {
    let counter = {};
    for (let char of arr) {
        if (!counter[char]) {
            counter[char] = 1;
        } else {
            return true
        }
    }
    // console.log(counter)
    return false
}

array = ['a','b','c','d'];

//Performance Test
let t1 = performance.now();
console.log(`Frequency counter approach: Are there duplicates #1 ${areThereDuplicates(array)}`);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

//Solution 3 - Frequency Counter

function areThereDuplicatesNew() {
    let counter = {};
    for(let val in arguments){
        counter[arguments[val]] = (counter[arguments[val]] || 0) + 1
      }
      for (let key in counter) {
          if (counter[key] > 1) return true
      }
      return false
}

array1 = ['a','b','c','d'];
//Performance Test
let t3 = performance.now();
console.log(`Frequency counter approach: Are there duplicates #2 ${areThereDuplicatesNew(array1)}`);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`)

//Solution 3 - ES6 new Set Method
function areThereDuplicatesNew2(arr) {
    return new Set(arr).size !== arr.length;
}

array2 = ['a','b','c','d'];

//Performance Test
let t5 = performance.now();
console.log(`ES6 New Set Method: Are there duplicates #3 ${areThereDuplicatesNew2(array2)}`);
let t51 = performance.now();
console.log(`Time Elapsed: ${(t51 - t5) / 1000} seconds.`)

//Coding Exercise 5: Multiple Pointers - Average Pairs

/*
Write a function called averagePair. Given a sorted array of integers 
and a target average, determine if there is a pair of values in the array 
where the average of the pair equals the target average. There may be more 
than one pair that matches the average target.

Example
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/

//Solution 1 - Multiple Pointers. Time Complexity O(n) and Space Complexity O(1)
function averagePair(arr,num) {
    let left = 0; //Declare left (start) variable
    let right = arr.length - 1; //Declare right (end) variable

    while (left < right) { //while loop
        let average  = (arr[left] + arr[right]) / 2; //Declare average variage
        if (average === num) { //Primary if statement if average equals num
            return `${arr[left]} and ${arr[right]} are the average of ${num}` 
            // return true;
        } else if (average > num) { //Else if average > num. Move pointer on right side to left
            right--;
        } else { //Else if average < num. Move pointer on left side to right
            left++;
        }
    }
    return false;
}

//Performance
let t10 = performance.now();
console.log(`The average pair ${averagePair([1,3,3,5,6,7,10,12,19],8)}`);
let t11 = performance.now();
console.log(`Time Elapsed: ${(t11 - t10) / 1000} seconds.`)

//Coding Exercise 6: Multiple Pointers - isSubsequence

/*Write a function called isSubsequence which takes in two strings and checks 
whether the characters in the first string form a subsequence of the characters 
in the second string. In other words, the function should check whether the 
characters in the first string appear somewhere in the second string, without their order changing.

Examples:
isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
*/

//Solution 1

function isSubsequenceNew(first, second) {
    let firstPointer = 0; // Declare variable for counter of first string
    let secondPointer = 0; //Declare variable for counter of second string
   
    while(first < first.length) { //Loop while first counter is less than first string
      if(first[firstPointer] == second[secondPointer]) {     // Check if letters of the first word are equal to letters of second word
        firstPointer++;      //if so, increment firstPointer
      } else {               //else, increment secondPointer
        secondPointer++;
      }
    }
   
    if(firstPointer === first.length) { //Check if firstPointer equals first.length --> return true
        return true; 
    }
    return false; 
  }

// word12 = 'sang';
// word13 = 'sting';

// //  Performance
// let t14 = performance.now();
// console.log(`The subsequence characters #1 are ${isSubsequenceNew(word12,word13)}`);
// let t15 = performance.now();
// console.log(`Time Elapsed: ${(t15 - t14) / 1000} seconds.`)

//Solution 2 - Iterative - Time Complexity O(N + M) - Space Complexity O(1)
function isSubsequence(str1,str2) {
    if(!str1) return true;

    i = 0;
    for(let j = 0; j < str2.length; j++) {
        if (i == str1.length - 1) return true;
        if ( str1[i] === str2[j]) i++;
    }
    return false;
  }

word1 = 'dlr';
word2 = 'hello world';
  //Performance
let t12 = performance.now();
console.log(`The subsequence characters #2 are ${isSubsequence(word1,word2)}`);
let t13 = performance.now();
console.log(`Time Elapsed: ${(t13 - t12) / 1000} seconds.`)

//Coding Exercise 7: Sliding Window - maxSubarraySum
/*
Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which 
finds the maximum sum of a subarray with the length of the number passed to the function.
Note that a subarray must consist of consecutive elements from the original array. 

In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null

*/

//Solution 1 - Sliding Window - Time Complexity O(N) and Space Complexity O(1)
function maxSubarraySum(arr,num){
      let maxSum = 0; //First Counter
      let tempSum = 0; //Temp counter
      if (arr.length < num) return null; //Edge case if its an invalid entry
      for (let i = 0; i < num; i++) { //Loop to count the first 3 digits and store in variable maxSum
        maxSum += arr[i];
      }
      tempSum = maxSum; //Set tempSum equal to maxSum
      for (let i = num; i < arr.length; i++) { //Loop through n position 
        tempSum = tempSum - arr[i - num] + arr[i]; //Minus previous number and add next number to find sum
        maxSum = Math.max(maxSum, tempSum); //Find the largest sum in the sliding window
      }
      return maxSum;
  }

  //Performance Test
let t20 = performance.now();
console.log(`Max Sub Array Sum is ${maxSubarraySum([100,200,300,400], 2)}`) //700
let t21 = performance.now();
console.log(`Time Elapsed: ${(t21 - t20) / 1000} seconds.`)

//Coding Exercise 8: Sliding Window - minSubArrayLen
/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and 
a positive integer.
This function should return the minimal length of a contiguous subarray of which the sum is greater 
than or equal to the integer passed to the function. 

If there isn't one, return 0 instead

Examples:
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
Time Complexity - O(n)
Space Complexity - O(1)
*/

//Solution 1 - Two Pointers - Time Complexity O(N)
let minSubArrayLen = function(nums, s) {
    let distance = Number.MAX_SAFE_INTEGER;
    let left = 0;
    let sum = 0;
    // left pointer and right pointer defines the window. 
    // the goal is to find the smallest window that has a sum of s or larger.
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]; 
        while (sum >= s) {
            distance = Math.min(distance, right - left + 1);
            sum -= nums[left];
            left += 1;
        }
    }

    return distance === Number.MAX_SAFE_INTEGER ? 0 : distance;
};

//Performance Test
let t24 = performance.now();
console.log(`Minimum Sub Array length is ${minSubArrayLen([1,4,16,22,5,7,8,9,10],39)}`) //3
let t25 = performance.now();
console.log(`Time Elapsed: ${(t25 - t24) / 1000} seconds.`)

  //Solution 2 - Two Pointers - Time Complexity O(N)

function minSubArrayLen2(arr,int) {
    let distance = Number.MAX_SAFE_INTEGER; // sets highest max window size
    let left = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // add to sum while iterating

        while (sum >= int) { // while sum is greater than our limit, int
            distance = Math.min(distance, i + 1 - left); //offset by 1 for index
            sum -= arr[left]; // minus from sum until sum is smaller than int
            left+=  1;
        }
    }
    return distance === Number.MAX_SAFE_INTEGER ? 0 : distance; // If range didnt change return 0
}

  //Performance Test
let t26 = performance.now();
console.log(`Minimum Sub Array length #2 is ${minSubArrayLen2([1,4,16,22,5,7,8,9,10],39)}`) //3
let t27 = performance.now();
console.log(`Time Elapsed: ${(t27 - t26) / 1000} seconds.`)

//Coding Exercise 9: Sliding Window - findLongestSubstring
/*
Write a function called findLongestSubstring, which accepts a string and returns the length 
of the longest substring with all distinct characters.

Examples
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
*/

function findLongestSubstring(str) {
    let strLength = str.length;
    let longest = 0;
    let current = "";

    for (let i = 0; i < strLength; i++) {
        current = current.substring(current.indexOf(str[i]) + 1)
        current += str[i];

        if (current.length > longest) {
            longest = current.length;
        }
    }
    return longest;
}

//Performance Test
let t28 = performance.now();
console.log(`Find Longest Substring is ${findLongestSubstring('rithmschool')}`) //3
let t29 = performance.now();
console.log(`Time Elapsed: ${(t29 - t28) / 1000} seconds.`)

  //Solution 2

  function findLongestSubstringNew(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }

//Performance Test
let t30 = performance.now();
console.log(`Find Longest Substring #2 is ${findLongestSubstringNew('rithmschool')}`) //3
let t31 = performance.now();
console.log(`Time Elapsed: ${(t31 - t30) / 1000} seconds.`)