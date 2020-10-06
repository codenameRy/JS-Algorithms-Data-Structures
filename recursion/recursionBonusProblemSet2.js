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
/*
Write a recursive function called flatten which accepts an array of arrays 
and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
*/

function flatten(arr){
    return arr.flat();
  }

// console.log(flatten([1, 2, 3, [4, 5] ]));

let t15 = performance.now();
console.log(`Flatten Check #1 is ${flatten([1, 2, 3, [4, 5] ])}`);
let t16 = performance.now();
console.log(`Time Elapsed: ${(t16 - t15) / 1000} seconds.`)

//
function flattenNew(arr) {
    let newArr = [];
    return newArr.concat(newArr,arr)
}

// console.log(flattenNew([1, 2, 3, [4, 5] ]));
//Performance
let t17 = performance.now();
console.log(`Flatten Check #2 is ${flattenNew([1, 2, 3, [4, 5] ])}`);
let t18 = performance.now();
console.log(`Time Elapsed: ${(t18 - t17) / 1000} seconds.`)

//Solution 3 - Recursion

function flattenRec(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }

  //Performance
let t19 = performance.now();
console.log(`Flatten Check #2 is ${flattenRec([1, 2, 3, [4, 5] ])}`);
let t20 = performance.now();
console.log(`Time Elapsed: ${(t20 - t19) / 1000} seconds.`)

//Solution 4 - Nest For Loops

function flattenArrNest(myArray) {
var myNewArray3 = [];
for (var i = 0; i < myArray.length; ++i) {
  for (var j = 0; j < myArray[i].length; ++j)
    myNewArray3.push(myArray[i][j]);
    }
}

//Performance
let t21 = performance.now();
console.log(`Flatten Check #2 is ${flattenArrNest([1, 2, 3, [4, 5] ])}`);
let t22 = performance.now();
console.log(`Time Elapsed: ${(t22 - t21) / 1000} seconds.`)

//5 - Capitalize First
/*
Write a recursive function called capitalizeFirst. Given an array of strings, 
capitalize the first letter of each string in the array.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
*/

//Solution 1 - For In Method
function capitalizeFirst(arr) {
    let newArr = []
    for (let letter in arr) {
        // console.log(arr[letter]);
        newArr.push(arr[letter].charAt(0).toUpperCase() + arr[letter].slice(1));
    }
    return newArr;
  }

// console.log(capitalizeFirst(['car','taco','banana']));
  //Performance
let t23 = performance.now();
console.log(`Capitalize First word #1 Iterative is ${capitalizeFirst(['car','taco','banana','house','tremendous'])}`);
let t24 = performance.now();
console.log(`Time Elapsed: ${(t24 - t23) / 1000} seconds.`)

//Solution 2 - For Loop
function uppercase(str)
{
//   var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < str.length; x++){
      newarray1.push(str[x].charAt(0).toUpperCase()+str[x].slice(1));
  }
  return newarray1.join(' ');
}

// console.log(uppercase(['car','taco','banana']))
//Performance
let t25 = performance.now();
console.log(`Capitalize First word #2 Iterative is ${uppercase(['car','taco','banana','house','tremendous'])}`);
let t26 = performance.now();
console.log(`Time Elapsed: ${(t26 - t25) / 1000} seconds.`)

//Solution 3 - Recursion

function capitalizeFirstNew (arr) {
    if(!arr.length) return []
    return [ arr[0].charAt(0).toUpperCase() + arr[0].slice(1), ...capitalizeFirst(arr.slice(1))]
  }

  //Performance
let t27 = performance.now();
console.log(`Capitalize First word #3 Recursion is ${capitalizeFirstNew(['car','taco','banana','house','tremendous'])}`);
let t28 = performance.now();
console.log(`Time Elapsed: ${(t28 - t27) / 1000} seconds.`)

//Solution 3 - Recursion
function capitalizeWordsDos(array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWordsDos(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
   
  }

//Performance
let t29 = performance.now();
console.log(`Capitalize First word #4 Recursion is ${capitalizeWordsDos(['car','taco','banana','house','tremendous'])}`);
let t30 = performance.now();
console.log(`Time Elapsed: ${(t30 - t29) / 1000} seconds.`)

//6 - Nested Even Sum

//7 - Capitalize Words

//8 - Stringify Numbers

//9 - Collect Strings