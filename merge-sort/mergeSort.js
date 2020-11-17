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
    let resultArray = [], leftIndex = 0; rightIndex = 0;

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
    //Concat here because there will be one element remaining from either left OR the right
    return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

// console.log(merge([1,50, 10], [2,14,99, 101]))


//Performance Test
let t1 = performance.now();
console.log(`Merge Recursive Solution #1 ${merge([1,50,10, 104], [2,14,99, 101])}`);
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

let t3 = performance.now();
console.log(`Merge Efficient Solution #2 ${mergeNew([1,50,10, 104], [2,14,99, 101])}`);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`)

//MergeSort Pseudocode