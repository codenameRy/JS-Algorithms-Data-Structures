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

//Solution 1 -  Naive (Not Optimized)
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


numArr = [2,9,10,1];

//Performance Test
let t1 = performance.now();
console.log(`Bubble Sort Naive ${bubbleSortNaive(numArr)}`);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

//Solution 2 Optimized
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

numArr2 = [2,9,10,1];

//Performance Test
let t3 = performance.now();
console.log(`Bubble Sort New ${bubbleSort(numArr2)}`);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`)

