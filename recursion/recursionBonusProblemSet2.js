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

//Solution 4 - Recursion
function capitalizeFirstNew2 (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirstNew2(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}

//Performance
let t29 = performance.now();
console.log(`Capitalize First word #4 Recursion is ${capitalizeFirstNew2(['car','taco','banana','house','tremendous'])}`);
let t30 = performance.now();
console.log(`Time Elapsed: ${(t30 - t29) / 1000} seconds.`)

//6 - Nested Even Sum
/*
Write a recursive function called nestedEvenSum. Return the sum of all even numbers 
in an object which may contain nested objects.
*/

//Solution 1 - For Loop Recursion
function nestedEvenSum (obj) {
  var keys = Object.keys(obj);
  var result = 0;
  for (var i = 0; i < keys.length; i++) {
      var val = obj[keys[i]];
      if (typeof val === "number" && val % 2 === 0) {
          result += val;
      } else if (val instanceof Object && Object.keys(val).length > 0) {
          result += nestedEvenSum(val);
      } else {
          // Ignore all other values
      }
  }
  return result;
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

//console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10

//Performance
let t31 = performance.now();
console.log(`Nested Sum Even Numbers #1 Recursion is ${nestedEvenSum(obj1)}`);
console.log(`Nested Sum Even Numbers #1 Recursion is ${nestedEvenSum(obj2)}`);
let t32 = performance.now();
console.log(`Time Elapsed: ${(t32 - t31) / 1000} seconds.`)



//Solution 2 - For In Recursion

function nestedEvenSumNew (obj, sum=0) {
  for (var key in obj) {
      if (typeof obj[key] === 'object'){
          sum += nestedEvenSumNew(obj[key]);
      } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
          sum += obj[key];
      }
  }
  return sum;
}

var obj3 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj4 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

// console.log(nestedEvenSum(obj3)); // 6
// console.log(nestedEvenSum(obj4)); // 10

//Performance
let t33 = performance.now();
console.log(`Nested Sum Even Numbers #1 Recursion is ${nestedEvenSumNew(obj3)}`);
console.log(`Nested Sum Even Numbers #1 Recursion is ${nestedEvenSumNew(obj4)}`);
let t34 = performance.now();
console.log(`Time Elapsed: ${(t34 - t33) / 1000} seconds.`)

//7 - Capitalize Words
/*
Write a recursive function called capitalizeWords. Given an array of words, 
return a new array containing each word capitalized.
*/

function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
}

let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

//Performance
let t35 = performance.now();
console.log(`Capitalize Words #1 Recursion is ${capitalizeWords(words)}`);
let t36 = performance.now();
console.log(`Time Elapsed: ${(t36 - t35) / 1000} seconds.`)


//8 - Stringify Numbers
/*
Write a function called stringifyNumbers which takes in an object and 
finds all of the values which are numbers and converts them to strings. 
Recursion would be a great way to solve this!
*/

function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


// stringifyNumbers(obj)

//Performance
let t37 = performance.now();
console.log(`Stringify #1 Recursion is ${stringifyNumbers(obj)}`);
let t38 = performance.now();
console.log(`Time Elapsed: ${(t38 - t37) / 1000} seconds.`)



//9 - Collect Strings

/*
Write a function called collectStrings which accepts an object and returns 
an array of all the values in the object that have a typeof string
*/

//Solution 1 - Helper Method Recursion Version
function collectStrings(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
      for(var key in o) {
          if(typeof o[key] === 'string') {
              stringsArr.push(o[key]);
          }
          else if(typeof o[key] === 'object') {
              return gatherStrings(o[key]);
          }
      }
  }

  gatherStrings(obj);

  return stringsArr;
}

const objNew = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

// collectStrings(obj2) // ["foo", "bar", "baz"])

//Performance
let t39 = performance.now();
console.log(`Collect Strings #1 Recursion with Helper Method is ${collectStrings(objNew)}`);
let t40 = performance.now();
console.log(`Time Elapsed: ${(t40 - t39) / 1000} seconds.`)

//Solution 2 - Pure Recursion Version
function collectStrings2(obj) {
  var stringsArr = [];
  for(var key in obj) {
      if(typeof obj[key] === 'string') {
          stringsArr.push(obj[key]);
      }
      else if(typeof obj[key] === 'object') {
          stringsArr = stringsArr.concat(collectStrings(obj[key]));
      }
  }

  return stringsArr;
}

const objNew2 = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

//Performance
let t41 = performance.now();
console.log(`Collect Strings #2 Pure Recursion is ${collectStrings2(objNew2)}`);
let t42 = performance.now();
console.log(`Time Elapsed: ${(t42 - t41) / 1000} seconds.`)