const { performance } = require('perf_hooks');
//Naive Search

/*
Long String = wowomgzomg
Short String = omg


Loop over the longer string
Loop over the shorter string
If the characters don't match, break out of the inner loop
If the characters do match, keep going
If you complete the inner loop and find a match, increment the count of matches
*/

function naiveSearch(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i++) {
        // console.log(i)
        for (var j = 0; j < short.length; j++) {
            // console.log(long[i], short[j]);
            //If there is no match, then break out of the inner loop
            if (short[j] !== long[i + j]) {
                console.log("BREAK!")
                break;
            }
            if (j === short.length - 1) {
                console.log("FOUND ONE");
                count++;
            }
        }
    }
    return count;
}

// naiveSearch("lorie loled", "loled");

//Performance Test
let t1 = performance.now();
console.log(naiveSearch("lorie loled", "loled"));
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)