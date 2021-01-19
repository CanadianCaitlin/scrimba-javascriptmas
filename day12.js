// Completed solution here: https://scrimba.com/scrim/co4de4dafa0ee5c60f6722f1a

// Prompt:

// Check if the given string is a correct time representation of the 24-hour clock.

// Example:

// For time = "13.58", the output should be validTime(time) = true
// For time = "25:51", the output should be validTime(time) = false
// For time = "02.76", the output should be validTime(time) = false

function validTime(str) {
    let timeSplit = str.split(":") // splits string by :
    if (timeSplit[0] > 24 || timeSplit[1] > 59) { // if hour is greater than 24 or minutes is greater than 59, return false
        return false
    } else {
        return true
    }
}