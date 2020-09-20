const {
    performance
} = require('perf_hooks');

//Coding Exercise 3: Frequency Counter - sameFrequency
//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits

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
    //Loop through 2 arrays with for ... of. Assign counter
    for (let num of newNum1) {
         if (counter1[num] = (counter1[num] || 0) + 1) {}
    }
    for (let num of newNum2) {
        counter2[num] = (counter2[num] || 0) + 1;
    }
    //Check two counters with for ... in
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
console.log(`Anagram check #2 ${sameFrequency(number1,number2)}`);
let t7 = performance.now();
console.log(`Time Elapsed: ${(t7 - t6) / 1000} seconds.`)

//Coding Exercise 4: Frequency Counter / Multiple Pointers - Are There Duplicates

function areThereDuplicates(...arr) {
    let counter = {};
    for (let char of arr) {
        if (!counter[char]) {
            counter[char] = 1;
        } else {
            return true
        }
    }
    console.log(counter)
    return false
}

array = ['a','b','c','d'];

//Performance Test
let t1 = performance.now();
console.log(`Are there duplicates ${areThereDuplicates(array)}`);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

//Solution 2 - ES6 new Set Method
function areThereDuplicatesNew(arr) {
    return new Set(arr).size !== arr.length;
}

array1 = ['a','b','c','d'];

//Performance Test
let t3 = performance.now();
console.log(`Are there duplicates ${areThereDuplicatesNew(array1)}`);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`)

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
            return `${arr[left]} and ${arr[right]} are the average of ${num} }}` 
            // return true;
        } else if (average > num) { //Else if average > num. Move pointer on right side to left
            right--;
        } else { //Else if average < num. Move pointer on left side to right
            left++;
        }
    }
    return false;
}

let t10 = performance.now();
console.log(`The average pair ${averagePair([1,3,3,5,6,7,10,12,19],8)}`);
let t11 = performance.now();
console.log(`Time Elapsed: ${(t11 - t10) / 1000} seconds.`)

