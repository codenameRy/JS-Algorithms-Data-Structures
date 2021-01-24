const { performance } = require('perf_hooks');

//   //Performance Test
let t2 = performance.now();
console.log();
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t2) / 1000} seconds.`)