const { performance } = require('perf_hooks');

//Linear Search of 12
numArr = [ 5, 8, 1, 100, 12, 3, 12 ];

//Performance Test
let t1 = performance.now();
console.log(numArr.includes(12));
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

//This function accepts an array and a value
// Loop through the array and check if the current array element is equal to the value
// If it is, return the index at which the element is found
// If the value is never found, return -1

//Solution 1 - For Loop
function linearNum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] === num) {
           return arr.indexOf(num)
       }
    }
    return -1
}

numArr2 = [ 5, 8, 1, 100, 12, 3, 16, 30, 45, 1, 56, 40, 12 ];

//Performance Test
let t3 = performance.now();
console.log(linearNum(numArr2, 12))
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`)

//Solution 3 For Each

function linearNumEach(arr, num) {
    for (let val of arr) {
        if (val === num) return arr.indexOf(num);
        
    }
    return -1;
}

numArr3 = [ 5, 8, 1, 100, 12, 3, 16, 30, 45, 1, 56, 40, 12 ];

//Performance Test
let t7 = performance.now();
console.log(linearNumEach(numArr3, 12))
let t8 = performance.now();
console.log(`Time Elapsed: ${(t8 - t7) / 1000} seconds.`)

//Solution 2 Index Of return

function linearNumNew(arr, num) {
    return arr.indexOf(num);
}

numArr4 = [ 5, 8, 1, 100, 12, 3, 16, 30, 45, 1, 56, 40, 12 ];

//Performance Test
let t5 = performance.now();
console.log(linearNumNew(numArr4, 12))
let t6 = performance.now();
console.log(`Time Elapsed: ${(t6 - t5) / 1000} seconds.`)



