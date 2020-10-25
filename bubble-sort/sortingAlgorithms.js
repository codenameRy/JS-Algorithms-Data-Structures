const { performance } = require('perf_hooks');

//Sorting Algorithm

function sort(arr) {
return arr.sort()
}

numList = [23,45,6,12,13];

//Performance Test
let t1 = performance.now();
console.log(sort(numList));
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)