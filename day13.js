// Completed solution here: https://scrimba.com/scrim/co13442c7887b9b5b951b09f0

// Prompt: 

// Given an array of integers, remove each kth element from it. (Aside: remove every 3rd element in the array.)

// Example:
// For inputArray = [1,2,3,4,5,6,7,8,9,10] and k=3, the output should be 
// extractEachKth(inputArray, k) = [1,2,4,5,7,8,10]

// Hints:
// filter() method creates a new array with all elements that pass the test implemented by the provided function.

function extractEachKth(nums, index) {
    let numsFiltered = nums.filter(num => num % index != 0) // filters for indices that are not multiples of the index
    return numsFiltered
}
