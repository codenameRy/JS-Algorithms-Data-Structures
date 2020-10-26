const { performance } = require('perf_hooks');

//Bubble Sort - A sorting algorithm where the largest values bubble up to the top!

//Swapping Functionality

//ES5
function swap(arr, indx1, indx2) {
    let temp = arr[indx1];
    arr[indx1] = arr[indx2];
    temp = arr[indx2];
}

// const swap = (arr, indx1, indx2) => {
//     [arr[indx1],arr[indx2]] = [arr[indx2],arr[indx1]];
// }

//Solution 1 Naive (Not Optimized) - - Time Complexity O(N)
function bubbleSortNaive(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                // swap(arr, j, j+1);
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

//Performance Test
let t1 = performance.now();
console.log(`Bubble Sort Naive ${bubbleSortNaive([2,9,10,1])}`);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

//Solution 2 Decrementing - Time Complexity O(N)2
function bubbleSort(arr) {
    //Start looping from with a variable called i the end of the array towards the beginning
    for (let i = arr.length; i > 0; i--) {
        //Start an inner loop with a variable called j from the beginning until i - 1
        for (let j = 0; j < i - 1; j++) {
            //If arr[j] is greater than arr[j+1], swap those two values!
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

//Performance Test
let t3 = performance.now();
console.log(`Bubble Sort New ${bubbleSort([2,9,10,1])}`);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`)

//Solution 3 ES6 Decrementing - Time Complexity O(N2)
function bubbleSortES6(arr) {
    const swap = (arr, indx1, indx2) => {
        [arr[indx1],arr[indx2]] = [arr[indx2],arr[indx1]];
    }
    //Start looping from with a variable called i the end of the array towards the beginning
    for (let i = arr.length; i > 0; i--) {
        //Start an inner loop with a variable called j from the beginning until i - 1
        for (let j = 0; j < i - 1; j++) {
            //If arr[j] is greater than arr[j+1], swap those two values!
            if (arr[j] > arr[j+1]) {
                swap(arr,j,j+1)
            }
        }
    }
    return arr;
}

//Performance Test
let t5 = performance.now();
console.log(`Bubble Sort ES6 ${bubbleSortES6([2,9,10,1])}`);
let t6 = performance.now();
console.log(`Time Elapsed: ${(t6 - t5) / 1000} seconds.`)

//Solution 4 - Optimized to check for No swaps - Time Complexity O(N)
function bubbleSortLatest(arr) {
    let noSwaps;
    for (let i = arr.length; i < 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

//Performance Test
let t7 = performance.now();
console.log(`Bubble Sort No Swaps Check ${bubbleSortLatest([8,1,2,3,4,5,6,7])}`);
let t8 = performance.now();
console.log(`Time Elapsed: ${(t8 - t7) / 1000} seconds.`)

