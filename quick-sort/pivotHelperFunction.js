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

// First Version
function pivot(arr, start=0, end=arr.length+1){
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  
    var pivot = arr[start];
    var swapIdx = start;
  
    for(var i = start + 1; i < arr.length; i++){
      if(pivot > arr[i]){
        swapIdx++;
        swap(arr,swapIdx,i);
      }
    }
    swap(arr,start,swapIdx);
    return swapIdx;
  }
  
  // Version with ES2015 Syntax
  function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }
  
//   pivot([4,8,2,1,5,7,6,3])

  //Performance Test
let t1 = performance.now();
console.log(`Pivot Helper Function ${pivot([1,50,10, 104, 2,14,99, 101])}`);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)