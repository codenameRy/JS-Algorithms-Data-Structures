const { performance } = require('perf_hooks');

//Binary Search Pseudo Code

/*
This function accepts a sorted array and a value
Create a left pointer at the start of the array, and a right pointer at the end of the array
While the left pointer comes before the right pointer:
Create a pointer in the middle
    If you find the value you want, return the index
    If the value is too small, move the left pointer up
    If the value is too large, move the right pointer down
If you never find the value, return -1

*/

//Solution Multiple Pointers
function numSearch(arr,value) {
    let left = 0;
    let right  =  arr.length - 1;

    for(let i = 0; i < arr.length; i++) {
        let midVal = Math.floor((left + right)/2);
        if (arr[midVal] === value) return midVal;
        else if (arr[midVal] < value) left = midVal + 1;
        else right = midVal - 1;
    } 
    return -1;
}

numSearchArr = [ 1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19, 20 ];

//Performance Test
let t1 = performance.now();
console.log(numSearch(numSearchArr,20));
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)


