const { performance } = require('perf_hooks');

//Selection Sort - Similar to bubble sort, but instead of first placing large values into 
//sorted position, it places small values into sorted position

//Pseudocode
/*
Store the first element as the smallest value you've seen so far.
Compare this item to the next item in the array until you find a smaller number.
If a smaller number is found, designate that smaller number to be the new "minimum" 
and continue until the end of the array.
If the "minimum" is not the value (index) you initially began with, swap the two values.
Repeat this with the next element until the array is sorted. 
*/

//Solution 1
