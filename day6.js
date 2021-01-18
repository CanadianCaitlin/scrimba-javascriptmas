// Completed solution here: https://scrimba.com/scrim/coa0c4b1bb726434622137055

// Prompt:

// Given an array of strings, sort them in order of increasing lengths. If two strings have the same length,
// their relative order must be the same as in the initial array.

// Example:

// For inputArray = ["abc", "aaa", "a", "zz"]
// the output should be sortByLength(inputArray) = ["", "a", "zz", "abc", "aaa"]

// Hints: 
// sort() method sorts the elements of an array in place and returns the sorted array.
// The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

function sortByLength(strs) {
    return strs.sort((a,b) => a.length - b.length) // sort the numbers in ascending order; the first item will have the lowest length
}

// Context from https://stackoverflow.com/questions/6567941/how-does-sort-function-work-in-javascript-along-with-compare-function:
// By default, the array sort() method sorts alphabetically ascending. If you want to sort in some other order, because your array contains numbers or objects then you can pass a function in to the sort().

// The function you pass in takes two parameters, often called a and b, and returns: a negative number if the first argument should be sorted before the second (a < b) 0 if the arguments are equal (a==b) a positive number if the first argument should be sorted after the second (a > b)

// Now, here is the key bit: the function you pass as a parameter to sort() will be called repeatedly by sort() as it processes the whole array. sort() doesn't know or care about the datatype of the things in the array: each time it needs to know "Does item A come before item B?" it just calls your function. You don't need to worry about what type of sort algorithm is used internally by sort(), indeed one browser might use a different algorithm to another, but that's OK because you just have to provide a way for it to compare any two items from your array.

// Consulted https://stackoverflow.com/questions/10630766/how-to-sort-an-array-based-on-the-length-of-each-element
// to attain answer.