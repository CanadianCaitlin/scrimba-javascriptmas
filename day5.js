// Completed solution here: https://scrimba.com/scrim/co63443939a7fb68c5652730f

// Prompt:

// Reverse the provided string. You may need to convert the string into an array before you are reverse.
// Your result must be a string.

// Example: 
// reverseAString('hello') returns 'olleh'
// reverseAString('Howdy') returns 'ydwoH'

// Hints:
// join(): method creates and returns a new string by concatenating all of the elements in an array
// split(): split a string into an array of substrings
// reverse(): method reverses an array in place

function reverseAString(str) {
    wordArray = [] // create an empty array for each letter to be added to in order
    for (let i = 0; i < str.length; i++) {
        wordArray.push(str[i])
    }
    reversedArray = wordArray.reverse() // reverse the order of the letters in the list
    word = reversedArray.join('') // join the reversed list of letters into one string
    return word
}

