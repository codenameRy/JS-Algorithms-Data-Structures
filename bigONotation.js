const {performance} = require('perf_hooks');
//Function to calculate the sum of all numbers from 1 up and including n

//Solution 1
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total +=  i;
    }
    return total;
}

//Built-in Timing Functions

let t1 = performance.now();
console.log(addUpTo(1000000000));
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

//Solution 2
function addUpTo2(n) {
    return n * (n + 1) / 2;
  }

  let t12 = performance.now();
  console.log(addUpTo2(1000000000));
  let t22 = performance.now();
  console.log(`Time Elapsed: ${(t22 - t12) / 1000} seconds.`)