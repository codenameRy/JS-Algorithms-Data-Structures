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
console.log(`Merge Sort Recursive ${merge([1,50, 10], [2,14,99, 101])}`);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)