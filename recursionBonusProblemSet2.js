const { performance } = require('perf_hooks');

//1 - Reverse
/*
Write a recursive function called reverse which accepts a 
string and returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
*/

//Solution 1 - Recursion

function reverse(arr){
    // if (arr.length === 1) return arr;
    if (!arr.length) return arr; //Boolean
    return reverse(arr.slice(1)).concat(arr[0]);
}

//Performance Test
let t1 = performance.now();
console.log(`Reverse Recursion #1 is ${reverse("paradisezoohouse")}`);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

//Solution 2 - Built-In Method
function reverseNew(arr){
return arr.split("").reverse().join("");
}

//Performance Test
let t3 = performance.now();
console.log(`Reverse Built-In Method #2 is ${reverseNew("paradisezoohouse")}`);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`)

//Solution 3 - Iterative with Incremental for Loop
function reverseNew2(arr){
    let revString = '';
    for (let i = 0; i <= arr.length - 1; i++) {
        revString = arr[i] + revString;
    }
    return revString;
    }
    
//Performance Test
let t5 = performance.now();
console.log(`Reverse Iterative #3 is ${reverseNew2("paradisezoohouse")}`);
let t6 = performance.now();
console.log(`Time Elapsed: ${(t6 - t5) / 1000} seconds.`)

//2 - Palindrome
/*
Write a recursive function called isPalindrome which returns true 
if the string passed to it is a palindrome (reads the same forward and backward). 
Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

*/

//Solution 1 - Recursion
function isPalindromeRec(arr) {
    if (arr.length <= 1) return true;
    if(arr[0] === arr.slice(-1)) return isPalindrome(arr.slice(1,-1))
    return false;
}
// console.log(isPalindromeRec('tacocat'));
// console.log(isPalindromeRec('amanaplanacanalpandemonium'));

//Performance Test
let t7 = performance.now();
console.log(`Palindrom Recursive #1 is ${isPalindromeRec("racecar")}`);
let t8 = performance.now();
console.log(`Time Elapsed: ${(t8 - t7) / 1000} seconds.`)

//Solution 2 - Built-In Method
function isPalindrome(arr) {
    let newArr = arr.split("").reverse().join("");
    return newArr === arr;
}
//Performance Test
let t9 = performance.now();
console.log(`Palindrom Iterative #1 is ${isPalindrome("racecar")}`);
let t10 = performance.now();
console.log(`Time Elapsed: ${(t10 - t9) / 1000} seconds.`)

//3 - Recursive
/*
Write a recursive function called someRecursive which accepts an array 
and a callback. The function returns true if a single value in the array 
returns true when passed to the callback. Otherwise it returns false.


// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
*/

//Solution 1 - Recursion
function someRecursive(arr, callback) {
    if (arr.length === 0) return false;
    if (callback(arr[0])) return true;
    else arr.splice(0,1); return someRecursive(arr, callback)
}

const isOdd = val => val % 2 !== 0;
//Performance
let t11 = performance.now();
console.log(`Recursive Odd Check #1 is ${someRecursive([12,2,6,4], isOdd)}`);
let t12 = performance.now();
console.log(`Time Elapsed: ${(t12 - t11) / 1000} seconds.`)

//Solution 2 - Recursion Refined solution
function someRecursiveNew(arr, callback) {
    if (arr.length === 0) return false;
    if (callback(arr[0])) return true;
    // else arr.splice(0,1); return someRecursive(arr, callback)
    return someRecursiveNew(arr.slice(1), callback)
}

const isOdd2 = val => val % 2 !== 0;
//Performance
let t13 = performance.now();
console.log(`Recursive Odd Check #1 is ${someRecursiveNew([1,2,6,4], isOdd2)}`);
let t14 = performance.now();
console.log(`Time Elapsed: ${(t14 - t13) / 1000} seconds.`)


//4 - Flatten

//5 - Capitalize First

//6 - Nested Even Sum

//7 - Capitalize Words

//8 - Stringify Numbers

//9 - Collect Strings