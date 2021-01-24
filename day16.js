// Completed solution here: 

// Prompt:
// Transform a given sentence into a new one with dashes between each two consecutive
// letters. 

// Example:
// For input = "aba caba", the output should be "a-b-a c-a-b-a"

// Hints:
// join()
// split()

function insertDashes(arr) {
    let stringWithDashes = []
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != " " && i == arr.length-1) {
            stringWithDashes.push(arr[i])
        } else if (arr[i] != " " && arr[i+1] != " ") {
            stringWithDashes.push(arr[i])
            stringWithDashes.push("-")
        } else if (arr[i] != " " && arr[i+1] == " ") {
            stringWithDashes.push(arr[i])
            stringWithDashes.push(" ")
        }
    } 
    return stringWithDashes.join('')
}

// I decided to do this with a for loop vs. the split method, so the length of code was
// more exhaustive than the ideal answer. 