const { performance } = require('perf_hooks');

//Quick Sort Pseudocode

/*
Call the pivot helper on the array
When the helper returns to you the updated pivot index, 
recursively call the pivot helper on the subarray to the 
left of that index, and the subarray to the right of that index
Your base case occurs when you consider a subarray 
with less than 2 elements

*/

//Pivot Helper Function

function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    };

    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap (arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right) //3

        //left side
        quickSort(arr, left, pivotIndex - 1);
    
        //right side
        quickSort(arr, pivotIndex + 1, right);
    }
    console.log(arr)
    return arr;
    
}

// console.log(quickSort([4,1,8,6,2,7,5,3]));

//   //Performance Test
  let t1 = performance.now();
  console.log(`Pivot Helper Function ${quickSort([4,1,8,6,2,7,5,3])}`);
  let t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

