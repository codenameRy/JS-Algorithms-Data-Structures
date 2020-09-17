const {performance} = require('perf_hooks');

//Frequency Counter Pattern
/*function called same, which accepts two arrays. The function should return true 
if every value in the array has it's corresponding value squared in the second array. 
The frequency of values must be the same.
*/

//Example
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

//Solution 1 - Time Complexity N^2
function same(arr1, arr2){
    //Check if lengths of the array match. If not, return false
    if(arr1.length !== arr2.length){
        return false;
    }
    //Loop through array
    for(let i = 0; i < arr1.length; i++){
        //Compare arr1 indexes to arr2 power of 2 
        //indexOf is essentialy a 2nd loop (nested loop)
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        //If it returns -1, return false
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2)
        //Splice out the matching power of 2 in arr2 until arr2 i empty
        arr2.splice(correctIndex,1)
    }
    return true
}

arr1 = [1,2,4];
arr2 = [1,4,16];
// console.log(same(arr1,arr2))

//Performance Test
let t0 = performance.now();
console.log(same(arr1,arr2))
let t1 = performance.now();
console.log(`Time Elapsed: ${(t1 - t0) / 1000} seconds.`)

//Solution 2 - Time Complexity O(n)
function same2(arr3, arr4){
    if(arr3.length !== arr4.length){
        return false;
    }
    //Start with empty object
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    //Loop over every object in the arrays. Add 1 or initialize to 1 with counter
    for(let val of arr3){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr4){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
//Check the power of 2 in frequencyCounter2 to frequencyCounter1. If not, return false
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
//Check the the frequency of power of 2 in frequencyCounter2 to frequencyCounter1. If not, return false
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    return true
}

arr3 = [1,3,4,1];
arr4 = [1,9,16,1];
//Performance Test
let t2 = performance.now();
console.log(same2(arr3,arr4))
let t3 = performance.now();
console.log(`Time Elapsed: ${(t3 - t2) / 1000} seconds.`)