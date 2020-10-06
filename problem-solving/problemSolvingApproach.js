const {performance} = require('perf_hooks');

//Understand the problem
//1 - Function that takes two numbers and return their sum

//O(1) Example
function sumTwo(a, b) {
    return a + b;
}

//Performance Test
let t0 = performance.now();
// console.log(sumTwo(102, 9868));
console.log(sumTwo(1027546222, 928882723654384738636683));
let t1 = performance.now();
console.log(`Time Elapsed: ${(t1 - t0) / 1000} seconds.`)

//O(N)

function sumTwoMethod(...numbers) {
    return numbers.reduce((a,b) => a + b)
}

//Performance Test
let t3 = performance.now();
// console.log(sumTwoMethod(102, 9868));
console.log(sumTwoMethod(1027546222, 928882723654384738636683));
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`)

//Solution 3

function newSum(...numbers) {
    let total = 0;
    numbers.forEach((num)=> (total += num));
      return total;
    }

let t5 = performance.now();
// console.log(sumTwoMethod(102, 9868));
console.log(newSum(1027546222, 928882723654384738636683));
let t6 = performance.now();
console.log(`Time Elapsed: ${(t6 - t5) / 1000} seconds.`)

//Use concrete examples
//Function that takes in a string and returns counts of each character in a string

function stringCount(str) {
    return str.length
}

console.log(stringCount('House'));

//2 - Function that takes a string and returns a count of each character in a string

//Pseudo Code

// do something
// return an object with keys that are lowercase alphanumeric in a string; values should be counts of each character

//Solution 1
function charCount1(str) {
// make object to return at end
    let result = {};
// loop over string, for each character
    for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    //if the char is a number/letter and is a key in object, add one to count
    if (result[char] > 0) {
        result[char]++;
    } 
    //if the char is not a number/letter and not a an object, add it and set value to 1
    else {
        result[char] = 1;
    }
    //if char is something (space, period, etc), don't do anything
}
// return object at end
return result;
}

//Performance Test
let t20 = performance.now();
// console.log(sumTwo(102, 9868));
console.log(charCount1("towersmang"));
let t21 = performance.now();
console.log(`Time Elapsed: ${(t21 - t20) / 1000} seconds.`)
// console.log(charCount1("hello"))


//Solution 1 Refactored
function charCount(str) {
    let result = {};
    // for (let i = 0; i < str.length; i++) {
        for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
                } 
        }
    }
    return result;
}

//Performance Test
let t10 = performance.now();
// console.log(sumTwo(102, 9868));
console.log(charCount("towersmang"));
let t11 = performance.now();
console.log(`Time Elapsed: ${(t11 - t10) / 1000} seconds.`)

//Solution 1 Refactored V2 Regular Expression
function charCount3(str) {
    let result = {};
        for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            result[char] = result[char]++ || 1;
        }
    }
    return result;
}

//Performance Test
let t40 = performance.now();
// console.log(sumTwo(102, 9868));
console.log(charCount3("towersmang"));
let t41 = performance.now();
console.log(`Time Elapsed: ${(t41 - t40) / 1000} seconds.`)

//Solution 2 
function charCount2(str) {
    return str.toLowerCase().split('').reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});
  }

//Performance Test
let t30 = performance.now();
console.log(charCount2("towersmang"));
let t31 = performance.now();
console.log(`Time Elapsed: ${(t31 - t30) / 1000} seconds.`)