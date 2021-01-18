// Completed solution here: https://scrimba.com/scrim/co8ea42b1b4849cba1f335b07

// Prompt:

// Given a positive integer number, return the sum of all odd Fibonacci numbers that are less than
// or equal to the number. The first two numbers in the Fibonacci sequence are 1 and 1. Every additional
// number in the sequence is the sum of the previous numbers. The first six numbers of the Fibonnaci sequence 
// are 1, 1, 2, 3, 5, and 8.

// For example: sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, 5.

// Example:
// sumOddFibonacciNums(10) should return 10
// sumOddFibonacciNums(1000) should return 1785
// sumOddFibonacciNums(4000000) should return 4613732

// Fibonacci Numbers: In mathematics, the Fibonacci numbers, commonly denoted Fₙ, form a sequence, 
// called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

function sumOddFibonacciNumbers(num) {
    let sumNumbers = 2 // our return sum - it is 2 because 1+1=2 from the fibArray
    let currentFib = 0 // pointer to current Fibonacci number
    let fibArray = [1, 1] // list of Fibonacci numbers

    while (currentFib <= num) { // while the Fibonacci number is less than or equal to the number
        if (currentFib % 2 !==0) { //if the Fibonacci number is odd, add the value to the sumNumbers variable
            sumNumbers += currentFib
        }
        currentFib = fibArray[fibArray.length - 1] // adjust Fibonacci variable to sum of last and second-last values in list of Fibonacci numbers
        currentFib += fibArray[fibArray.length - 2]
        fibArray.push(currentFib) // add new Fibonacci number to list of Fibonacci numbers and begin next loop
    }
    return sumNumbers
}