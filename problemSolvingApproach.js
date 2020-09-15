const {performance} = require('perf_hooks');


//Function that takes two numbers and return their sum

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