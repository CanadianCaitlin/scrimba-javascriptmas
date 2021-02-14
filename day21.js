// Completed solution here: https://scrimba.com/scrim/co8f143d6b7086729ef2f0dbd

// Prompt: You have two integer arrays, a and b, and an integer target value, v. Determine whether there
// is a pair of numbers, where one number is taken from a and the other from b, that can be added together
// to get a sum of v. Return true if such a pair exists, otherwise return false.

// Example:

// For a = [1, 2, 3] and b = [10, 20, 30, 40], and v = 42, the output should be sumOfTwo(a,b,v) = true.

// Hints:

// hasOwnProperty(): returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

function sumOfTwo(nums1, nums2, value) {
    for (let i = 0; i < nums1.length; i++) {
        let difference = value - nums1[i]
        for (k = 0; k < nums2.length; k++) {
            if (nums2[k] == difference) {
                return true
            }
        }
    } return false
}