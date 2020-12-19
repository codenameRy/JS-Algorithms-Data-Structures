const { performance } = require('perf_hooks');

//   //Performance Test
let t1 = performance.now();
console.log();
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)