const { performance } = require('perf_hooks');
//Power

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

//Factorial

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