// Completed solution here: https://scrimba.com/scrim/coacd4bba9ccdc2fd079dc811

// Prompt:

// Check whether the given string is a subsequence of the plaintext alphabet.

// Example:

// For s = "effg" or s = "cdce", the output should be alphabetSubsequence(s) = false
// For s = "ace" or s = "bxs", the output should be alphabetSubsequence(s) = true

// Hints:
// size Property
// charCodeAt()
// split()

function alphabetSubsequence(str) {
    let uniqueLetters = new Set()
    let charValues = []
    
    for (let letter = 0; letter < str.length; letter++) {
        uniqueLetters.add(str[letter])
        charValues.push(str.charCodeAt(letter))
    }
    
    if (uniqueLetters.size == str.length && charValues.sort() == charValues) {
        return true
    } else {
        return false
    }
}