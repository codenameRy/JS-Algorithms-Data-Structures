const {performance} = require('perf_hooks');
//Function to calculate the sum of all numbers from 1 up and including n

//Solution 1
//O(n) EXAMPLE
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
//O(1) EXAMPLE
function addUpTo2(n) {
    return n * (n + 1) / 2;
  }

let t12 = performance.now();
console.log(addUpTo2(1000000000));
let t22 = performance.now();
console.log(`Time Elapsed: ${(t22 - t12) / 1000} seconds.`)

//Count Up and Down
//O(n) EXAMPLE
function countUpAndDown(n) {
console.log("Going up!");
for (let i = 0; i < n; i++) {
  console.log(i);
}
console.log("At the top!\nGoing down...");
for (let j = n - 1; j >= 0; j--) {
  console.log(j);
}
console.log("Back down. Bye!");
}

let t4 = performance.now();
console.log(countUpAndDown(100));
let t5 = performance.now();
console.log(`Time Elapsed: ${(t5 - t4) / 1000} seconds.`)


//Print All Pairs

function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

let t6 = performance.now();
console.log(printAllPairs(10));
let t7 = performance.now();
console.log(`Time Elapsed: ${(t7 - t6) / 1000} seconds.`)