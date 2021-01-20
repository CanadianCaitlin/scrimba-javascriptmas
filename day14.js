// Completed solution here: https://scrimba.com/scrim/cob79493eb6c485199f3d1270

// Prompt:

// Given an array of integers, find the maximal absolute different between
// any two of its adjacent elements.

// Examples:

// For inputArray[2,4,1,0], the output should be arrayMaximalAdjacentDifference(inputArray) = 3
// For inputArray[2,9,1,0], the output should be arrayMaximalAdjacentDifference(inputArray) = 8

// Hints:
// Math.abs()

function arrayMaximalAdjacentDifference(nums) {
    differenceArray = [] 
    for (i = 0; i < nums.length-1; i++) { // for number is nums list, find the absolute value of the differnce and add it to the differenceArray
        differenceArray.push(Math.abs(nums[i] - nums[i+1]))
    } highestDiff = differenceArray.sort() // sort the differenceArray and return the last/highest value
    return highestDiff[highestDiff.length-1]
}