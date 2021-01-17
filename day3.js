// Prompt:

// Write a function that splits an array (first argument) into groups the length of size (second argument)
// that returns them as a two-dimensional array.

// Example:

// chunkyMonkey([,"a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]
// chunkyMonkey([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]]

// Hint: slice()

function chunkyMonkey(values, size) {
    slicedArrays = []
    let firstSlicedArray = values.slice(0, size)
    slicedArrays.push(firstSlicedArray)
    let secondSlicedArray = values.slice(size, values.length)
    slicedArrays.push(secondSlicedArray)
    return slicedArrays
    
}