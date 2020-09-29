const {
    performance
} = require('perf_hooks');

//1 - Countdown Recursive Function

function countDownRecursive(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDownRecursive(num);

}

//Performance Test
let t1 = performance.now();
console.log(`Number countdown #1 ${countDownRecursive(5)}`);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

//Count Down
//Iterative approach
function countDownIterative(num) {
    for (let i = num; i > 0; i--) {
        console.log(i)
    }
    console.log("All done");
}


//Performance Test
let t3 = performance.now();
console.log(`Number countdown #2 ${countDownIterative(5)}`);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`)

//2 - Sum Range Recursion Function

function sumRange(num){
    if(num === 1) return 1; 
    return num + sumRange(num-1);
 }

 //Performance Test
let t5 = performance.now();
console.log(`Sum range #1 ${sumRange(100)}`);
let t6 = performance.now();
console.log(`Time Elapsed: ${(t6 - t5) / 1000} seconds.`)

//3 - Factorial Recursion Function

/*
The factorial of a natural number is a number multiplied by 
"number minus one", then by "number minus two", and so on till 1. 
The factorial of n is denoted as n!
*/

//Solution 1 - Recursion
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
//Performance Test
let t7 = performance.now();
console.log(`Factorial recursion #1 ${factorial(308)}`);
let t8 = performance.now();
console.log(`Time Elapsed: ${(t8 - t7) / 1000} seconds.`)
//   alert( factorial(5) ); // 120

//Solution 2 - Recursion
function factorial2(n) {
    if (n === 1) return 1;
    return n * factorial2(n - 1) 
  }
  
//Performance Test
let t11 = performance.now();
console.log(`Factorial recursion #2 ${factorial2(308)}`);
let t12 = performance.now();
console.log(`Time Elapsed: ${(t12 - t11) / 1000} seconds.`)
//   alert( factorial(5) ); // 120

//Solution 2 - Iterative
function factorialNew(n) {
    let total = 1;
    for (let i = 0; i > 0; i--) {
        total *= i;
    }
    return total;
}

//Performance Test
let t9 = performance.now();
console.log(`Factorial iterative #3 ${factorialNew(308)}`);
let t10 = performance.now();
console.log(`Time Elapsed: ${(t10 - t9) / 1000} seconds.`)


//4 - Helper Method Recursion

//Let's try to collect all of the odd values in an array!

function collectOddValues(arr){
    
    let result = [] //Create empty array to store data

    function helper(helperInput){
        if(helperInput.length === 0) { //base case if length equal to 0
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0]) //Push
        }
        
        helper(helperInput.slice(1)) //Excluding the first element 
    }
    
    helper(arr)

    return result;
}

let arr1 = [1,2,3,4,5,6,7,8,9]; //Shrik array until its empty

//Performance Test
let t14 = performance.now();
console.log(`Collect Odd numbers helper recursive function #1 are: ${collectOddValues(arr1)}`);
let t15 = performance.now();
console.log(`Time Elapsed: ${(t15 - t14) / 1000} seconds.`)