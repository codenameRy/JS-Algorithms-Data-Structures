const { performance } = require('perf_hooks');

//Sorting Algorithm

//Solution Sorting numbers in array with Sort Method and a & b variables 
function sortNum(arr) {
return arr.sort((a,b) => (a - b))
}

numList = [23,45,6,12,13,100,1,0.5,84,2];

//Performance Test
let t1 = performance.now();
console.log(sortNum(numList));
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

//Solution Sorting words in array

function sortWords(arr) {
    return arr.sort();
}

wordList = ["Toronto","Austin", "Dubai","Bangkok","Miami"]

//Performance Test
let t3 = performance.now();
console.log(sortWords(wordList));
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`)