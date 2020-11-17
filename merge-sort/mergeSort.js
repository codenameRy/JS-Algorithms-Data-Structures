const { performance } = require('perf_hooks');

//Solution 1 - Recursive Approach for one array

function mergeSort(unsortedArray) {
    //Base case - No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
    //Divide the array in half to find the middle
    const middle = Math.floor(unsortedArray.length/2);

    //Divide the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    //Use recursionto merge left and right
    return merge (
        mergeSort(left), mergeSort(right)
    );
}

function merge(left, right) {
    let resultArray = [];
    leftIndex = 0; 
    rightIndex = 0;

    //Concatenate values into the resultsArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < left.length) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
    }
    while (rightIndex < right.length) {
        resultArray.push(right[rightIndex]);
        rightIndex++;
    }
    //Concat here because there will be one element remaining from either left OR the right
    return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

// console.log(merge([1,50, 10], [2,14,99, 101]))


//Performance Test
let t1 = performance.now();
console.log(`Merge Sort Recursive Solution #1 ${mergeSort([1,50,10, 104, 2,14,99, 101])}`);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

//Solution 2 - More Efficient Solution - Time Complexity O(n + m)
function mergeNew(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    //Merge values into results array in order as much as possible for the first array
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
        
    }

    //Merge values that are remaining in the second array
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

// console.log(merge([1,50, 10], [2,14,99, 101]))

//Performance
let t3 = performance.now();
console.log(`Merge Efficient Solution #2 ${mergeNew([1,50,10, 104], [2,14,99, 101])}`);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`)

//MergeSort Pseudocode

/*
Break up the array into halves until you have arrays that are empty or have one element
Once you have smaller sorted arrays, merge those arrays with other sorted arrays until 
you are back at the full length of the array
Once the array has been merged back together, return the merged (and sorted!) array
*/

//Solution 3 - Merge Sort

function mergeNew2(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    //Merge values into results array in order as much as possible for the first array
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
        
    }

    //Merge values that are remaining in the second array
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

function mergeSortNew(arr) {
    if (arr.length <= 1) return arr;

    let middle = Math.floor(arr.length/2);

    let left = mergeSortNew(arr.slice(0,middle));
    let right = mergeSortNew(arr.slice(middle));

    return mergeNew2(left, right)
}


//Performance
let t5 = performance.now();
console.log(`Merge Sort Efficient Solution #2 ${mergeSortNew([1,50,10, 104,2,14,99, 101])}`);
let t6 = performance.now();
console.log(`Time Elapsed: ${(t6 - t5) / 1000} seconds.`)