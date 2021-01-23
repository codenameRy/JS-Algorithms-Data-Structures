const { performance } = require('perf_hooks');

//   //Performance Test
let t2 = performance.now();
console.log();
let t3 = performance.now();
console.log(`Time Elapsed: ${(t3 - t2) / 1000} seconds.`)