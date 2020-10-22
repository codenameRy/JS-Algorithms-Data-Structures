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

