const {performance} = require('perf_hooks');

//1 - Frequency Counter Pattern
/*function called same, which accepts two arrays. The function should return true 
if every value in the array has it's corresponding value squared in the second array. 
The frequency of values must be the same.
*/

//Example
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

//Solution 1 - Time Complexity N^2
function same(arr1, arr2){
    //Check if lengths of the array match. If not, return false
    if(arr1.length !== arr2.length){
        return false;
    }
    //Loop through array
    for(let i = 0; i < arr1.length; i++){
        //Compare arr1 indexes to arr2 power of 2 
        //indexOf is essentialy a 2nd loop (nested loop)
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        //If it returns -1, return false
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2)
        //Splice out the matching power of 2 in arr2 until arr2 i empty
        arr2.splice(correctIndex,1)
    }
    return true
}

arr1 = [1,2,4];
arr2 = [1,4,16];
// console.log(same(arr1,arr2))

//Performance Test
let t0 = performance.now();
console.log(same(arr1,arr2))
let t1 = performance.now();
console.log(`Time Elapsed: ${(t1 - t0) / 1000} seconds.`)

//Solution 2 - Time Complexity O(N) 
function same2(arr3, arr4){
    if(arr3.length !== arr4.length){
        return false;
    }
    //Start with empty object
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    //Loop over every object in the arrays. Add 1 or initialize to 1 with counter
    for(let val of arr3){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr4){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
//Check the power of 2 in frequencyCounter2 to frequencyCounter1. If not, return false
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
//Check the the frequency of power of 2 in frequencyCounter2 to frequencyCounter1. If not, return false
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    return true
};

arr3 = [1,3,4,1];
arr4 = [1,9,16,1];
//Performance Test
let t2 = performance.now();
console.log(same2(arr3,arr4))
let t3 = performance.now();
console.log(`Time Elapsed: ${(t3 - t2) / 1000} seconds.`)

//2 - Anagram
/*Given two strings, write a function to determine if the second string 
is an anagram of the first. An anagram is a word, phrase, or name formed 
by rearranging the letters of another, such as cinema, formed from iceman
*/

/*Example
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
*/

//Solution 2 Function using Every Method Time Complexity O(N)
function isAnagramx (str1,str2){
    const arr1 = str1.toLowerCase().split('').sort();
    const arr2 = str2.toLowerCase().split('').sort();
    return arr1.every((value,index) => value === arr2[index])
}

// wordA = 'texttwisttime';
// wordB = 'timetwisttext';
word1 = 'qwerty';
word2 = 'qeywrt';
// let output2 = isAnagramx('texttwisttime', 'timetwisttext');


//Performance Test
let t4 = performance.now();
console.log(`Anagram check ${isAnagramx(word1,word2)}`);
let t5 = performance.now();
console.log(`Time Elapsed: ${(t5 - t4) / 1000} seconds.`)

//Solution 3 Using Frequency Counter Pattern Time Complexity O(n) 

function anagramChecker(anag1, anag2){
    if(anag1.length !== anag2.length){
        return false;
    }
    //Start with empty objects
    let counter1 = {}
    let counter2 = {}
    //Loop over every object in the arrays. Add 1 or initialize to 1 with counter
    for(let val of anag1){
        counter1[val] = (counter1[val] || 0) + 1
    }
    for(let val of anag2){
        counter2[val] = (counter2[val] || 0) + 1        
    }
//Check if each character in counter2 to appears in counter1. If not, return false
    for(let key in counter1){
        if(!(key in counter2)){
            return false
        }
//Check the the frequency characters in counter2 to counter1. If not, return false
        if(counter2[key] !== counter1[key]){
            return false
        }
    }
    console.log(counter1)
    console.log(counter2)
    return true
};

word1 = 'qwerty';
word2 = 'qeywrt';

//Performance Test
let t6 = performance.now();
console.log(`Anagram check #2 ${anagramChecker(word1,word2)}`);
let t7 = performance.now();
console.log(`Time Elapsed: ${(t7 - t6) / 1000} seconds.`)

//3 - Multiple Pointers

/*Write a function called sumZero which accepts a sorted array of 
integers. The function should find the first pair where the sum is 0. 
Return an array that includes both values that sum to zero or undefined if a pair does not exist

Examples
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
*/

//Solution 1 - Time Complexity O(n^2) / Space Complexity O(1)
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

//Performance Test
let t10 = performance.now();
console.log(sumZero([-3,-2,-1,0,1,2,3]));
let t11 = performance.now();
console.log(`Time Elapsed: ${(t11 - t10) / 1000} seconds.`)

//Solution 2 - Time Complexity O(n) / Space Complexity O(1)
function sumZeroNew(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

//Performance Test
let t12 = performance.now();
// console.log(sumZeroNew([-3,-2,-1,0,1,2,3,10])); // [-3,3]
console.log(sumZeroNew([-3,-2,-1,0,5,10])); //Undefined
let t13 = performance.now();
console.log(`Time Elapsed: ${(t13 - t12) / 1000} seconds.`)

//Count Unique Characters

/*Implement a function called countUniqueValues, which accepts a sorted array, 
and counts the unique values in the array. There can be negative numbers in the 
array, but it will always be sorted.

Examples
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
*/

//Solution 1 - Frequency Counter Pattern For ... of and Object.keys
function countUniqueValues(arr) {
    //Create counter 
    let valueCount = {};
    //Loop through array with for ... of and count unique value
    for (let num of arr) {
        valueCount[num] = 1 + (valueCount[num] || 0);
    }
    console.log(valueCount);
    return Object.keys(valueCount).length;
}

//Performance Test
let t14 = performance.now();
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
let t15 = performance.now();
console.log(`Time Elapsed: ${(t15 - t14) / 1000} seconds.`)

//Solution 2 - Frequency Counter Pattern For loop and Object.keys
function countUniqueValuesNew2(arr) {
    //Create counter 
    let valueCount = {};
    //Loop through array with for ... of and count unique value
    for (let i = 0; i < arr.length; i++) {
        let charIndex = arr[i]
        if (valueCount[charIndex] > 0) {
            charIndex++
        } else {valueCount[charIndex] = 1
        }
    }
    console.log(valueCount);
    return Object.keys(valueCount).length;
}

//Performance Test
let t18 = performance.now();
console.log(countUniqueValuesNew2([1,2,3,4,4,4,7,7,12,12,13])) // 7
let t19 = performance.now();
console.log(`Time Elapsed: ${(t19 - t18) / 1000} seconds.`)



//Solution 3 - Multiple Pointers Approach - Only works with a sorted array
//Time Complexity O(N)
//Store unique values at the beginning

function countUniqueValuesNew(arr) {
    //Counter variable i starts at the left
    var i = 0;
//Loop through array --> j starts at 2nd position index 1
    for (let j = 1; j < arr.length; j++) {
        //Compare index of i and j
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
        // console.log(i,j)
    }
    return i + 1;
}


//Performance Test
let t16 = performance.now();
console.log(countUniqueValuesNew([1,2,3,4,4,4,7,7,12,12,13])) // 7
let t17 = performance.now();
console.log(`Time Elapsed: ${(t17 - t16) / 1000} seconds.`)

