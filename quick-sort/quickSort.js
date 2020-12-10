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

//Solution 1 - First Element as Pivot Index
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
    //Base case
    if (left < right) {
        let pivotIndex = pivot(arr, left, right) //3

        //left side
        quickSort(arr, left, pivotIndex - 1);
    
        //right side
        quickSort(arr, pivotIndex + 1, right);
    }
    // console.log(arr)
    return arr;
    
}
// var 
// console.log(quickSort([4,1,8,6,2,7,5,3]));

//   //Performance Test
let t1 = performance.now();
console.log(`Quick Sort function #1 - First element Pivot ${quickSort([4,1,8,6,2,7,5,10,3,21])}`);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

  //Solution 2 - Middle Element as Pivot Index

//   var items = [4,1,8,6,2,7,5,10,3,21];
  var items = [280, 42, 8012, 200383, 12, 102];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSortNew(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSortNew(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSortNew(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var sortedArray = quickSortNew(items, 0, items.length - 1);
console.log(sortedArray);

//   //Performance Test
let t3 = performance.now();
console.log(`Quick Sort function #2 - Middle element pivot ${sortedArray}`);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`)

