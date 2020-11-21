const { performance } = require('perf_hooks');

//Pivot Helper / Partition

let arr = [ 5, 2, 1, 8, 4, 7, 6, 3 ]

pivot(arr); // 4;

arr;
// any one of these is an acceptable mutation:
// [2, 1, 4, 3, 5, 8, 7, 6]
// [1, 4, 3, 2, 5, 7, 6, 8]
// [3, 2, 1, 4, 5, 7, 6, 8]
// [4, 1, 2, 3, 5, 6, 8, 7]
// there are other acceptable mutations too!

//Pivot Pseudocode

/*
It will help to accept three arguments: an array, a start index, and an end index 
(these can default to 0 and the array length minus 1, respectively)
Grab the pivot from the start of the array 
Store the current pivot index in a variable (this will keep track of where the pivot should end up)
Loop through the array from the start until the end
If the pivot is greater than the current element, increment the pivot index variable 
and then swap the current element with the element at the pivot index
Swap the starting element (i.e. the pivot) with the pivot index
Return the pivot index
*/