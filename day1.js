// Completed solution here: https://scrimba.com/scrim/co5634061bed9225ab93bfdea

// Prompt:

// n children have m pieces of candy. They want to eat as much candy as they can,
// but each child must eat exactly the same number of candies. Individual pieces of
// candy cannot be split.

// Example: 

// For n = 3 and m = 10, the output should be 9
// Each child will each 3 pieces of candy.

// Hints:

// math.floor

// Plan of Action: 
// Take the total number of candy and divide by the number of children.
// The integer result is the number of candidates each child will get.

function candies(children, candy) {
    return parseInt(candy/children)*children // parseInt converts the number to the lowest integer
}