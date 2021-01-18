// Completed solution here: https://scrimba.com/scrim/coff540b6b4f3e11643ff942a

// Prompt:

// You are given a string s that consists of only lowercase English letters.
// If vowels (a, e, i, o, u) are given a value of 1 and consonants are given a value
// of 2, return the sum of all the letters in the input string.

// Example:
// for s = "abcde", the output should be countVowelConsonants(s) = 8

// Hints:
// split()
// reduce() - method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

function countVowelConsonant(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) { // for each letter in the string, add 1 to count if the letter is a vowel.
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            count += 1
        } else { // if the letter is not a vowel, add 2 to count.
            count += 2
        }
    } return count
  }