// Completed solution here: https://scrimba.com/scrim/co51f4137b4439df7b9994b3a

// Prompt: 

// Given a string, find the number of different characters in it.

// Example: For s = "cabca", the output should be 3
// There are 3 different characters: a, b, and c

// Hints:
// inludes(): method determines whether an array includes a certain value among its entries, returning true or false as appropriate
// split()
// push()

function differentSymbolsNaive(str) {
    let uniqueLetters = new Set()
    for (let letter = 0; letter < str.length; letter++) {
        uniqueLetters.add(str[letter])
    }
    return uniqueLetters.size
}