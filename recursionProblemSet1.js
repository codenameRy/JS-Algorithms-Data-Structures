const { performance } = require('perf_hooks');
//1 - Power

function powerN(base,exp) {
    if (exp === 0) return 1;
    return base ** exp;
}

// console.log(powerN(3,2))

//Performance Test
let t1 = performance.now();
console.log(`Power exponential #1 is ${(powerN(3,2))}`);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

//Solution 2 - Recursion
function powerN2(base,exp) {
    if (exp === 0) return 1;
    return base * powerN2(base, exp - 1);
}

//Performance Test
let t3 = performance.now();
console.log(`Power exponential recursion#2 is ${(powerN2(3,100))}`);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`)

//Solution 2 - Recursion
function powerN3(base,exp) {
    return Math.pow(base,exp)
}

//Performance Test
let t5 = performance.now();
console.log(`Power exponential #3 is ${(powerN3(3,100))}`);
let t6 = performance.now();
console.log(`Time Elapsed: ${(t6 - t5) / 1000} seconds.`)

//2 - Factorial

//Solution 1 - Recursion

function factorial(num){
    if (num === 0) return 1;
    return num * factorial(num - 1);
 }

 //Performance Test
let t7 = performance.now();
console.log(`Factorial #1 is ${(factorial(4))}`);
let t8 = performance.now();
console.log(`Time Elapsed: ${(t8 - t7) / 1000} seconds.`)

//3 - Product of Array

/*
roductOfArray
Write a function called productOfArray which takes in an 
array of numbers and returns the product of them all.
*/

//Solution 1 - Recursion
function productOfArray(num){
    if (num.length === 0) return 1;
    return num.pop() * productOfArray(num)
}

let prodArr1 = [1,2,3,4,8,100];

//Performance
let t9 = performance.now();
console.log(`Product of array Recursion #1 is ${productOfArray(prodArr1)}`);
let t10 = performance.now();
console.log(`Time Elapsed: ${(t10 - t9) / 1000} seconds.`)

//Solution 2 - Iterative
function productOfArrayNew(num){
    let product = 1;
    let numLength = num.length;
    for (let i = 0; i < numLength; i++) {
        product *= num[i];
    }
    return product;
}

let prodArr = [1,2,3,4,8,100];

//Performance
let t11 = performance.now();
console.log(`Product of array Iterative #2 is ${productOfArrayNew(prodArr)}`);
let t12 = performance.now();
console.log(`Time Elapsed: ${(t12 - t11) / 1000} seconds.`)

//4 - Recursive Sum Range

/*
// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 
*/

function recursiveRange(num){
    if (num === 1) return 1;
    return num + recursiveRange(num - 1)
 }

 //Performance
let t13 = performance.now();
console.log(`Sum range Recursive #1 is ${productOfArrayNew(6)}`);
let t14 = performance.now();
console.log(`Time Elapsed: ${(t14 - t13) / 1000} seconds.`)